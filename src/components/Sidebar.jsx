import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="fixed left-0 h-screen w-56 bg-base-200 bg-slate-300 shadow-lg">
      <ul className="menu p-4 space-y-2 text-base-content">
        <li><Link to="/login">Login</Link></li>
        <li><a className="active">Item 2</a></li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
