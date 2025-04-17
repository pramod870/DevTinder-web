import React, { useEffect, useState } from 'react';

const RealTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString();
  };

  const formatDate = (date) => {
    return date.toLocaleDateString();
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-800 text-white rounded-xl shadow-md w-fit mx-auto">
      <div className="text-4xl font-mono">{formatTime(currentTime)}</div>
      <div className="text-lg text-gray-300">{formatDate(currentTime)}</div>
    </div>
  );
};

export default RealTime;
