import React, { useState, useEffect } from 'react';
import useUploadFile from '../../hooks/useUploadFile';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading';
import ArticlePopup from '../../components/ArticlePopup';
import AddFile from '../../components/AddFile';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { postArticleApi,updateArticleApi } from '../home/homeApi';
import { setArticles, updateArticle } from '../../redux/articleSlice';

const CreateArticle = ({ setAdd, add, article }) => {
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');
    const [showFileUploader, setFileUploader] = useState(false);
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(false);
    const { uploadFiles } = useUploadFile();
    const [category, setCategory] = useState('');
    const [existingFiles, setExistingFiles] = useState([]);
    const dispatch = useDispatch();
    const user = useSelector(state => state.presisted.user);
    const articles = useSelector(state => state.presisted.article);

    useEffect(() => {
        if (article) {
            setText(article.text || '');
            setTitle(article.title || '');
            setCategory(article.category || '');
            setExistingFiles(article.files || []);
        }
        console.log(article)
    }, [article]);

    const handleSubmit = async () => {
        try {
            setLoading(true);
            setAdd(false);
            let filesUrls = existingFiles;

            if (files.length > 0) {
                const uploadedFiles = await uploadFiles(files);
                filesUrls = [...existingFiles, ...uploadedFiles];
            }

            let result;
            if (article) {
                result = await updateArticleApi(article._id, text, filesUrls, category, title);
            } else {
                result = await postArticleApi(text, filesUrls, user._id, category, title);
            }

            if (result.success) {
                result.data.user = user;
                if (articles) {
                    if (article) {
                        dispatch(updateArticle(result.data));
                    } else {
                        dispatch(addMoreArticle(result.data));
                    }
                } else {
                    dispatch(setArticles(result.data));
                }
                resetForm();
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    const resetForm = () => {
        setText('');
        setTitle('');
        setFiles([]);
        setExistingFiles([]);
        setCategory('');
        setFileUploader(false);
    };

    const toggleFilePopup = () => {
        setFileUploader(!showFileUploader);
    };

    const setTextValue = (e) => {
        setText(e.target.value);
    };

    const setFilesValue = (e) => {
        const newFiles = Array.from(e.target.files);
        setFiles(prev => [...prev, ...newFiles]);
    };

    const removeFile = (index) => {
        if (index < existingFiles.length) {
            setExistingFiles(prev => prev.filter((_, i) => i !== index));
        } else {
            const adjustedIndex = index - existingFiles.length;
            setFiles(prev => prev.filter((_, i) => i !== adjustedIndex));
        }
    };

    return (
        <div>
            {add && (
                <ArticlePopup
                    onClose={setAdd}
                    openFile={toggleFilePopup}
                    setValue={setTextValue}
                    value={text}
                    title={title}
                    setTitle={setTitle}
                    submit={handleSubmit}
                    category={category}
                    setCategory={setCategory}
                    isEditing={!!article}
                />
            )}
            {showFileUploader && (
                <AddFile
                    onClose={toggleFilePopup}
                    next={setAdd}
                    setValue={setFilesValue}
                    setFiles={setFiles}
                    setExistingFiles={setExistingFiles}
                    value={[...existingFiles, ...files]}
                    removeFile={removeFile}
                    existingFiles={existingFiles}
                />
            )}
            <Loading isLoading={loading} />
        </div>
    );
};

export default CreateArticle;