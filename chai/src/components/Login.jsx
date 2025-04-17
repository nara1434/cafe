    // import React from 'react'
    // import { useNavigate } from 'react-router-dom'

    // const Login = () => {
    //     let nav = useNavigate();
    // return (
    //     <div  style={{
    //         backgroundImage: "url('/assets/images/cafebackgroundimg.png')",
    //         backgroundSize: "cover",
    //         backgroundPosition: "center",
    //         backgroundRepeat: "no-repeat",
    //         minHeight: "100vh", 
    //         width: "100%",
    //         display: "flex",
    //         alignItems: "center",
    //         justifyContent: "center",
    //       }}>
    //         <div className="container mt-5">
    //             <div className="row justify-content-center">
    //                 <div className=" col-10 col-sm-10 col-md-10 col-lg-6">
    //                     <div style={{
    //                             background: "rgba(255, 255, 255, 0.1)",
    //                             borderRadius: "16px",
    //                             padding: "2rem",
    //                             backdropFilter: "blur(10px)",
    //                             WebkitBackdropFilter: "blur(10px)",
    //                             border: "1px solid rgba(255, 255, 255, 0.2)",
    //                             color: "white",
    //                         }}>
    //                     <form className='p-3'>
    //                         <h3 className="text-center">Login Form</h3>
    //                         <div className="mb-3">
    //                             <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    //                             <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Email'/>
    //                         </div>
    //                         <div className="mb-3">
    //                             <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    //                             <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter Your Password'/>
    //                         </div>
    //                         <button type="button" className="btn btn-primary"  onClick={()=>nav("/home")} style={{width:"100%",background:"blue",color:"white"}}>Login</button>
    //                         <p className='text-center mt-3'>Create an account<span className='text-primary ms-2'onClick={()=>nav('/register')} style={{cursor:"pointer"}}>Sign Up</span></p>
    //                     </form>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )
    // }

    // export default Login



// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const nav = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const res = await axios.post("http://localhost:5000/api/login", {
//         email,
//         password
//       });
//       alert(res.data.message);
//       nav("/home");
//     } catch (err) {
//       alert(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div style={{ backgroundImage: "url('/assets/images/cafebackgroundimg.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", minHeight: "100vh", width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
//       <div className="container mt-5">
//         <div className="row justify-content-center">
//           <div className="col-10 col-sm-10 col-md-10 col-lg-6">
//             <div style={{ background: "rgba(255, 255, 255, 0.1)", borderRadius: "16px", padding: "2rem", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255, 255, 255, 0.2)", color: "white" }}>
//               <form className='p-3'>
//                 <h3 className="text-center">Login Form</h3>
//                 <div className="mb-3">
//                   <label className="form-label">Email address</label>
//                   <input type="email" className="form-control" placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">Password</label>
//                   <input type="password" className="form-control" placeholder='Enter Your Password' value={password} onChange={(e) => setPassword(e.target.value)} />
//                 </div>
//                 <button type="button" className="btn btn-primary w-100" onClick={handleLogin}>Login</button>
//                 <p className='text-center mt-3'>Create an account <span className='text-primary ms-2' onClick={() => nav('/register')} style={{ cursor: "pointer" }}>Sign Up</span></p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../AuthContext'; // Import useAuth hook

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { login } = useAuth(); // Access login function from AuthContext
//   const nav = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const res = await axios.post("http://localhost:5000/api/login", {
//         email,
//         password
//       });
//       alert(res.data.message);
//       login(); // Set isAuthenticated to true in context
//       nav("/home"); // Redirect to home page
//     } catch (err) {
//       alert(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div style={{
//       backgroundImage: "url('/assets/images/cafebackgroundimg.png')",
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//       backgroundRepeat: "no-repeat",
//       minHeight: "100vh",
//       width: "100%",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center"
//     }}>
//       <div className="container mt-5">
//         <div className="row justify-content-center">
//           <div className="col-10 col-sm-10 col-md-10 col-lg-6">
//             <div style={{
//               background: "rgba(255, 255, 255, 0.1)",
//               borderRadius: "16px",
//               padding: "2rem",
//               backdropFilter: "blur(10px)",
//               WebkitBackdropFilter: "blur(10px)",
//               border: "1px solid rgba(255, 255, 255, 0.2)",
//               color: "white"
//             }}>
//               <form className='p-3'>
//                 <h3 className="text-center">Login Form</h3>
//                 <div className="mb-3">
//                   <label className="form-label">Email address</label>
//                   <input
//                     type="email"
//                     className="form-control"
//                     placeholder='Enter Your Email'
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">Password</label>
//                   <input
//                     type="password"
//                     className="form-control"
//                     placeholder='Enter Your Password'
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                 </div>
//                 <button
//                   type="button"
//                   className="btn btn-primary w-100"
//                   onClick={handleLogin}
//                 >
//                   Login
//                 </button>
//                 <p className='text-center mt-3'>
//                   Create an account
//                   <span
//                     className='text-primary ms-2'
//                     onClick={() => nav('/register')}
//                     style={{ cursor: "pointer" }}
//                   >
//                     Sign Up
//                   </span>
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Import useAuth hook

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth(); // Access login function from AuthContext
  const nav = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email,
        password
      });
      alert(res.data.message);
      login(); // Set isAuthenticated to true in context
      nav("/home"); // Redirect to home page
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div style={{
      backgroundImage: "url('/assets/images/cafebackgroundimg.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      minHeight: "100vh",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
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
              color: "white"
            }}>
              <form className='p-3'>
                <h3 className="text-center">Login Form</h3>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder='Enter Your Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder='Enter Your Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary w-100"
                  onClick={handleLogin}
                >
                  Login
                </button>
                <p className='text-center mt-3'>
                  Create an account
                  <span
                    className='text-primary ms-2'
                    onClick={() => nav('/register')}
                    style={{ cursor: "pointer" }}
                  >
                    Sign Up
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;


