// import React from 'react'
// import Header from './Header'
// import Footer from './Footer'

// const About = () => {
//   return (
//     <>
//       <Header/>
//       <h1 className="text-danger text-center" style={{marginTop:"70px"}}>SCT Café</h1>
//       <div className="container mt-4">
//         <div className="row">
//           <div className="col-12 col-sm-12 col-md-12 col-lg-12">
//             <div className="card mb-3" >
//                 <div className="row g-0">
//                   <div className="col-md-8">
//                     <div className="card-body">
//                       <h3 className="card-title">Welcome to SCT Café-where every sip tells a story.</h3>
//                       <p className="card-text">At SCT Café, we believe that coffee is more than just a beverage — it's a ritual, a pause, a moment of connection. Nestled in the heart of the city, our café was born out of a passion for hand-crafted coffee, soulful teas, and meaningful conversations.</p>
//                       <p className="card-text"><small className="text-body-secondary">From ethically sourced beans to locally baked treats, everything we serve is made with care and quality in mind. Whether you're a coffee enthusiast, a tea lover, or simply seeking a cozy corner to relax, SCT Café offers a space that feels like home.</small></p>
//                     </div>
//                   </div>
//                   <div className="col-md-4">
//                     <img src="/assets/images/ChocolateCake.png" className="img-fluid rounded-start" alt="img"/>
//                   </div>
//                 </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* second section */}
//       <h1 className='text-center text-success'>What We Serve</h1>
//       <div className="container">
//         <div className="row">
//           <div className="col">
//           <div className="card mb-3" >
//               <div className="row g-0">
//                 <div className="col-md-4">
//                   <img src="/assets/images/AllCoffee.png" className="img-fluid rounded-start" alt="img"/>
//                 </div>
//                 <div className="col-md-8">
//                   <div className="card-body">
//                     {/* <h5 class="card-title">Card title</h5>
//                     <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                     <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p> */}
//                     <ul>
//                       <li className='mb-3 mt-3'>Signature handcrafted coffee & espresso</li>
//                       <li className='mb-3'>Artisan teas and cold brews</li>
//                       <li className='mb-3'>Freshly baked pastries & savory bites</li>
//                       <li>Seasonal specialties and creative blends</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* third section */}
//       <h1 className="text-danger text-center"><i className="fa-brands fa-pagelines me-2" style={{color:"#1cd70f"}}></i>Our Philosophy</h1>
//       <div className="container">
//         <p className="text-warning">We Are Committed To</p>
//         <div className="row">
//           <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-3">
//             <div className="h-100 p-3 border rounded d-flex flex-column align-items-center text-center bg-light">
//               <div style={{ width: "100%", height: "200px", overflow: "hidden" }}>
//                 <img src="/assets/images/farmer.png" className="w-100 h-100" style={{ objectFit: "cover" }} alt="img" />
//               </div>
//               <h6 className="mt-3">Supporting local farmers and artisans</h6>
//             </div>
//           </div>
//           <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-3">
//             <div className="h-100 p-3 border rounded d-flex flex-column align-items-center text-center bg-light">
//               <div style={{ width: "100%", height: "200px", overflow: "hidden" }}>
//                 <img src="/assets/images/cafegreenary.png" className="w-100 h-100" style={{ objectFit: "cover" }} alt="img" />
//               </div>
//               <h6 className="mt-3">Creating a sustainable and eco-friendly environment</h6>
//             </div>
//           </div>
//           <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-3">
//             <div className="h-100 p-3 border rounded d-flex flex-column align-items-center text-center bg-light">
//               <div style={{ width: "100%", height: "200px", overflow: "hidden" }}>
//                 <img src="/assets/images/socialhelp.png" className="w-100 h-100" style={{ objectFit: "cover" }} alt="img" />
//               </div>
//               <h6 className="mt-3">Fostering community through warmth and inclusivity</h6>
//             </div>
//           </div>
//         </div>
//       </div>

//         {/* fourth section */}

//         <div className="container mt-5">
//           <h2 className='text-center text-warning mb-4'><i className="fa-solid fa-lightbulb me-2" style={{color:"#FFD43B"}}></i>Our Story</h2>
//           <div className="row">
//             <div className="col-12 col-sm-12 col-md-12 col-lg-12 text-center">
//               <img src="/assets/images/AllCoffee.png" alt="img" className='img-fluid rounded-circle'style={{width:'200px',height:'200px'}}/>
//             </div>
//           </div>
//           <div className="row  border p-5 mt-5 shadow-lg mb-3 rounded">
//             <div className="col-12 col-sm-12 col-md-12 col-lg-12">
//               <h6>
//               SCT Café began with a simple idea — to create a space where people could unwind, connect, and enjoy truly great coffee. What started as a small corner café has now grown into a beloved hangout spot for students, professionals, families, and travelers alike.
//               </h6>
//               <h6>Every detail — from our cozy interiors to the playlist playing in the background — is carefully chosen to make you feel at home.</h6>
//             </div>
//           </div>
//         </div>

//         {/* fifth section */}
//         <div className="container my-5">
//           <h2 className="text-center text-info"><i className="fa-solid fa-user-group me-2" style={{color:"#B197FC"}}></i>Meet Our Team Members</h2>
//           <div className="row mt-5">
//             <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4">
//               <div className=" rounded shadow-lg h-100">
//                 <div className="card border-0">
//                   <div className="card card-body border-0">
//                   <img src="/assets/images/SCTLogo.png" alt="img" className='img-fluid rounded-circle d-flex m-auto'style={{width:'130px',height:'130px'}}/>
//                   </div>
//                   <div className="card card-Footer border-0 p-2">
//                     <ul className='mt-3'>
//                       <li><h6>Narasimha - Founder Of SCT Cafe</h6></li>
//                       <li>4+ Years Experience In Developer</li>
//                       <li>Sets the standard with professionalism and integrity.</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4">
//               <div className="rounded shadow-lg h-100">
//               <div className="card border-0">  
//                   <div className="card card-body border-0">
//                   <img src="/assets/images/SCTLogo.png" alt="img" className='img-fluid rounded-circle d-flex m-auto'style={{width:'130px',height:'130px'}}/>
//                   </div>
//                   <div className="card card-Footer border-0 p-2">
//                     <ul className='mt-3'>
//                       <li><h6>Hemanth - Head Barista-known for his signature latte art</h6></li>
//                       <li>Expert In Finance Mangement</li>
//                       <li>CO-Founder for SCT Cafe</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4">
//               <div className="rounded shadow-lg h-100">
//               <div className="card border-0">
//                   <div className="card card-body border-0">
//                   <img src="/assets/images/SCTLogo.png" alt="img" className='img-fluid rounded-circle d-flex m-auto'style={{width:'130px',height:'130px'}}/>
//                   </div>
//                   <div className="card card-Footer border-0 p-2">
//                     <ul className='mt-3'>
//                       <li><h6>Ganesh - Pastry Chef-baking daily fresh cookies & croissants</h6></li>
//                       <li>Certified Master Chef (CMC)- American Culinary Federation (ACF) </li>
//                       <li>Diploma in Professional Chef Training-International Culinary Center / ICC (now ICE)</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Footer/>
//     </>
//   )
// }


// const About = () => {
//   return (
//     <>
//       <Header />
//       <h1 className="text-danger text-center animate__animated animate__fadeInDown" style={{ marginTop: "70px" }}>SCT Café</h1>

//       {/* First Section */}
//       <div className="container mt-4 animate__animated animate__fadeInLeft">
//         <div className="row">
//           <div className="col-12">
//             <div className="card mb-3">
//               <div className="row g-0">
//                 <div className="col-md-8">
//                   <div className="card-body">
//                     <h3 className="card-title">Welcome to SCT Café-where every sip tells a story.</h3>
//                     <p className="card-text">At SCT Café, we believe that coffee is more than just a beverage — it's a ritual, a pause, a moment of connection. Nestled in the heart of the city, our café was born out of a passion for hand-crafted coffee, soulful teas, and meaningful conversations.</p>
//                     <p className="card-text"><small className="text-body-secondary">From ethically sourced beans to locally baked treats, everything we serve is made with care and quality in mind. Whether you're a coffee enthusiast, a tea lover, or simply seeking a cozy corner to relax, SCT Café offers a space that feels like home.</small></p>
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <img src="/assets/images/ChocolateCake.png" className="img-fluid rounded-start" alt="img" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Second Section */}
//       <h1 className='text-center text-success animate__animated animate__fadeInUp'>What We Serve</h1>
//       <div className="container animate__animated animate__zoomIn">
//         <div className="row">
//           <div className="col">
//             <div className="card mb-3">
//               <div className="row g-0">
//                 <div className="col-md-4">
//                   <img src="/assets/images/AllCoffee.png" className="img-fluid rounded-start" alt="img" />
//                 </div>
//                 <div className="col-md-8">
//                   <div className="card-body">
//                     <ul>
//                       <li className='mb-3 mt-3'>Signature handcrafted coffee & espresso</li>
//                       <li className='mb-3'>Artisan teas and cold brews</li>
//                       <li className='mb-3'>Freshly baked pastries & savory bites</li>
//                       <li>Seasonal specialties and creative blends</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Third Section */}
//       <h1 className="text-danger text-center animate__animated animate__fadeInDown">
//         <i className="fa-brands fa-pagelines me-2" style={{ color: "#1cd70f" }}></i>Our Philosophy
//       </h1>
//       <div className="container">
//         <p className="text-warning animate__animated animate__fadeIn">We Are Committed To</p>
//         <div className="row">
//           <div className="col-md-4 mb-3 animate__animated animate__fadeInUp">
//             <div className="h-100 p-3 border rounded d-flex flex-column align-items-center text-center bg-light">
//               <div style={{ width: "100%", height: "200px", overflow: "hidden" }}>
//                 <img src="/assets/images/farmer.png" className="w-100 h-100" style={{ objectFit: "cover" }} alt="img" />
//               </div>
//               <h6 className="mt-3">Supporting local farmers and artisans</h6>
//             </div>
//           </div>
//           <div className="col-md-4 mb-3 animate__animated animate__fadeInUp animate__delay-1s">
//             <div className="h-100 p-3 border rounded d-flex flex-column align-items-center text-center bg-light">
//               <div style={{ width: "100%", height: "200px", overflow: "hidden" }}>
//                 <img src="/assets/images/cafegreenary.png" className="w-100 h-100" style={{ objectFit: "cover" }} alt="img" />
//               </div>
//               <h6 className="mt-3">Creating a sustainable and eco-friendly environment</h6>
//             </div>
//           </div>
//           <div className="col-md-4 mb-3 animate__animated animate__fadeInUp animate__delay-2s">
//             <div className="h-100 p-3 border rounded d-flex flex-column align-items-center text-center bg-light">
//               <div style={{ width: "100%", height: "200px", overflow: "hidden" }}>
//                 <img src="/assets/images/socialhelp.png" className="w-100 h-100" style={{ objectFit: "cover" }} alt="img" />
//               </div>
//               <h6 className="mt-3">Fostering community through warmth and inclusivity</h6>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Fourth Section */}
//       <div className="container mt-5 animate__animated animate__zoomIn">
//         <h2 className='text-center text-warning mb-4'>
//           <i className="fa-solid fa-lightbulb me-2" style={{ color: "#FFD43B" }}></i>Our Story
//         </h2>
//         <div className="row">
//           <div className="col-12 text-center">
//             <img src="/assets/images/AllCoffee.png" alt="img" className='img-fluid rounded-circle' style={{ width: '200px', height: '200px' }} />
//           </div>
//         </div>
//         <div className="row border p-5 mt-5 shadow-lg mb-3 rounded animate__animated animate__fadeInUp">
//           <div className="col-12">
//             <h6>
//               SCT Café began with a simple idea — to create a space where people could unwind, connect, and enjoy truly great coffee. What started as a small corner café has now grown into a beloved hangout spot for students, professionals, families, and travelers alike.
//             </h6>
//             <h6>Every detail — from our cozy interiors to the playlist playing in the background — is carefully chosen to make you feel at home.</h6>
//           </div>
//         </div>
//       </div>

//       {/* Fifth Section */}
//       <div className="container my-5">
//         <h2 className="text-center text-info animate__animated animate__fadeInDown">
//           <i className="fa-solid fa-user-group me-2" style={{ color: "#B197FC" }}></i>Meet Our Team Members
//         </h2>
//         <div className="row mt-5">
//           <div className="col-md-4 mb-4 animate__animated animate__fadeInUp">
//             <div className="rounded shadow-lg h-100">
//               <div className="card border-0">
//                 <div className="card-body text-center">
//                   <img src="/assets/images/SCTLogo.png" alt="img" className='img-fluid rounded-circle m-auto' style={{ width: '130px', height: '130px' }} />
//                 </div>
//                 <div className="card-footer border-0 p-2">
//                   <ul className='mt-3'>
//                     <li><h6>Narasimha - Founder Of SCT Cafe</h6></li>
//                     <li>4+ Years Experience In Developer</li>
//                     <li>Sets the standard with professionalism and integrity.</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4 mb-4 animate__animated animate__fadeInUp animate__delay-2s">
//             <div className="rounded shadow-lg h-100">
//               <div className="card border-0">
//                 <div className="card-body text-center">
//                   <img src="/assets/images/SCTLogo.png" alt="img" className='img-fluid rounded-circle m-auto' style={{ width: '130px', height: '130px' }} />
//                 </div>
//                 <div className="card-footer border-0 p-2">
//                   <ul className='mt-3'>
//                     <li><h6>Hemanth - Head Barista-known for his signature latte art</h6></li>
//                     <li>Expert In Finance Mangement</li>
//                     <li>CO-Founder for SCT Cafe</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4 mb-4 animate__animated animate__fadeInUp animate__delay-3s">
//             <div className="rounded shadow-lg h-100">
//               <div className="card border-0">
//                 <div className="card-body text-center">
//                   <img src="/assets/images/SCTLogo.png" alt="img" className='img-fluid rounded-circle m-auto' style={{ width: '130px', height: '130px' }} />
//                 </div>
//                 <div className="card-footer border-0 p-2">
//                   <ul className='mt-3'>
//                     <li><h6>Ganesh - Pastry Chef-baking daily fresh cookies & croissants</h6></li>
//                     <li>Certified Master Chef (CMC)- American Culinary Federation (ACF) </li>
//                     <li>Diploma in Professional Chef Training-International Culinary Center / ICC (now ICE)</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   )
// }
// export default About

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './Header';
import Footer from './Footer';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true, // animation only once
    });
  }, []);

  return (
    <>
      <Header />

      <h1 className="text-danger text-center" style={{ marginTop: "70px" }} data-aos="fade-down">
        SCT Café
      </h1>

      <div className="container mt-4" data-aos="fade-right">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title">Welcome to SCT Café - where every sip tells a story.</h3>
                <p className="card-text">
                  At SCT Café, we believe that coffee is more than just a beverage — it's a ritual,
                  a pause, a moment of connection. Nestled in the heart of the city, our café was
                  born out of a passion for hand-crafted coffee, soulful teas, and meaningful
                  conversations.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    From ethically sourced beans to locally baked treats, everything we serve is
                    made with care and quality in mind.
                  </small>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img src="/assets/images/ChocolateCake.png" className="img-fluid rounded-start" alt="Chocolate Cake" />
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-center text-success" data-aos="fade-up">What We Serve</h1>
      <div className="container" data-aos="fade-left">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src="/assets/images/AllCoffee.png" className="img-fluid rounded-start" alt="Coffee" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <ul>
                  <li className="mb-3 mt-3">Signature handcrafted coffee & espresso</li>
                  <li className="mb-3">Artisan teas and cold brews</li>
                  <li className="mb-3">Freshly baked pastries & savory bites</li>
                  <li>Seasonal specialties and creative blends</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-danger text-center" data-aos="zoom-in">
        <i className="fa-brands fa-pagelines me-2" style={{ color: "#1cd70f" }}></i>Our Philosophy
      </h1>
      <div className="container">
        <p className="text-warning">We Are Committed To</p>
        <div className="row">
          <div className="col-lg-4 mb-3" data-aos="flip-left">
            <div className="h-100 p-3 border rounded text-center bg-light">
              <img src="/assets/images/farmer.png" className="img-fluid" alt="Farmer" />
              <h6 className="mt-3">Supporting local farmers and artisans</h6>
            </div>
          </div>
          <div className="col-lg-4 mb-3" data-aos="flip-up">
            <div className="h-100 p-3 border rounded text-center bg-light">
              <img src="/assets/images/cafegreenary.png" className="img-fluid" alt="Eco-friendly" />
              <h6 className="mt-3">Creating a sustainable and eco-friendly environment</h6>
            </div>
          </div>
          <div className="col-lg-4 mb-3" data-aos="flip-right">
            <div className="h-100 p-3 border rounded text-center bg-light">
              <img src="/assets/images/socialhelp.png" className="img-fluid" alt="Community" />
              <h6 className="mt-3">Fostering community through warmth and inclusivity</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5" data-aos="fade-up">
        <h2 className="text-center text-warning mb-4">
          <i className="fa-solid fa-lightbulb me-2" style={{ color: "#FFD43B" }}></i>Our Story
        </h2>
        <div className="text-center">
          <img src="/assets/images/AllCoffee.png" alt="Our Story" className="img-fluid rounded-circle mb-4" style={{ width: '200px', height: '200px' }} />
        </div>
        <div className="border p-4 shadow-lg rounded">
          <h6>
            SCT Café began with a simple idea — to create a space where people could unwind, connect, and enjoy truly great coffee. What started as a small corner café has now grown into a beloved hangout spot for students, professionals, families, and travelers alike.
          </h6>
          <h6>
            Every detail — from our cozy interiors to the playlist playing in the background — is carefully chosen to make you feel at home.
          </h6>
        </div>
      </div>

      <div className="container my-5" data-aos="zoom-in-up">
        <h2 className="text-center text-info">
          <i className="fa-solid fa-user-group me-2" style={{ color: "#B197FC" }}></i>Meet Our Team Members
        </h2>
        <div className="row mt-4">
          <div className="col-lg-4 mb-4" data-aos="fade-right">
            <div className="card h-100 text-center shadow-lg">
              <div className="card-body">
                <img src="/assets/images/SCTLogo.png" className="img-fluid rounded-circle mb-3" style={{ width: '130px', height: '130px' }} alt="Narasimha" />
                <ul className="list-unstyled">
                  <li><strong>Narasimha</strong> - Founder Of SCT Café</li>
                  <li>4+ Years Experience In Development</li>
                  <li>Sets the standard with professionalism and integrity.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4" data-aos="fade-up">
            <div className="card h-100 text-center shadow-lg">
              <div className="card-body">
                <img src="/assets/images/SCTLogo.png" className="img-fluid rounded-circle mb-3" style={{ width: '130px', height: '130px' }} alt="Hemanth" />
                <ul className="list-unstyled">
                  <li><strong>Hemanth</strong> - Head Barista</li>
                  <li>Expert In Finance Management</li>
                  <li>Co-Founder for SCT Café</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4" data-aos="fade-left">
            <div className="card h-100 text-center shadow-lg">
              <div className="card-body">
                <img src="/assets/images/SCTLogo.png" className="img-fluid rounded-circle mb-3" style={{ width: '130px', height: '130px' }} alt="Ganesh" />
                <ul className="list-unstyled">
                  <li><strong>Ganesh</strong> - Pastry Chef</li>
                  <li>Certified Master Chef (CMC)</li>
                  <li>Diploma in Culinary Arts - ICC</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;

