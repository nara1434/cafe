import React from 'react'
import Header from './Header'
import Map from './Map'
import Footer from './Footer'

const Contact = () => {
  return (
    <>
      <Header/>
      <div className="container" style={{marginTop:"150px"}}>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 border-end">
              <div className=' text-start'>
                <h1><i className="fa-solid fa-location-dot me-2" style={{color:"#f00a43"}}></i>Visit Us</h1>
                <ul style={{listStyle:"none"}} className='p-0'>
                  <li className='mb-2'>SCT Cafe</li>
                  <li className='mb-2'>Capital Pk Rd,Madhapur</li>
                  <li>Hyderabad, Telangana 500081</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 border-end">
              <div className='text-center'>
                <h1><i className="fa-solid fa-phone me-2" style={{color:"#74C0FC"}}></i>Call Us</h1>
                <ul style={{listStyle:"none"}} className='p-0'>
                  <li className='mb-2'>+919640203662</li>
                  <li>Land Line : 965143</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
              <div className='text-center'>
                <h1><i className="fa-solid fa-envelope me-2" style={{color:"#D93025"}}></i> Email Us</h1>
                <ul style={{listStyle:"none"}} className='p-0'>
                  <li className='mb-2'>Office Mail : Hello@SCTcafe.com</li>
                  <li>Personal: narasimha1@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>
      </div>

       {/* second section */}
       <div className="container mt-5 ">
        <div className="row text-center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <h2 className='mb-5'><i className="fa-solid fa-business-time me-2" style={{color:"#a817ab"}}></i>Hour's Of Operation</h2>
            <h4  className='mt-3'>Monday to Friday: <span className=' fs-7 text-muted'>8:00 AM-10:00 PM</span></h4>
            <h4  className='mt-3'>Saturday & Sunday:  <span className=' fs-7 text-muted'>8:00 AM-10:00 PM</span></h4>
          </div>
        </div>
       </div>

       {/* third section */}

       <div className="container mt-5">
         <h3 className='text-primary'>Google Maps <i className="fa-solid fa-map-location-dot ms-2 text-danger"></i></h3>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <Map/>
          </div>
        </div>
       </div>

       {/* footer section */}

       <Footer/>
    </>
  )
}

export default Contact