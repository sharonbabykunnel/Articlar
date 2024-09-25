import { File } from 'lucide-react';
import React from 'react';
import { allPreferences } from '../const/preferences';
import SelectOption from './SelectOption';


const ArticlePopup = ({ onClose ,openFile, setValue, value, title, setTitle, submit, category, setCategory}) => {

  const togglefile = ()=>{
    onClose();
    openFile();
  }




  return (
    <div className="fixed inset-0 text-black bg-black bg-opacity-50 flex items-center justify-center z-10">
      <div className="bg-white p-6 rounded-xl max-h-96 h-full w-full max-w-3xl">
        <div className='flex justify-between'>
        <h2 className="text-xl font-bold mb-4">Create a Article</h2>
        <img onClick={onClose} className='w-4 h-4' src="https://cdn-icons-png.flaticon.com/128/2976/2976286.png" alt="" />

        </div>
        <div className="flex flex-col w-full h-60  rounded mb-4 border-b">
            <div className='flex gap-4 '>
            <div className=' flex-grow'>
                <label className="block mb-2">Title:</label>
                <input
                  type="text"
                  name="activity"
                  value={title}
                  onChange={(e)=>setTitle(e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>
            <div>
                <label className="block mb-2">Choos category</label>
                    <select name='industry'
                     value={category}
                     onChange={(e)=> setCategory(e.target.value)} 
                     className="w-full p-2 border rounded">
                        {allPreferences.map((pref, index) => (
                        <SelectOption key={index} value={pref} label={pref} />
                        ))}
                    </select>
              </div>
            </div>
          <textarea
            value={value}
            onChange={(e)=>setValue(e)}
            placeholder="What's on your mind?"
            className="w-full h-full p-2 resize-none border-none outline-none"
            style={{ boxShadow: 'none' }}
          ></textarea>
        </div>
        <div className='flex justify-between items-center'>
            <div className='flex gap-10'>
                <File onClick={togglefile}/>
            </div>
          <button onClick={()=>submit()} className="bg-blue-500 text-white px-4 py-2 rounded">
            Post
          </button>
          </div>
      </div>

    </div>
  );
};

export default ArticlePopup;
