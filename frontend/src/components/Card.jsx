import React from 'react'

const Card = ({ url, index }) => {
    console.log(url)
  const isImage = url[1].startsWith('image')

  return (
    <div key={index} className='flex flex-col items-center justify-center w-[60%]'>
      {isImage ? (
          <img src={url[0]} alt="Selected File" className='max-h-96 max-w-96 object-contain' />
      ) : (
          <video src={url[0]} controls className='max-h-96 max-w-96 object-contain'>
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  )
}

export default Card