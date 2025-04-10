import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const user_data = useSelector(store=> store.user);

  const navigate = useNavigate();


  const defaultAvt = "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"

    // Extract profile picture if user is logged in and it exists
  const profilePicture = user_data?.profile_picture || defaultAvt;

  const handleLogout = ()=>{
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    window.location.href = '/login';
  };


 
  return (
    <div>
        <div className="navbar bg-contain shadow-lg bg-slate-200">
        <div className="flex-1">
          <img
            className='w-40 rounded-md'
            src="/uni_invoice_logo.png"
            alt="logo"
          />
        </div>
        {user_data && <p className="flex px-4">Welcome, {user_data.username}</p>}
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end mx-4">
   
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={profilePicture} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <Link to="/profile"className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li><a>Settings</a></li>
              <li><a onClick={handleLogout}>Logout</a></li>
            </ul>
          </div>
        </div>

      </div>
  
    </div>
  )
}

export default NavBar;