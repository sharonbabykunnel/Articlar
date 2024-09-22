import React, { useEffect } from 'react'
import EmptyState from '../../components/EmptyState'
import { Settings, User, User2 } from 'lucide-react'

const MainBody = () => {
    useEffect(()=>{
        
    })
  return (
    <div className="flex-1 p-8">
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-2xl font-bold">My Feeds</h1>
      <div className="flex items-center">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md mr-4">
          New Feed
        </button>
        <Settings size={24} className="text-gray-600 mr-4" />
        <User2 size={24} className="text-gray-600" />
      </div>
    </div>

    {/* Empty state */}
    <EmptyState />
  </div>
  )
}

export default MainBody
