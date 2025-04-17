// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// const MainNavbar = () => {
//     const nav = useNavigate();

//     return (
//         <>
//             <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
//                 <div className="container">
//                     <img src="/assets/images/SCTLogo1.png" className='img-fluid rounded-circle' alt="logo" onClick={() => nav('/home')} style={{ cursor: 'pointer',width:"60px",height:"60px" }}/>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//                         <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
//                             <li className="nav-item">
//                                 <span className="nav-link active" onClick={() => nav('/home')} style={{ cursor: 'pointer' }}>
//                                     <i className="fa-solid fa-house me-1"></i>Home
//                                 </span>
//                             </li>
//                             <li className="nav-item">
//                                 <span className="nav-link" onClick={() => nav('/about')} style={{ cursor: 'pointer' }}>
//                                     <i className="fa-solid fa-circle-info me-1"></i>About
//                                 </span>
//                             </li>
//                             <li className="nav-item">
//                                 <span className="nav-link" onClick={() => nav('/contact')} style={{ cursor: 'pointer' }}>
//                                     <i className="fa-solid fa-phone me-1"></i>Contact
//                                 </span>
//                             </li>
//                             <div className="dropdown">
//                                 <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                     <i className="fa-solid fa-list-ul me-1"></i> Categories
//                                 </button>
//                                 <ul className="dropdown-menu">
//                                     <li><span className="dropdown-item" onClick={() => nav('/categories/coffee')} style={{ cursor: 'pointer' }}>Coffee's</span></li>
//                                     <li><hr className="dropdown-divider" /></li>
//                                     <li><span className="dropdown-item" onClick={() => nav('/categories/tea')} style={{ cursor: 'pointer' }}>Tea's</span></li>
//                                     <li><hr className="dropdown-divider" /></li>
//                                     <li><span className="dropdown-item" onClick={() => nav('/categories/beverages')} style={{ cursor: 'pointer' }}>Beverages</span></li>
//                                     <li><hr className="dropdown-divider" /></li>
//                                     <li><span className="dropdown-item" onClick={() => nav('/categories/bakery')} style={{ cursor: 'pointer' }}>Bakery & Pastries</span></li>
//                                     <li><hr className="dropdown-divider" /></li>
//                                     <li><span className="dropdown-item" onClick={() => nav('/categories/deserts')} style={{ cursor: 'pointer' }}>Desserts</span></li>
//                                 </ul>
//                             </div>
//                         </ul>
//                         <ul className="navbar-nav ms-auto mb-2">
//                             <li className="nav-item">
//                                 <span className="nav-link" onClick={() => nav('/cart')} style={{ cursor: 'pointer' }}><i className="fa-solid fa-cart-shopping me-2" style={{color:"#0702f7"}}></i>Cart</span>
//                             </li>
//                             <li className="nav-item">
//                                 <span className="nav-link" onClick={() => nav('/login')} style={{ cursor: 'pointer' }}>LogIn</span>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     )
// }

// export default MainNavbar

// import React from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';

// const MainNavbar = () => {
//     const nav = useNavigate();
//     const location = useLocation();
//     const cartItems = location.state?.cartItems || [];
//     const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

//     return (
//         <>
//             <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
//                 <div className="container">
//                     <img src="/assets/images/SCTLogo1.png" className='img-fluid rounded-circle' alt="logo" onClick={() => nav('/home')} style={{ cursor: 'pointer', width: "60px", height: "60px" }} />
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//                         <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
//                             <li className="nav-item">
//                                 <span className="nav-link active" onClick={() => nav('/home')} style={{ cursor: 'pointer' }}>
//                                     <i className="fa-solid fa-house me-1"></i>Home
//                                 </span>
//                             </li>
//                             <li className="nav-item">
//                                 <span className="nav-link" onClick={() => nav('/about')} style={{ cursor: 'pointer' }}>
//                                     <i className="fa-solid fa-circle-info me-1"></i>About
//                                 </span>
//                             </li>
//                             <li className="nav-item">
//                                 <span className="nav-link" onClick={() => nav('/contact')} style={{ cursor: 'pointer' }}>
//                                     <i className="fa-solid fa-phone me-1"></i>Contact
//                                 </span>
//                             </li>
//                             <div className="dropdown">
//                                 <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                     <i className="fa-solid fa-list-ul me-1"></i> Categories
//                                 </button>
//                                 <ul className="dropdown-menu">
//                                     <li><span className="dropdown-item" onClick={() => nav('/categories/coffee')} style={{ cursor: 'pointer' }}>Coffee's</span></li>
//                                     <li><hr className="dropdown-divider" /></li>
//                                     <li><span className="dropdown-item" onClick={() => nav('/categories/tea')} style={{ cursor: 'pointer' }}>Tea's</span></li>
//                                     <li><hr className="dropdown-divider" /></li>
//                                     <li><span className="dropdown-item" onClick={() => nav('/categories/beverages')} style={{ cursor: 'pointer' }}>Beverages</span></li>
//                                     <li><hr className="dropdown-divider" /></li>
//                                     <li><span className="dropdown-item" onClick={() => nav('/categories/bakery')} style={{ cursor: 'pointer' }}>Bakery & Pastries</span></li>
//                                     <li><hr className="dropdown-divider" /></li>
//                                     <li><span className="dropdown-item" onClick={() => nav('/categories/deserts')} style={{ cursor: 'pointer' }}>Desserts</span></li>
//                                 </ul>
//                             </div>
//                         </ul>
//                         <ul className="navbar-nav ms-auto mb-2">
//                             <li className="nav-item position-relative">
//                                 <span className="nav-link" onClick={() => nav('/cart', { state: { cartItems } })} style={{ cursor: 'pointer' }}>
//                                     <i className="fa-solid fa-cart-shopping me-2" style={{ color: "#0702f7" }}></i>
//                                     Cart
//                                     {cartCount > 0 && (
//                                         <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
//                                             {cartCount}
//                                             <span className="visually-hidden">cart items</span>
//                                         </span>
//                                     )}
//                                 </span>
//                             </li>
//                             <li className="nav-item">
//                                 <span className="nav-link" onClick={() => nav('/login')} style={{ cursor: 'pointer' }}>LogIn</span>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     );
// };
// export default MainNavbar;



import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MainNavbar = () => {
  const nav = useNavigate();
  const [cartCount, setCartCount] = useState(0);

  // Function to calculate cart count from localStorage
  const updateCartCount = () => {
    const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const total = storedItems.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(total);
  };

  useEffect(() => {
    updateCartCount();

    // Optional: listen for localStorage changes from other tabs
    const handleStorage = () => updateCartCount();
    window.addEventListener('storage', handleStorage);

    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top shadow-sm">
      <div className="container">
        {/* Logo */}
        <img
          src="/assets/images/SCTLogo1.png"
          className="img-fluid rounded-circle"
          alt="logo"
          onClick={() => nav('/home')}
          style={{ cursor: 'pointer', width: '60px', height: '60px' }}
        />

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <span className="nav-link active" onClick={() => nav('/home')} style={{ cursor: 'pointer' }}>
                <i className="fa-solid fa-house me-1"></i>Home
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" onClick={() => nav('/about')} style={{ cursor: 'pointer' }}>
                <i className="fa-solid fa-circle-info me-1"></i>About
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" onClick={() => nav('/contact')} style={{ cursor: 'pointer' }}>
                <i className="fa-solid fa-phone me-1"></i>Contact
              </span>
            </li>

            {/* Categories Dropdown */}
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa-solid fa-list-ul me-1"></i> Categories
              </button>
              <ul className="dropdown-menu">
                <li>
                  <span className="dropdown-item" onClick={() => nav('/categories/coffee')} style={{ cursor: 'pointer' }}>
                    Coffee's
                  </span>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <span className="dropdown-item" onClick={() => nav('/categories/tea')} style={{ cursor: 'pointer' }}>
                    Tea's
                  </span>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <span className="dropdown-item" onClick={() => nav('/categories/beverages')} style={{ cursor: 'pointer' }}>
                    Beverages
                  </span>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <span className="dropdown-item" onClick={() => nav('/categories/bakery')} style={{ cursor: 'pointer' }}>
                    Bakery & Pastries
                  </span>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <span className="dropdown-item" onClick={() => nav('/categories/deserts')} style={{ cursor: 'pointer' }}>
                    Desserts
                  </span>
                </li>
              </ul>
            </div>
          </ul>

          {/* Cart and Login */}
          <ul className="navbar-nav ms-auto mb-2">
            <li className="nav-item position-relative">
              <span className="nav-link" onClick={() => nav('/cart')} style={{ cursor: 'pointer' }}>
                <i className="fa-solid fa-cart-shopping me-2" style={{ color: '#0702f7' }}></i>
                Cart
                {cartCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartCount}
                    <span className="visually-hidden">cart items</span>
                  </span>
                )}
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" onClick={() => nav('/login')} style={{ cursor: 'pointer' }}>
                Logout<i className="fa-solid fa-right-from-bracket ms-2" style={{color:"red"}}></i>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;





