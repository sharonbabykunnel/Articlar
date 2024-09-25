import React, { useState } from 'react'
import useUploadFile from '../../hooks/useUploadFile';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading';
import ArticlePopup from '../../components/ArticlePopup';
import AddFile from '../../components/AddFile';
import { postArticleApi } from '../home/homeApi';

const CreateArticle = ({setAdd, add, article}) => {
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');
    const [showFileUploader,setFileUploader] = useState(false);
    const [files, setFiles] = useState([]);
    const [loading,setLoding] = useState(false);
    const {uploadFiles} = useUploadFile();
    const [category,setCategory] = useState('');

    const postSubmit = async ()=>{
        try {
            setLoding(true)
            setAdd(false)
            const filesUrls = await uploadFiles(files)
            console.log('text',text,filesUrls);
            const result = await postArticleApi(text,filesUrls,user._id,category)
            if(result.success){
                result.data.user = user;
                if(articles){
                    dispatch(addMoreArticle({...result.data}));
                }else{
                    dispatch(setArticles({...result.data}));
                }
                setText('');
                setFiles([]);
                setFileUploader(false);
            }
        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoding(false)
        }
    }

    const toggleFilePopup = ()=>{
        setFileUploader(!showFileUploader)
    }

    const setTextValue = (e)=>{
        setText(e.target.value)
    }

    const setFilesValue = (e)=>{
        const files = e.target.files
        setFiles(prev => [...prev,...files]);
    }

  return (
    <div>
    {add && <ArticlePopup onClose={setAdd} openFile={toggleFilePopup}  setValue={setTextValue} value={text} title={title} setTitle={setTitle} submit={postSubmit} category={category} setCategory={setCategory} />}
    {showFileUploader && <AddFile onClose={toggleFilePopup} next={setAdd} setValue={setFilesValue} setFiles={setFiles} value={files} />}
    <Loading isLoading={loading}/>
    </div>
  )
}

export default CreateArticle
