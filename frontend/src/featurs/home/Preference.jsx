import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';
import { setPreferenceApi } from './homeApi';
import { useDispatch, useSelector } from 'react-redux';
import { allPreferences } from '../../const/preferences';
import { setUser } from '../../redux/userSlice';

const Preference = ({ onSave }) => {
  const user = useSelector(state => state.presisted.user)
  const [selectedPreferences, setSelectedPreferences] = useState([]);
  const dispatch = useDispatch();

  const togglePreference = (preferenceToToggle) => {
    setSelectedPreferences(prev => 
      prev.includes(preferenceToToggle)
        ? prev.filter(pref => pref !== preferenceToToggle)
        : [...prev, preferenceToToggle]
    );
  };

  const handleSave = async () => {
    const response = await setPreferenceApi(selectedPreferences,user._id);
    onSave();
    if(response.success){
        dispatch(setUser(response.data))
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col">
      <h1 className="text-2xl font-bold mb-4">Select Preferences</h1>
      <div className="flex flex-wrap gap-2 mt-10 mb-4">
        {allPreferences.map((preference) => {
          const isSelected = selectedPreferences.includes(preference);
          return (
            <button
              key={preference}
              onClick={() => togglePreference(preference)}
              className={`px-3 py-1 rounded-full flex items-center transition-colors duration-200 ${
                isSelected ? 'bg-emerald-600 text-white' : 'bg-white text-gray-800'
              }`}
            >
              {preference}
              <span className="ml-2 focus:outline-none">
                {isSelected ? <X size={16} /> : <Plus size={16} />}
              </span>
            </button>
          );
        })}
      </div>
      <button
        onClick={handleSave}
        className="mt-10 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200"
      >
        Save Preferences
      </button>
    </div>
  );
};

export default Preference;