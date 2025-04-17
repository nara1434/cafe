import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    let nav = useNavigate();
  return (
    <>
        <div className="container-fluid mt-5 bg-dark text-white">
            <div className="row pt-5">
                <div className="col-12 col-sm-12 col-md-4 col-4">
                <ul style={{listStyle:"none"}}>
                    <li className='mb-3'>SCT Cafe</li>
                    <li className='mb-3'>Bringing warmth in every cup.</li>
                    <li className='mb-3'>We serve freshly brewed coffee and handcrafted tea's.</li>
                    <li>With love and local ingredients.</li>
                </ul>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-4">
                <ul  className=""style={{listStyle:"none"}}>
                    <li className='mb-3 home-ul' style={{cursor:'pointer'}} onClick={()=>nav('/home')}>Home</li>
                    <li className='mb-3 home-ul' style={{cursor:'pointer'}} onClick={()=>nav('/about')}>About Us</li>
                    <li className='home-ul' style={{cursor:'pointer'}} onClick={()=>nav('/contact   ')}>Get Support</li>
                </ul>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-4">
                <ul style={{listStyle:"none"}}>
                    <li className='mb-3 text-info'>Stay connected with us:</li>
                    <li className='mb-3 home-ul'><i className="fa-brands fa-instagram me-2" style={{color:"#E1306C",cursor:"pointer"}}></i>Instagram</li>
                    <li className='mb-3 home-ul'><i className="fa-brands fa-linkedin-in me-2" style={{color:"#0077B5",cursor:"pointer"}}></i>Linked in</li>
                    <li className='mb-3 home-ul'><i className="fa-brands fa-facebook me-2" style={{color:"#1877F2",cursor:"pointer"}}></i>Facebook</li>
                    <li className='mb-3 home-ul'><i className="fa-brands fa-whatsapp me-2" style={{color:"#25D366",cursor:"pointer"}}></i>WhatsApp</li>
                    <li className='home-ul'> <i className="fa-brands fa-x-twitter me-2 " style={{color:"#1DA1F2",cursor:"pointer"}}></i>Twitter</li>
                </ul>
                </div>
            </div>  
            <div className="row">
                <div className="col">
                    <p className="text-center text-primary">&copy; SmartClues Technologies LLP</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer