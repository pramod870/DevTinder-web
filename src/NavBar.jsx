import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
        <div className="navbar bg-contain shadow-lg">
        <div className="flex-1">
          <img
            className='w-40 rounded-md'
            src="/uni_invoice_logo.png"
            alt="logo"
          />
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end mx-4">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>

      </div>
      <div className='h-[96%]'>
      <ul className="menu bg-base-200 w-56">
      <li><Link to="/login">Login</Link></li>
        <li><a className="active">Item 2</a></li>
        <li><a>Item 3</a></li>
      </ul>
      </div>

    </div>
  )
}

export default NavBar;