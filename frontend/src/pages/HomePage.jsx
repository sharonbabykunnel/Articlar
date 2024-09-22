import React, { useEffect, useState } from 'react'
import SideBar from '../featurs/home/SideBar'
import MainBody from '../featurs/home/MainBody'
import { useLocation } from 'react-router-dom';
import Preference from '../featurs/home/Preference';

const HomePage = () => {
    const [showPreferences, setShowPreferences] = useState(false);
    const location = useLocation();
    useEffect(()=>{
        if(location.state && location.state.fromSignup) setShowPreferences(true)
    },[location]);

    const handlePreferences =()=>{
        setShowPreferences(false);
    }
  return (
    <div className="flex h-screen bg-gray-100">
      <SideBar/>
      {showPreferences ? (
        <Preference onSave={handlePreferences} /> 
        ):(
        <MainBody/>
      )}
    </div>
  )
}

export default HomePage
