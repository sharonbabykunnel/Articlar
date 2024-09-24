import React from 'react'
import Modal from 'react-modal'
import { ThreeCircles } from 'react-loader-spinner'

const Loading = ({isLoading}) => {
  return (
    <Modal
    isOpen={isLoading}
      className="fixed inset-0 flex items-center justify-center z-50 mt-[80px]"
      overlayClassName="fixed inset-0 bg-black bg-opacity-75"
    >
      <div className=" flex-col p-6 rounded-lg shadow-lg w-full max-w-lg mx-auto h-[80vh] overflow-auto flex justify-center items-center scrollbar-hide">
      <ThreeCircles/>
      <p className='text-white'>Uploading...</p>
      </div>
    </Modal>
  )
}

export default Loading
