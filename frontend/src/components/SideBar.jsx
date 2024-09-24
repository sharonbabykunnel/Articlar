import React from 'react'
import NavItem from './NavItem'
import { Bell, BookOpen, Compass, FolderOpen, PlusCircle, Search, Settings, User } from 'lucide-react';

const SideBar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white p-4 flex flex-col">
    <div className="flex items-center mb-8 mt-4">
      <div className="text-2xl font-bold mr-2">Articlar</div>
    </div>
    
    <nav className="space-y-10 mb-8">
      <NavItem icon={<BookOpen size={20} />} text="My Feeds" active to='/home' />
      <NavItem icon={<FolderOpen size={20} />} text="My contributions" to='/my-contributions' />
      <NavItem icon={<User size={20} />} text="Profile" to='/profile' />
    </nav>
    
    <button className="bg-blue-600 text-white py-2 px-4 rounded-md flex items-center justify-center mb-8">
      <PlusCircle size={20} className="mr-2" />
      New Feed
    </button>

  </div>
  )
}

export default SideBar
