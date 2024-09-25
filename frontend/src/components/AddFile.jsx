import React from 'react';
import UploadFromcomputer from './UploadFromcomputer';
import UploadMore from './UploadMore';

const AddFile = ({onClose, next, setValue, value, setFiles, setExistingFiles, existingFiles}) => {

    const openText = ()=>{
        next();
        onClose();
    }


    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
            <div className="bg-white p-3 rounded-xl max-h-[80%] h-full w-full max-w-3xl flex flex-col overflow-hidden">
                <div className='flex justify-between text-2xl border-b items-center'>
                    <h1>Editor</h1>
                    <img src="https://cdn-icons-png.flaticon.com/128/2976/2976286.png" alt="" className='w-5'onClick={onClose} />
                </div>
                <div className='flex-grow flex items-center justify-center flex-col gap-4 overflow-auto'>
                    {value?.length > 0 ? (
                        <UploadMore setValue={setValue} value={value} setFiles={setFiles} setExistingFiles={setExistingFiles} existingFiles={existingFiles}/>
                    ) : (
                        <UploadFromcomputer setValue={(e)=>setValue(e)}  />
                    )}
                </div>
                <div className='flex justify-end border-t pt-3'>
                    <button onClick={openText} className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
                </div>
            </div>
        </div>
    );
}

export default AddFile;
