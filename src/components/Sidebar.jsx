import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="fixed left-0 h-screen w-56 bg-base-200 pt-28 bg-slate-300 shadow-lg">
      <ul className="menu p-4 space-y-2 text-base-content">
        <li className='hover:bg-blue-300 w-full'><Link to='/feed'>Feed View</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
