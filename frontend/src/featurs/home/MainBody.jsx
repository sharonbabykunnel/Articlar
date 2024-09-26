import React, { useEffect, useState } from 'react'
import EmptyState from '../../components/EmptyState'
import { Settings, User, User2 } from 'lucide-react'
import ArticlePopup from '../../components/ArticlePopup';
import AddFile from '../../components/AddFile';
import Loading from '../../components/Loading';
import { toast } from 'react-toastify';
import useUploadFile from '../../hooks/useUploadFile';
import { deleteArticleApi, getArticleApi, getMyArticleApi, postArticleApi } from './homeApi';
import { useDispatch, useSelector } from 'react-redux';
import { addMoreArticle, setArticles } from '../../redux/articleSlice';
import { MagicTweet } from './ArticleCard';
import CreateArticle from '../article/CreateArticle';
import { Link } from 'react-router-dom';
import LogOut from '../../components/LogOut';

const MainBody = ({show}) => {
    const dispatch = useDispatch();
    const [add,setAdd] = useState(false);
    const user = useSelector(state => state.presisted.user);
    const articles = useSelector(state => state.presisted.article)

    useEffect(()=>{
        const fetchArticles = async ()=>{   
            const res = show === 'Feeds' ? await getArticleApi(user._id) : await getMyArticleApi(user._id);
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




  return (
    <div className="flex-1 p-8 overflow-y-auto">
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-2xl font-bold">My {show}</h1>
      <div className="flex items-center">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md mr-4" onClick={togglePopup}>
          New Feed
        </button>
        <Link to='/profile' >
        <User2 size={24} className="text-gray-600 mr-4" />
        </Link>
        <LogOut />
      </div>
    </div>

    {/* Empty state */}
    {articles.articles.length > 0 ? 
    <div>
    {articles.articles.map((article,index) =>
        <MagicTweet key={article._id} tweet={article} user={user} index={index} show={show} />
    )}
    </div>
    :
    <EmptyState setAdd={togglePopup} add={add} />}
    <CreateArticle add={add} setAdd={togglePopup} />
  </div>
  )
}

export default MainBody
