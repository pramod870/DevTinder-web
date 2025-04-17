import axios from 'axios'
import React, { useEffect } from 'react'
import api from '../utils/axiosConfig'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addRequest } from '../utils/requestSlice'

const Requests = () => {
  const dispatch = useDispatch();
  const requestData = useSelector((store)=> store.request);
  console.log("requestData", requestData);

    const fetchRequest = async ()=>{
        try{
           
            const res = await api.get("http://127.0.0.1:8000/api/received-requests",{
                withCredentials:true,
            });

            dispatch(addRequest(res.data.data));


        }catch(err){

        }
    };

  useEffect(()=>{
      fetchRequest();
  },[])  
  if (!requestData) return null;
  return (
    <div className='flex justify-center pt-28 my-10 shadow-xl'>
      <div className="bg-white p-4 rounded-lg mb-4 w-[300px] text-center bg-slate-300 border border-blue-300 shadow-2xl">
        <img
          src={requestData?.profile_picture}
          alt='profile'
          className="w-20 h-20 object-cover mx-auto"
        />
        <h2 className="text-xl font-semibold mt-2">{requestData?.username}</h2>
        <p><strong>Email:</strong> {requestData?.email}</p>
        <p><strong>Age:</strong> {requestData?.age}</p>
        <p><strong>Gender:</strong> {requestData?.gender}</p>
        <p><strong>Pending Requests:</strong> {requestData?.received_requests}</p>
        <div className='flex pt-4'>
      <button className="btn mr-3 btn-primary">Reject</button>
      <button className="btn  btn-secondary">Accept</button>
      </div>
      </div>
    
    </div>
  );
};


export default Requests;