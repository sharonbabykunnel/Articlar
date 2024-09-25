import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { updateUserProfile,   } from './../redux/userSlice'
import { Check, AlertCircle } from 'lucide-react';
import PersonalInformation from '../settings/PersonalInformation';
import PasswordChange from '../settings/PasswordChange';
import PreferencesChange from '../settings/PreferencesChange';
import { changeInformationApi, changePasswordApi, changePreferencesApi } from './profileApi';
import { setUser } from '../../redux/userSlice';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.presisted.user);
  const [message, setMessage] = useState(null);

  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    number: ''
  });
  const changePassword = ()=>{

  }
  const updatePreferences = ()=>{

  }

  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [preferences, setPreferences] = useState([]);

  useEffect(() => {
    if (user) {
      setProfile({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        dob: user.dob.split('T')[0], 
        number: user.number
      });
      setPreferences(user.preferences);
    }
  }, [user]);

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const resetMessage = ()=>{
    setTimeout(()=>setMessage(null),5000)
  }
  const handlePasswordChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handlePreferenceChange = (e) => {
    const value = e.target.value;
    console.log(value)
    setPreferences(
      preferences.includes(value)
        ? preferences.filter(pref => pref !== value)
        : [...preferences, value]
    );
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await changeInformationApi(profile,user._id);
      if (res.success){
      await dispatch(setUser(res.data));
      setMessage({ type: 'success', text: 'Profile updated successfully!' });
      resetMessage();
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to update profile. Please try again.' });
      resetMessage();
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    if (passwords.newPassword !== passwords.confirmPassword) {
      setMessage({ type: 'error', text: 'New passwords do not match.' });
      resetMessage();
      return;
    }
    try {
      const res = await changePasswordApi(passwords.currentPassword,passwords.newPassword,user._id);
      if(res.success){
      await dispatch(changePassword(passwords));
      setMessage({ type: 'success', text: 'Password changed successfully!' });
      setPasswords({ currentPassword: '', newPassword: '', confirmPassword: '' });
      resetMessage();
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to change password. Please try again.' });
      resetMessage();
    }
  };

  const handlePreferencesSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await changePreferencesApi(preferences,user._id);
      if(res.success){
      await dispatch(setUser(res.data));
      setMessage({ type: 'success', text: 'Preferences updated successfully!' });
      resetMessage();
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to update preferences. Please try again.' });
      resetMessage();
    }
  };

  return (
    <div className="container mx-auto p-4 overflow-y-auto">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      
      {message && (
        <div className={`flex items-center p-4 mb-4 text-sm rounded-lg ${message.type === 'error' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`} role="alert">
          {message.type === 'error' ? <AlertCircle className="flex-shrink-0 inline w-5 h-5 mr-3" /> : <Check className="flex-shrink-0 inline w-5 h-5 mr-3" />}
          <span className="sr-only">{message.type === 'error' ? 'Error' : 'Success'}</span>
          <div>{message.text}</div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PersonalInformation handleProfileSubmit={handleProfileSubmit} handleProfileChange={handleProfileChange} profile={profile} />
        <PasswordChange handlePasswordSubmit={handlePasswordSubmit} passwords={passwords} handlePasswordChange={handlePasswordChange} />
        <PreferencesChange handlePreferencesSubmit={handlePreferencesSubmit} handlePreferenceChange={handlePreferenceChange} preferences={preferences} />
      </div>
    </div>
  );
};

export default ProfilePage;