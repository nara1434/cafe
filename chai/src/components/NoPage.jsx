// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// const NoPage = () => {
//     let nav =useNavigate()
//   return (
//     <div className="conatiner w-50 mx-auto my-5">
//         <h1 className="text-center text-danger">Page Not Found</h1>
//         <div className='text-center mt-3'>
//             <button className='btn btn-danger'onClick={()=>nav('/home')}> Go To Home Page</button>
//         </div>
//     </div>
//   )
// }

// export default NoPage


import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const NoPage = () => {
  const nav = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    // You can add a check here to navigate based on isAuthenticated if needed
    console.log('IsAuthenticated:', isAuthenticated);
  }, [isAuthenticated]);

  const goHome = () => {
    if (isAuthenticated) {
      nav('/home');
    } else {
      nav('/login');
    }
  };

  return (
    <div className="text-center mt-5">
      <h1>404 - Page Not Found</h1>
      <button className="btn btn-primary mt-3" onClick={goHome}>
        Go to Home
      </button>
    </div>
  );
};

export default NoPage;


