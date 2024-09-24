import React from 'react'
import { allPreferences } from '../../const/preferences'

const PreferencesChange = ({handlePreferencesSubmit,preferences,handlePreferenceChange}) => {
    console.log(preferences)
  return (
    <form onSubmit={handlePreferencesSubmit} className="space-y-4 md:col-span-2">
    <h2 className="text-xl font-semibold">Article Preferences</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {allPreferences.map((pref) => (
        <label key={pref} className="inline-flex items-center">
          <input
            type="checkbox"
            value={pref}
            checked={preferences.includes(pref)}
            onChange={handlePreferenceChange}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span className="ml-2 text-gray-700">{pref}</span>
        </label>
      ))}
    </div>
    <button type="submit" className="w-full bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
      Update Preferences
    </button>
  </form>
  )
}

export default PreferencesChange
