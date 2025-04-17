// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useNavigate } from 'react-router-dom';
// import { removeUser } from '../utils/userSlice';

// const NavBar = () => {
//   const user_data = useSelector(store=> store.user);

//   const navigate = useNavigate();
//   const dispatch = useDispatch();


//   const defaultAvt = "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"

//     // Extract profile picture if user is logged in and it exists
//   const profilePicture = user_data?.profile_picture || defaultAvt;

//   const handleLogout = ()=>{
//     localStorage.removeItem('access_token');
//     localStorage.removeItem('refresh_token');
//     dispatch(removeUser());
//     window.location.href = '/login';
//   };


 
//   return (
//     <div>
//         <div className="navbar fixed top-0 left-0 w-full bg-contain shadow-lg bg-slate-200 z-50">
//             <div className="flex-1">
//               <img
//                 className="w-40 rounded-md"
//                 src="/download.png"
//                 alt="logo"
//               />
//             </div>
        


//         {user_data && <p className="flex px-4">Welcome, {user_data.username}</p>}
//         <div className="flex-none gap-2">
//           <div className="dropdown dropdown-end mx-4">
   
//       <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
//               <div className="w-10 rounded-full">
//                 <img
//                   alt="Tailwind CSS Navbar component"
//                   src={profilePicture} />
//               </div>
//             </div>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
//               <li>
//                 <Link to="/profile"className="justify-between">
//                   Profile
//                   <span className="badge">New</span>
//                 </Link>
//               </li>
//               <li><a>Settings</a></li>
//               <li><a onClick={handleLogout}>Logout</a></li>
//             </ul>
//           </div>
//         </div>

//       </div>
  
//     </div>
//   )
// }

// export default NavBar;


import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { removeUser } from '../utils/userSlice';
import RealTime from './RealTime';

const NavBar = () => {
  const user = useSelector(store => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const defaultAvatar = "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp";
  const profilePicture = user?.userData?.profile_picture || defaultAvatar;
  const username = user?.userData?.username || 'Guest';

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    dispatch(removeUser());
    navigate('/login');
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 border-b border-gray-100">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img
                className="h-8 w-auto"
                src="/download.png"
                alt="Company Logo"
              />
              <span className="ml-2 text-xl font-semibold text-gray-800 hidden sm:block">My News</span>
            </Link>
          </div>

          {/* Navigation Links - Center */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/dashboard" className="text-gray-600 hover:text-primary-500 transition-colors duration-200">
              Dashboard
            </Link>
            <Link to="/projects" className="text-gray-600 hover:text-primary-500 transition-colors duration-200">
              Projects
            </Link>
            <Link to="/team" className="text-gray-600 hover:text-primary-500 transition-colors duration-200">
              Team
            </Link>
          </div>

          {/* User Profile Section */}
          {user ? (
            <div className="flex items-center space-x-4">
              <div className="hidden md:block text-sm font-medium text-gray-700">
                Welcome, <span className="font-semibold">{username}</span>
              </div>
              
              <div className="relative group">
                <button className="flex items-center space-x-1 focus:outline-none">
                  <div className="h-8 w-8 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <img
                      className="h-full w-full object-cover"
                      src={profilePicture}
                      alt="User profile"
                      onError={(e) => {
                        e.target.src = defaultAvatar;
                      }}
                    />
                  </div>
                  <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-1">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Your Profile
                  </Link>
                  <Link
                    to="/connections"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Connections
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-500 transition-colors"
              >
                Sign in
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 text-sm font-medium text-white bg-primary-500 rounded-md hover:bg-primary-600 transition-colors"
              >
                Get started
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;