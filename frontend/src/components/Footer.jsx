import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className='p-10 rounded-2xl w-[90%] ml-[5%] mt-10 mb-4 fixed bottom-0'>
      <div className="bg-white flex flex-row p-7 rounded-[30px] text-[20px] justify-around opacity-100 blur-none">
        
        <button
          className='flex flex-col items-center bg-blue-600 text-white px-6 py-4 rounded-[15px] hover:bg-blue-500'
          onClick={() => navigate('/train-search')}
        >
          <h2 className='font-bold text-white'>Search by Train Name/Number</h2>
        </button>

        <button
          className='flex flex-col items-center bg-blue-600 text-white px-6 py-4 rounded-[15px] hover:bg-blue-500'
          onClick={() => navigate('/locate-platform')}
        >
          <h2 className='font-bold text-white'>Locate Train Platform</h2>
        </button>

        <button
          className='flex flex-col items-center bg-blue-600 text-white px-6 py-4 rounded-[15px] hover:bg-blue-500'
          onClick={() => navigate('/station-search')}
        >
          <h2 className='font-bold text-white'>Search by Station</h2>
        </button>

        <button
          className='flex flex-col items-center bg-blue-600 text-white px-6 py-4 rounded-[15px] hover:bg-blue-500'
          onClick={() => navigate('/seat-availability')}
        >
          <h2 className='font-bold text-white'>Seat Availability</h2>
        </button>

      </div>
    </div>
  );
};

export default Footer;
