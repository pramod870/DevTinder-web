import React from 'react';

const UserCard = ({ user }) => {
  // Destructure userData for cleaner access
//   const { username, email, phone, profile_picture, age, gender } = user.userData || {};

  return (
    <div className='m-4'>
      <div className="card bg-base-100 shadow-sm pt-10 pb-6 px-6">
        <div className="flex flex-col items-center">
          {/* Profile Picture */}
          <div className="avatar mb-4">
            <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
              <img 
                src={user?.userData?.profile_picture || '/default-profile.png'} 
                alt="profile pic"
                onError={(e) => {
                  e.target.src = '/default-profile.png';
                }}
              />
            </div>
          </div>
          
          {/* User Information */}
          <div className="text-center">
            <h2 className="text-xl font-bold mb-1">
              {user?.userData?.username || 'No username'}
              <span className="badge badge-secondary ml-2">{user?.userData?.age || 'N/A'}</span>
            </h2>
            <p className="text-gray-600 mb-2">{user?.userData?.gender || ''}</p>
            
            <div className="flex flex-col items-center space-y-2 mt-3">
              <div className="badge badge-outline p-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {user?.userData?.email || 'No email provided'}
              </div>
              
              <div className="badge badge-outline p-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {user?.userData?.phone || 'No phone provided'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;


// import React from 'react';

// const UserCard = ({ user }) => {
//   return (
//     <div className='flex card bg-base-100 shadow-xl max-w-md'>
//       <div className="card-body items-center text-center">
//         <div className="avatar mb-4">
//           <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
//             <img 
//               src={user?.userData?.profile_picture || '/default-profile.png'} 
//               alt="profile"
//               onError={(e) => {
//                 e.target.src = '/default-profile.png';
//               }}
//             />
//           </div>
//         </div>
        
//         <h2 className="card-title">
//           {user?.userData?.username || 'No username'}
//           {user?.userData?.age && (
//             <div className="badge badge-secondary ml-2">{user.userData.age}</div>
//           )}
//         </h2>
        
//         <p>{user?.userData?.gender}</p>
        
//         <div className="space-y-2 mt-4">
//           <div className="badge badge-outline gap-2">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//             </svg>
//             {user?.userData?.email || 'No email'}
//           </div>
          
//           <div className="badge badge-outline gap-2">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//             </svg>
//             {user?.userData?.phone || 'No phone'}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserCard;