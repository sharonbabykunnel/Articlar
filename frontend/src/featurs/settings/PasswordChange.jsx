import React from 'react'

const PasswordChange = ({handlePasswordSubmit,handlePasswordChange,passwords}) => {
  return (
    <form onSubmit={handlePasswordSubmit} className="space-y-4">
    <h2 className="text-xl font-semibold">Change Password</h2>
    <div>
      <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">Current Password</label>
      <input type="password" id="currentPassword" name="currentPassword" value={passwords.currentPassword} onChange={handlePasswordChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
    </div>
    <div>
      <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">New Password</label>
      <input type="password" id="newPassword" name="newPassword" value={passwords.newPassword} onChange={handlePasswordChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
    </div>
    <div>
      <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm New Password</label>
      <input type="password" id="confirmPassword" name="confirmPassword" value={passwords.confirmPassword} onChange={handlePasswordChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
    </div>
    <button type="submit" className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
      Change Password
    </button>
  </form>
  )
}

export default PasswordChange
