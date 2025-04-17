import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import api from '../utils/axiosConfig';
import UserCard from './UserCard';

const EditProfile = ({ user }) => {
  const [formData, setFormData] = useState({
    username: user.userData.username,
    phone: user.userData.phone,
    age: user.userData.age,
    gender: user.userData.gender,
    profile_picture: user.userData.profile_picture,
    email: user.userData.email
  });

  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    // Update preview immediately
    setFormData(prev => ({
      ...prev,
      profile_picture: URL.createObjectURL(e.target.files[0])
    }));
  };

  const saveProfile = async (e) => {
    e.preventDefault();
    
    try {
      const formDataToSend = new FormData();
      
      // Append all form data
      formDataToSend.append('username', formData.username);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('age', formData.age);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('gender', formData.gender);
      
      // Append file if exists, otherwise append the existing URL
      if (file) {
        formDataToSend.append('profile_picture', file);
      } else if (formData.profile_picture) {
        formDataToSend.append('profile_picture_url', formData.profile_picture);
      }

      const res = await api.patch("/profile/", formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const updatedUser = {
        userData: {
          ...user.userData,
          ...res.data
        }
      };
      
      dispatch(addUser(updatedUser));

      if (res.status === 200){
        setShowToast(true);
        const i  = setInterval(()=>{
          setShowToast(false);
        },5000)
      };
     
    } catch (err) {
      console.error("Update error:", err);
      setError(err.response?.data?.message || "Failed to update profile");
    }
  };

  return (
    <div className='flex flex-col md:flex-row gap-8 p-4 scroll-my-60'>
      {/* Edit Form */}
      <div className='card bg-base-300 w-full md:w-1/2'>
        <div className="card-body">
        {showToast && <div className="toast toast-top toast-center">
            <div className="alert alert-info">
              <span>New mail arrived.</span>
            </div>
            <div className="alert alert-success">
              <span>Message sent successfully.</span>
            </div>
          </div>}
          <h2 className="card-title">Edit Profile</h2>
          {error && <div className="alert alert-error">{error}</div>}
          
          <form onSubmit={saveProfile} className="space-y-4">
            {/* Username */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input 
                type="text" 
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="input input-bordered"
                required
              />
            </div>

            {/* Profile Picture Upload */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Profile Picture</span>
              </label>
              <input 
                type="file" 
                accept="image/*"
                onChange={handleFileChange}
                className="file-input file-input-bordered w-full"
              />
              {!file && formData.profile_picture && (
                <div className="mt-2 text-sm">
                  Current: <a href={formData.profile_picture} target="_blank" rel="noopener noreferrer" className="link">View Image</a>
                </div>
              )}
            </div>

            {/* Age */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Age</span>
              </label>
              <input 
                type="number" 
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="input input-bordered"
                min="1"
                max="120"
              />
            </div>

            {/* Gender */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Gender</span>
              </label>
              <select 
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="select select-bordered"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Phone */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="input input-bordered"
              />
            </div>

            {/* Email (read-only) */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                readOnly
                className="input input-bordered bg-base-200"
              />
            </div>

            <button type="submit" className="btn btn-primary mt-6 w-full">
              Save Profile
            </button>
          </form>
        </div>
      </div>

      {/* Real-time Preview */}
      <div className='w-full md:w-1/2'>
        <h2 className='text-xl font-bold mb-4'>Live Preview</h2>
        <UserCard user={{ userData: formData }} />
      </div>
    </div>
  );
};

export default EditProfile;