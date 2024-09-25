import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import MainBody from '../featurs/home/MainBody'
import { useLocation } from 'react-router-dom';
import Preference from '../featurs/home/Preference';
import { useSelector } from 'react-redux';

const HomePage = () => {
    const [showPreferences, setShowPreferences] = useState(false);
    const location = useLocation();
    const user = useSelector(state => state.presisted.user);
    useEffect(()=>{
        console.log(location)
        if(location.state && location.state.fromSignup) setShowPreferences(true)
    },[location]);

    const handlePreferences =()=>{
        setShowPreferences(false);
    }
  return (
    <div className="flex h-screen bg-gray-100">
      <SideBar/>
      {showPreferences && user?.preferences?.length <1 ? (
        <Preference onSave={handlePreferences} /> 
        ):(
        <MainBody show='Feeds'/>
      )}
    </div>
  )
}

export default HomePage
