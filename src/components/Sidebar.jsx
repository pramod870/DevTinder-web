import { Link, useLocation } from 'react-router-dom';
import RealTime from './RealTime';


const Sidebar = () => {
  const location = useLocation();

  // Define your navigation items
  const navItems = [
    { path: '/feed', label: 'Feed View', icon: '📰' },
    { path: '/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/connections', label: 'Connections', icon: '🏪' },
    { path: '/requests', label: 'requests', icon: '🧑‍🦰' },
    { path: '/analytics', label: 'Analytics', icon: '📈' },
    { path: '/messages', label: 'Messages', icon: '✉️' },
    { path: '/settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-xl border-r border-gray-100 flex flex-col">
      {/* Logo/Brand Section */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-center">
          <img 
            src="/logo.png" 
            alt="Company Logo" 
            className="h-8 w-auto"
          />
          <span className="ml-2 text-xl font-semibold text-gray-800">BrandName</span>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                  location.pathname === item.path
                    ? 'bg-blue-50 text-blue-600 font-medium'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <span className="mr-3 text-lg">{item.icon}</span>
                <span>{item.label}</span>
                {location.pathname === item.path && (
                  <span className="ml-auto h-2 w-2 rounded-full bg-blue-500"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Profile/Footer Section */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center space-x-3">
          {/* <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
            <img 
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" 
              alt="User" 
              className="h-full w-full object-cover"
            />
          </div> */}
          <div>
               <RealTime />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;