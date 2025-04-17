// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Registration = () => {
//     let nav =useNavigate();
//   return (
//     <div style={{
//         backgroundImage: "url('/assets/images/backgroundimage.png')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         minHeight: "100vh",
//         width: "100%",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}>
//       <div className="container mt-5">
//         <div className="row justify-content-center">
//           <div className="col-10 col-sm-10 col-md-10 col-lg-6">
//             <div style={{
//                     background: "rgba(255, 255, 255, 0.1)",
//                     borderRadius: "16px",
//                     padding: "2rem",
//                     backdropFilter: "blur(10px)",
//                     WebkitBackdropFilter: "blur(10px)",
//                     border: "1px solid rgba(255, 255, 255, 0.2)",
//                     color: "white",
//                 }}>
//               <form>
//                 <h3 className="text-center">Registration Form</h3>
//                 <div className="mb-3">
//                   <label htmlFor="exampleInputEmail1" className="form-label">Create Email address</label>
//                   <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter New Email'/>
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="exampleInputPassword1" className="form-label">Create Password</label>
//                   <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Create New Password'/>
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="exampleInputPassword2" className="form-label">Re-enter Password</label>
//                   <input type="password" className="form-control" id="exampleInputPassword2" placeholder='Re-enter Password'/>
//                 </div>
//                 <button type="button" className="btn btn-primary w-100" onClick={()=>nav("/login")} style={{ background: "blue", color: "white", border: "none" }}>
//                   Submit
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Registration;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const nav = useNavigate();

  const handleSubmit = async () => {
    if (!email || !password || !rePassword) {
      alert('All fields are required!');
      return;
    }

    if (password !== rePassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/register', { email, password });

      if (res.status === 201) {
        alert('Registration successful!');
        nav('/login');
      }
    } catch (err) {
      console.error('Registration error:', err);
      alert('Registration failed. Try again.');
    }
  };

  return (
    <div style={{
      backgroundImage: "url('/assets/images/backgroundimage.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      minHeight: "100vh",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-10 col-md-10 col-lg-6">
            <div style={{
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "16px",
              padding: "2rem",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "white",
            }}>
              <form onSubmit={(e) => e.preventDefault()}>
                <h3 className="text-center">Registration Form</h3>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Create Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter New Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Create Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Create New Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="rePassword" className="form-label">Re-enter Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="rePassword"
                    placeholder="Re-enter Password"
                    value={rePassword}
                    onChange={(e) => setRePassword(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary w-100"
                  onClick={handleSubmit}
                  style={{ background: "blue", color: "white", border: "none" }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;

