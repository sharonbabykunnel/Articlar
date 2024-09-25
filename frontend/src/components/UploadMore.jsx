import React, { useMemo, useState } from 'react'
import Card from './Card';


const UploadMore = ({setValue, value, setFiles, setExistingFiles,existingFiles}) => {
    const [selected,setSelected] = useState(1)

    const fileUrls = useMemo(()=>{
        console.log(value)
        return value.map(file=>{
            if (file instanceof File) {
                return [URL.createObjectURL(file), file.type];
            } else {
                return file;
            } 
        });
    })
    console.log(fileUrls);
    const fileList = useMemo(()=>{
        return fileUrls.map(([url,type],index)=>(
            
            <div className='relative p-2' key={url}>
            { type.startsWith('image')  ?
            <img
                src={url}
                className={`object-contain ${selected === index + 1 ? 'border border-green-600 max-h-20 max-w-20' : 'm-1 max-h-20 max-w-20'}`}
                onClick={() => setSelected(index + 1)}
            /> :
            <video
                src={url}
                className={`object-contain ${selected === index + 1 ? 'border border-green-600 max-h-20 max-w-20' : 'm-1 max-h-20 max-w-20'}`}
                onClick={() => setSelected(index + 1)}
             />
            }
            </div>
        ))
    });

    const handleDelete = (selected)=>{
        if(existingFiles.length < selected){
        setFiles(prev=> prev.filter((_,index)=> index != selected-1));
        if(selected > 1){
            setSelected(selected-1)
        }
    }else{
        setExistingFiles(prev=> prev.filter((_,index)=> index != selected-1));
        if(selected > 1){
            setSelected(selected-1)
        }
    }
    }

  return (
    <div className='flex flex-grow overflow-hidden w-full'>
    <div className='border-r flex-grow flex items-center justify-center flex-wrap gap-2 overflow-auto w-[60%] '>
        {fileUrls?.map((url, index) =>  <Card key={url}  url={url}/>)}
    </div>
    <div className='p-4 flex flex-col justify-between border w-1/3 overflow-y-auto'>
    <div>
        <div className='flex justify-between w-full'>
            <h1>{`${selected}/${value?.length}`}</h1>
            <label className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
                Upload More
                <input type="file" className="hidden" onChange={(e)=>setValue(e)} multiple/>
            </label>
        </div>
        <div className='grid grid-cols-2 gap-4 mt-4'>
            {fileList}
        </div>
        </div>
        <div className=''>
            <img
                    src="https://cdn-icons-png.flaticon.com/128/484/484662.png"
                    alt="Delete"
                    className='w-5 cursor-pointer '
                    onClick={()=> handleDelete(selected)}
                />
            </div>
    </div>
    </div>
  )
}
export default UploadMore
