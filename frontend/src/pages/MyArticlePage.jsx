import React from 'react'
import MainBody from '../featurs/home/MainBody'
import SideBar from '../components/SideBar'

const MyArticlePage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <SideBar/>
        <MainBody show='Article'/>
    </div>
  )
}

export default MyArticlePage
