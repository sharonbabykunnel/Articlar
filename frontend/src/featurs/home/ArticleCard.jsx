import { Delete, Pencil, Trash, User, X } from "lucide-react";
import { Suspense, useState } from "react";
import { deleteArticleApi, likeArticleApi, removeArticleApi } from "./homeApi";
import { useDispatch } from "react-redux";
import { removeArticle, updateArticleLike } from "../../redux/articleSlice";
import ConfirmationPopup from "../../components/ConfirmationPopup";
import CreateArticle from "../article/CreateArticle";

const Twitter = ({ className, ...props }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <g>
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
    </g>
  </svg>
);

const Verified = ({ className, ...props }) => (
  <svg
    aria-label="Verified Account"
    viewBox="0 0 24 24"
    className={className}
    {...props}
  >
    <g fill="currentColor">
      <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
    </g>
  </svg>
);

export const truncate = (str, length) => {
  if (!str || str.length <= length) return str;
  return `${str.slice(0, length - 3)}...`;
};

const Skeleton = ({
  className,
  ...props
}) => {
  return (
    <div
      className="animate-pulse rounded-md bg-primary/10"
      {...props}
    />
  );
};

export const TweetSkeleton = () => (
  <div
    className="flex h-full max-h-max w-full min-w-[18rem] flex-col gap-2 rounded-lg border p-4"
  >
    <div className="flex flex-row gap-2">
      <Skeleton className="h-10 w-10 shrink-0 rounded-full" />
      <Skeleton className="h-10 w-full" />
    </div>
    <Skeleton className="h-20 w-full" />
  </div>
);

export const TweetNotFound = () => (
  <div
    className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-lg border p-4">
    <h3>Tweet not found</h3>
  </div>
);

export const TweetHeader = ({ tweet, removeArticle, show, deleteArticle, editArticle }) => (
  <div className="flex flex-row justify-between tracking-tight">
    <div className="flex items-center space-x-2">
      <span target="_blank" rel="noreferrer">
        <User/>
      </span>
      <div>
        <a
          target="_blank"
          rel="noreferrer"
          className="flex items-center whitespace-nowrap font-semibold"
        >
          {truncate(tweet.firstName+' '+tweet.lastName, 20)}
              <Verified className="ml-1 inline h-4 w-4 text-blue-500" />
        </a>

      </div>
    </div>
    <div>
      {show === 'Feeds' ?
      <X onClick={removeArticle}/>:
      <div className="flex gap-2">
        <Trash onClick={deleteArticle} />
        <Pencil onClick={editArticle} />
       </div>
      }
    </div>
  </div>
);

export const TweetBody = ({ text,title }) => (
  <div className="break-words leading-normal tracking-tighter">
    <h1 className="text-xl ">{title}</h1>
    <span
      className="text-sm font-normal"
      dangerouslySetInnerHTML={{ __html: text }}
    />
  </div>
);

export const TweetMedia = ({ files }) => (
  <div className="flex flex-1 items-center justify-center">
    {files.length > 0 && (
      <div className="relative flex transform-gpu snap-x snap-mandatory gap-4 overflow-x-auto">
        <div className="shrink-0 snap-center sm:w-2" />
        {files.map((file) => (
          < >
          {file[1].split('/')[0] === 'image' ?
          <img
            key={file[0]}
            src={file[0]}
            title={"Photo"}
            className="h-64 max-w-64 min-w-60 shrink-0 snap-center snap-always rounded-xl border object-cover shadow-sm"
          />
          :
          <video
          key={file[0]}
          poster={file[0]}
          controls
          playsInline
          className="rounded-xl border shadow-sm"
        >
          <source src={file[0]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
          }
          </>
        ))}
        <div className="shrink-0 snap-center sm:w-2" />
      </div>
    )}

  </div>
);

export const TweetLike = ({likes, likeArticle, isLiked})=>(
  <div className='flex justify-between m-4 mb-2'>
  <div className='flex  items-center gap-2'>
    <img  onClick={likeArticle}
        src={isLiked  
        ? "https://cdn-icons-png.flaticon.com/128/739/739231.png" 
        : "https://cdn-icons-png.flaticon.com/128/126/126473.png"   
        } 
        alt="likes"  
        className='h-6'
    />
    <div >
      {likes.length}
    </div>
  </div>
  </div>
)

export const MagicTweet = ({ tweet, user, index, show }) => {
  const dispatch = useDispatch();
  const [add,setAdd] = useState();
  const [isOpen, setIsOpen] = useState(false)
  const [isLiked, setIsLiked] = useState(tweet?.likes?.includes(user._id));
  const likeArticle = async ()=>{
    const res = await likeArticleApi(user._id,tweet._id);
    if(res.success){
      dispatch(updateArticleLike({userId:user._id,isLiked,index}));
      setIsLiked(!isLiked)
    }
  }
  const HandleRemoveArticle = async ()=>{
    if(user._id === tweet.userId) return 
    const res = await removeArticleApi(user._id,tweet._id)
    if(res.success){
      dispatch(removeArticle(tweet));
    }
  }
  const deleteArticle = async ()=>{
    const res = await deleteArticleApi(tweet._id);
    if(res.success){
     dispatch(removeArticle(tweet))
    }
}

const handleEdit = async ()=>{
  setAdd(!add);
}
  return (
    <div
      className="relative flex h-full w-full  flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md"
    >
      <TweetHeader tweet={tweet.user} removeArticle={HandleRemoveArticle} show={show} deleteArticle={()=>setIsOpen(true)} editArticle={handleEdit}/>
      <div className="flex flex-row sm:flex-col">
      <TweetBody text={tweet.text} title={tweet.title} />
      <TweetMedia files={tweet.files} />
      </div>
      <TweetLike likeArticle={likeArticle} isLiked={isLiked} likes={tweet.likes} />
      <ConfirmationPopup isOpen={isOpen} closeModel={()=>setIsOpen(false)} handleDelete={deleteArticle} />
      <CreateArticle add={add} article={tweet} setAdd={handleEdit} />
    </div>
  );
};

/**
 * TweetCard (Server Side Only)
 */
export const TweetCard = async ({
  id,
  components,
  fallback = <TweetSkeleton />,
  onError,
  ...props
}) => {
  const tweet = id
    ? await getTweet(id).catch((err) => {
        if (onError) {
          onError(err);
        } else {
          console.error(err);
        }
      })
    : undefined;

  if (!tweet) {
    const NotFound = components?.TweetNotFound || TweetNotFound;
    return <NotFound {...props} />;
  }

  return (
    <Suspense fallback={fallback}>
      <MagicTweet tweet={tweet} {...props} />
    </Suspense>
  );
};

export default TweetCard;
