import React from 'react';
import UserCard from './UserCard';
import { useSelector } from 'react-redux';

const Profile = () => {

  const userData = useSelector((store=> store.user));
  console.log("userData", userData);
  return (

      <div className="flex justify-center rounded-lg w-full pt-56 shadow-md pl-96">
        <UserCard user={userData}/>
      </div>

  );
};

export default Profile;
