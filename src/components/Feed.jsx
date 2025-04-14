import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/feedSlice';
import { useNavigate } from 'react-router-dom';


const Feed = () => {
  const feed = useSelector((store)=> store.feed);
  const userData = useSelector((store)=> store.user);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  console.log("feed", feed);
  const dispatch = useDispatch();
  const getFeed = async ()=>{
    if(!userData){
      navigate('/login');
    }
    if(!feed){
    const res = await axios.get("http://15.206.95.141/api/feed/feeds");
   
      dispatch(addFeed(res.data));
    }

}
  useEffect(()=>{
      getFeed();
  },[])
  return (
    <div className="w-full flex justify-center mt-10 px-4">
      <div className="max-w-4xl w-full space-y-6">
        {feed?.map((item, index) => (
          <div key={index} className="p-4 bg-white shadow-md rounded-lg">
            <img src={item.image_link} alt={item.title} className="w-full h-64 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h2>
            <p className="text-sm text-gray-500 mb-1">
              <span className="font-medium">By:</span> {item.author || 'Unknown'}
            </p>
            <p className="text-sm text-gray-500 mb-1">
              <span className="font-medium">Published:</span> {new Date(item.published).toLocaleString()}
            </p>
            <p className="text-gray-700 mb-2" dangerouslySetInnerHTML={{ __html: item.summary }} />
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feed;