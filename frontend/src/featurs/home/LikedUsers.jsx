import React from 'react'

const LikedUsers = ({isOpenLike, closeModalLike, likedUsers }) => {
  return (
    <div>
            <Modal
        isOpen={isOpenLike}
        className="fixed inset-0 flex items-center justify-center z-20 mt-[80px]"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75"
      >
        <div className="bg-white p-6 rounded-lg  shadow-lg w-full z-30 max-w-lg mx-auto h-[80vh] overflow-auto scrollbar-hide">
        <div className="flex justify-between   ">
          <h2 className="text-2xl font-semibold mb-4">
            Liked by
          </h2>
          <X onClick={closeModalLike}/>
          </div>
          <div>
          </div>
          <div className='h-[50vh] my-2 overflow-auto scrollbar-hide rounded-t-lg '>
          <div className='rounded shadow'>
          {likedUsers.users?.map((user,index) => (
          <div key={user._id} className={`flex items-center justify-between 'bg-lite_user'  p-4 `}>
            <div className="flex items-center">
              <img src={'https://cdn-icons-png.flaticon.com/128/3059/3059518.png'} alt='' className="w-16 h-16 rounded-full mr-4" />
              <div>
                <h2 className="font-bold">{user.name}</h2>
              </div>
            </div>
          </div>))}
        </div>
        </div>
        </div>
        </Modal>
    </div>
  )
}

export default LikedUsers
