import React from 'react'
import Body from './../featurs/profile/Body'
import SideBar from '../components/SideBar'

const ProfilePage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <SideBar/>
      <Body/>
    </div>
  )
}

export default ProfilePage
