import React from 'react'

const UserCard = (userdata) => {
    console.log("User Card", userdata);

  return (
    <div className=''>
        <div className="card bg-base-100 justify-center shadow-sm pt-20">
        <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                <img 
                className='flex'
                src={userdata?.user?.profile_picture}
                alt='profile pic'
                />
            </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                User Profile
                <div className="badge badge-secondary">{userdata.user.username}</div>
                </h2>
                <div className="card-actions justify-end">
                <div className="badge badge-outline">{userdata.user.email}</div>
                <p className='flex'>{userdata.user.phone}</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default UserCard;