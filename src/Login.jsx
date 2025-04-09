import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  const[error, setError] = useState('');
  const[sccess, setSccess] = useState('');


  const handleClick = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setError('');
    setSccess('');

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login/", {
        email:emailId,
        password:password,
      },{withCredentials:true});

      console.log(response); 

      if(response.status ===200){
        setSccess(response.data.message || "Login successful!");


      } 
    } catch (err) {
      if(err.response && err.response.status ===401){
        setError(error.response?.message || "Invalid Email or Password");
      } else {
        setError("Something went wrong. Please try again.");
      };
    }
  };

    // Auto clear alerts after 5 seconds
    useEffect(() => {
      if (error || sccess) {
        const timer = setTimeout(() => {
          setError('');
          setSccess('');
        }, 5000);
        return () => clearTimeout(timer);
      }
    }, [error, sccess]);
  

  return (
    <div className='flex justify-center my-10'>
      <div className="card card-dash bg-base-300 w-96">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
    {sccess &&   <div role="alert" className="alert alert-success">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{sccess}</span>
          </div>}
          <form className="card-actions justify-center" onSubmit={handleClick}>
            <input 
              type="text" 
              value={emailId} 
              onChange={(e) => setEmailId(e.target.value)}
              placeholder="Email Id"
              className="input p-4"
            />
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password" 
              className="input"
            />
            <button type="submit" className="btn btn-primary">Login</button>

          </form>
       {error &&  <div role="alert" className="alert alert-error">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className=''>{error}</span>
            </div>}
        </div>
      </div>
    </div>
  );
};

export default Login;
