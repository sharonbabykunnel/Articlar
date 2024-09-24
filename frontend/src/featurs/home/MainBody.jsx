import React, { useEffect, useState } from 'react'
import EmptyState from '../../components/EmptyState'
import { Settings, User, User2 } from 'lucide-react'
import ArticlePopup from '../../components/ArticlePopup';
import AddFile from '../../components/AddFile';
import Loading from '../../components/Loading';
import { toast } from 'react-toastify';
import useUploadFile from '../../hooks/useUploadFile';
import { getArticleApi, getMyArticleApi, postArticleApi } from './homeApi';
import { useDispatch, useSelector } from 'react-redux';
import { addMoreArticle, setArticles } from '../../redux/articleSlice';
import { MagicTweet } from './ArticleCard';

const MainBody = ({show}) => {
    const dispatch = useDispatch();
    const [add,setAdd] = useState(false);
    const [text, setText] = useState('');
    const [showFileUploader,setFileUploader] = useState(false);
    const [files, setFiles] = useState([]);
    const [loading,setLoding] = useState(false);
    const {uploadFiles} = useUploadFile();
    const user = useSelector(state => state.presisted.user);
    const articles = useSelector(state => state.presisted.article)
    const [category,setCategory] = useState('');

    useEffect(()=>{
        const fetchArticles = async ()=>{   
            const res = await show === 'Feeds' ? getArticleApi(user._id) : getMyArticleApi(user._id);
            console.log(res.data,'adfasd')
            if(res.success){
                dispatch(setArticles(res.data));
            }
        }
        fetchArticles();
    },[user._id]);

    const togglePopup = ()=>{
        setAdd(!add);
    };

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

  return (
    <div className="flex-1 p-8">
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-2xl font-bold">My {show}</h1>
      <div className="flex items-center">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md mr-4" onClick={togglePopup}>
          New Feed
        </button>
        <User2 size={24} className="text-gray-600" />
      </div>
    </div>

    {/* Empty state */}
    {articles.articles.length > 0 ? 
    <div>
    {articles.articles.map((article,index) =>
        <MagicTweet key={article._id} tweet={article} user={user} index={index} />
    )}
    </div>
    :
    <EmptyState setAdd={togglePopup} />}
    {add && <ArticlePopup onClose={togglePopup} openFile={toggleFilePopup}  setValue={setTextValue} value={text} submit={postSubmit} category={category} setCategory={setCategory} />}
    {showFileUploader && <AddFile onClose={toggleFilePopup} next={togglePopup} setValue={setFilesValue} setFiles={setFiles} value={files} />}
    <Loading isLoading={loading}/>
  </div>
  )
}

export default MainBody
