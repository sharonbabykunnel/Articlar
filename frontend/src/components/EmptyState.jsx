import React from 'react'
import CreateArticle from '../featurs/article/CreateArticle'

const EmptyState = ({setAdd, add}) => {
  return (
    <div className="text-center mt-20">
      <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="w-8 h-2 bg-gray-400 mb-2 rounded"></div>
          <div className="w-12 h-2 bg-gray-300 mb-2 rounded"></div>
          <div className="w-10 h-2 bg-gray-200 rounded"></div>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-gray-700 mb-2">Nothing here yet</h2>
      <p className="text-gray-500 mb-6">You can add your first feed right now.<br />Try it out!</p>
      <button className="bg-blue-600 text-white px-6 py-2 rounded-md" onClick={setAdd}>
        Create New Feed
      </button>
    </div>
  )
}

export default EmptyState
