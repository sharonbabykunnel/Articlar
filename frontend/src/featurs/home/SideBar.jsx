import React from 'react'
import NavItem from '../../components/NavItem'
import { Bell, BookOpen, Compass, FolderOpen, PlusCircle, Search, Settings, User } from 'lucide-react';

const SideBar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white p-4 flex flex-col">
    <div className="flex items-center mb-8">
      <div className="text-2xl font-bold mr-2">Articlar{' '}</div>
      <Bell size={20} />
    </div>
    
    <div className="relative mb-4">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
      <input
        type="text"
        placeholder="Search or go to..."
        className="w-full bg-gray-800 text-white pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    
    <nav className="space-y-2 mb-8">
      <NavItem icon={<BookOpen size={20} />} text="My Feeds" active />
      <NavItem icon={<FolderOpen size={20} />} text="Bundles" />
      <NavItem icon={<BookOpen size={20} />} text="Collections" />
      <NavItem icon={<Bell size={20} />} text="Bots & Alerts" />
      <NavItem icon={<Compass size={20} />} text="Explore" />
    </nav>
    
    <button className="bg-blue-600 text-white py-2 px-4 rounded-md flex items-center justify-center mb-8">
      <PlusCircle size={20} className="mr-2" />
      New Feed
    </button>
    
    <div className="mt-auto">
      <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
        <span>Basic Trial</span>
        <span className="text-blue-400">Manage</span>
      </div>
      <div className="text-sm text-gray-400">6 days left</div>
    </div>
  </div>
  )
}

export default SideBar
