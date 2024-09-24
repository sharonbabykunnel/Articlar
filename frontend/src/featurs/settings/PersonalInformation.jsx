import React from 'react'

const PersonalInformation = ({handleProfileSubmit,profile,handleProfileChange}) => {
    
  return (
    <form onSubmit={handleProfileSubmit} className="space-y-4">
    <h2 className="text-xl font-semibold">Personal Information</h2>
    <div>
      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
      <input type="text" id="firstName" name="firstName" value={profile.firstName} onChange={handleProfileChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
    </div>
    <div>
      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
      <input type="text" id="lastName" name="lastName" value={profile.lastName} onChange={handleProfileChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
    </div>
    <div>
      <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
      <input type="date" id="dob" name="dob" value={profile.dob} onChange={handleProfileChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
    </div>
    <div>
      <label htmlFor="number" className="block text-sm font-medium text-gray-700">Phone Number</label>
      <input type="tel" id="number" name="number" value={profile.number} onChange={handleProfileChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
    </div>
    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
      Update Profile
    </button>
  </form>
  )
}

export default PersonalInformation
