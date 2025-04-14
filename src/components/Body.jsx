import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { addUser } from '../utils/userSlice'
import Sidebar from './Sidebar'
import Profile from './Profile'


const Body = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store)=>store.user);
  const fetchUser = async()=>{
    if(userData) return;
    try{
      const accessToken = localStorage.getItem('access_token');
      console.log("accessToken", accessToken);

      if (accessToken){
        navigate('/feed');
      }
      if(!accessToken){
        navigate('/login')
        console.warn("Access token not found in localStorage");
        return;
     
      }

      const res = await axios.get("http://127.0.0.1:8000/api/profile/", {
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
    });
    dispatch(addUser(res.data));

    }catch(err){
      if (err.status ===401){
        navigate('/login');
      }
      console.error(err);
    }
  };
  useEffect(()=> {
   
    fetchUser();

     
  },[])
  return (
    <div>
        <NavBar />
        <Sidebar />
        <Outlet /> 
        <Footer />
    </div>
  )
}

export default Body;