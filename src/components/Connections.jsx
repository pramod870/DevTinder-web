import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import api from '../utils/axiosConfig';
import { useDispatch, useSelector } from 'react-redux';
import { addConnections } from '../utils/connectionSlice';

const Connections = () => {
    const connections = useSelector((store) => store.connection?.connections); 
    console.log("connections", connections);
    const dispatch  = useDispatch();

    const fetchConnections = async()=>{

        const res = await api.get(BASE_URL+ "/my-connections",{
            withCredentials:true,
        });
        dispatch(addConnections(res.data));
        console.log(res);
        try{

        }catch(err){
            //handle error code
        }
    };

    useEffect(()=>{
        fetchConnections();
    }, [])
    if(!connections) return ;
    if(connections.length ===0) return <h1>No Connection Found.</h1>
  return (
    <div className='flex justify-center pt-28 my-10 shadow-xl'>
        <h1 className='text-bold text-2xl'>Connections</h1>
        {connections.map((conn) => (
        <div key={conn.id} className="bg-white shadow-md p-4 rounded-lg mb-4 w-[300px] text-center">
            <img
            src={conn.sender.profile_picture}
            alt='conn-image'
            />
       
          <p><strong>Sender:</strong> {conn.sender.username} (ID: {conn.sender.id})</p>
          <p><strong>Receiver:</strong> {conn.receiver.username} (ID: {conn.receiver.id})</p>
          <p><strong>Status:</strong> {conn.status}</p>
          <p><strong>Time:</strong> {new Date(conn.timestamp).toLocaleString()}</p>
         
        </div>
      ))}

    </div>
  )
}

export default Connections;