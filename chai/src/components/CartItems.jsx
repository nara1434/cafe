// import React from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// const CardItems = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const cartItems = location.state?.cartItems || [];

//   const totalAmount = cartItems.reduce((total, item) => total + item.Price * item.quantity, 0);

//   const handleProceedToPayment = () => {
//     if (cartItems.length === 0) {
//       alert("Your cart is empty!");
//       return;
//     }

//     navigate('/payment', { state: { cartItems, totalAmount } });
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Your Cart</h2>
//       <div className="row">
//         {cartItems.map(item => (
//           <div className="col-12 col-md-6 col-lg-4 mb-4" key={item.id}>
//             <div className="card shadow-sm">
//               <img src={`/assets/images/${item.img}`} alt={item.name} style={{ width: "100%", height: "160px", objectFit: "cover" }} />
//               <div className="card-body">
//                 <h5>{item.name}</h5>
//                 <p>{item.content}</p>
//                 <p>Price: ₹{item.Price}</p>
//                 <p>Quantity: {item.quantity}</p>
//                 <p>Total: ₹{item.Price * item.quantity}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="text-end mt-4">
//         <h4>Total Amount: ₹{totalAmount}</h4>
//         <button className="btn btn-success mt-2" onClick={handleProceedToPayment}>
//           Proceed to Payment
//         </button>
//       </div>
//     </div>
//   );
// };
// export default CardItems;

// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';

// const CartItems = () => {
//     const location = useLocation();
//     const initialItems = location.state?.cartItems || [];

//     const [items, setItems] = useState(initialItems);

//     // Filter valid cart items
//     const validItems = items.filter(item => item.quantity > 0);

//     // Calculate total amount
//     const totalAmount = validItems.reduce((total, item) => total + item.price * item.quantity, 0);

//     // Cancel item
//     const handleCancel = (id) => {
//         const updated = items.filter(item => item.id !== id);
//         setItems(updated);
//     };

//     // Placeholder function for payment action
//     const handleProceedToPayment = () => {
//         alert('Proceeding to payment...');
//     };

//     return (
//         <div className="container mt-5 pt-5">
//             <h2 className="mb-4 text-center">Your Cart</h2>

//             {validItems.length === 0 ? (
//                 <div className="alert alert-info text-center">No items in the cart.</div>
//             ) : (
//                 <>
//                     <div className="row">
//                         {validItems.map((item) => (
//                             <div className="col-md-6 mb-3" key={item.id}>
//                                 <div className="card shadow-sm">
//                                     <div className="card-body d-flex justify-content-between align-items-center">
//                                         <div>
//                                             <h5 className="card-title">{item.name}</h5>
//                                             <p className="card-text mb-0">Quantity: {item.quantity}</p>
//                                             <p className="card-text">Price: ₹{item.price}</p>
//                                         </div>
//                                         <button className="btn btn-outline-danger btn-sm" onClick={() => handleCancel(item.id)}>
//                                             Cancel
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     <div className="text-end mt-4">
//                         <h4>Total Amount: ₹{totalAmount}</h4>
//                         <button className="btn btn-success mt-2" onClick={handleProceedToPayment}>
//                             Proceed to Payment
//                         </button>
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// };

// export default CartItems;

// import React, { useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';

// const CardItems = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const initialItems = location.state?.cartItems || [];

//   const [cartItems, setCartItems] = useState(initialItems);

//   // Filter out items with quantity > 0
//   const validItems = cartItems.filter(item => item.quantity > 0);

//   const totalAmount = validItems.reduce((total, item) => total + item.Price * item.quantity, 0);

//   const handleCancel = (id) => {
//     const updated = cartItems.filter(item => item.id !== id);
//     setCartItems(updated);
//   };

//   const handleProceedToPayment = () => {
//     if (validItems.length === 0) {
//       alert("Your cart is empty!");
//       return;
//     }

//     navigate('/payment', { state: { cartItems: validItems, totalAmount } });
//   };

//   return (
//     <div className="container mt-5 pt-5">
//       <h2 className="mb-4 text-center">Your Cart</h2>
//       <div className="row">
//         {validItems.map(item => (
//           <div className="col-12 col-md-6 col-lg-4 mb-4" key={item.id}>
//             <div className="card shadow-sm">
//               <img
//                 src={`/assets/images/${item.img}`}
//                 alt={item.name}
//                 style={{ width: "100%", height: "160px", objectFit: "cover" }}
//               />
//               <div className="card-body">
//                 <h5>{item.name}</h5>
//                 <p>{item.content}</p>
//                 <p>Price: ₹{item.Price}</p>
//                 <p>Quantity: {item.quantity}</p>
//                 <p>Total: ₹{item.Price * item.quantity}</p>
//                 <button
//                   className="btn btn-outline-danger btn-sm mt-2"
//                   onClick={() => handleCancel(item.id)}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {validItems.length > 0 && (
//         <div className="text-end mt-4">
//           <h4>Total Amount: ₹{totalAmount}</h4>
//           <button className="btn btn-success mt-2" onClick={handleProceedToPayment}>
//             Proceed to Payment
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CardItems;

// import React, { useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';

// const CardItems = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const initialItems = location.state?.cartItems || [];

//   const [cartItems, setCartItems] = useState(initialItems);

//   const handleIncrement = (id) => {
//     const updated = cartItems.map(item =>
//       item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//     );
//     setCartItems(updated);
//   };

//   const handleDecrement = (id) => {
//     const updated = cartItems.map(item =>
//       item.id === id && item.quantity > 1
//         ? { ...item, quantity: item.quantity - 1 }
//         : item
//     );
//     setCartItems(updated);
//   };

//   const handleCancel = (id) => {
//     const updated = cartItems.filter(item => item.id !== id);
//     setCartItems(updated);
//   };

//   const validItems = cartItems.filter(item => item.quantity > 0);

//   const totalAmount = validItems.reduce(
//     (total, item) => total + item.Price * item.quantity,
//     0
//   );

//   const handleProceedToPayment = () => {
//     if (validItems.length === 0) {
//       alert("Your cart is empty!");
//       return;
//     }
//     navigate('/payment', { state: { cartItems: validItems, totalAmount } });
//   };

//   return (
//     <div className="container mt-5 pt-5">
//       <h2 className="mb-4 text-center">Your Cart</h2>
//       <div className="row">
//         {validItems.map(item => (
//           <div className="col-12 col-md-6 col-lg-4 mb-4" key={item.id}>
//             <div className="card shadow-sm">
//               <img
//                 src={`/assets/images/${item.img}`}
//                 alt={item.name}
//                 style={{ width: "100%", height: "160px", objectFit: "cover" }}
//               />
//               <div className="card-body">
//                 <h5>{item.name}</h5>
//                 <p>{item.content}</p>
//                 <p>Price: ₹{item.Price}</p>
                
//                 {/* Quantity Controls */}
//                 <div className="d-flex justify-content-center align-items-center gap-2 my-2">
//                   <button className="btn btn-outline-danger btn-sm" onClick={() => handleDecrement(item.id)}>-</button>
//                   <span className="fw-bold">{item.quantity}</span>
//                   <button className="btn btn-outline-success btn-sm" onClick={() => handleIncrement(item.id)}>+</button>
//                 </div>

//                 <p>Total: ₹{item.Price * item.quantity}</p>
                
//                 {/* Cancel Button */}
//                 <button
//                   className="btn btn-outline-danger btn-sm mt-2"
//                   onClick={() => handleCancel(item.id)}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Total Section */}
//       {validItems.length > 0 && (
//         <div className="text-end mt-4">
//           <h4>Total Amount: ₹{totalAmount}</h4>
//           <button className="btn btn-success mt-2" onClick={handleProceedToPayment}>
//             Proceed to Payment
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };
// export default CardItems;

// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const CartItems = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Get cart from localStorage or from navigation state
//   const [cartItems, setCartItems] = useState(() => {
//     const saved = localStorage.getItem("cartItems");
//     return saved ? JSON.parse(saved) : [];
//   });

//   // Optional: update cart if coming with state from Beverages
//   useEffect(() => {
//     if (location.state?.cartItems) {
//       setCartItems(location.state.cartItems);
//     }
//   }, [location.state]);

//   // Save to localStorage when cartItems changes
//   useEffect(() => {
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//   }, [cartItems]);

//   const handleRemoveItem = (id) => {
//     const updated = cartItems.filter(item => item.id !== id);
//     setCartItems(updated);
//   };

//   const getTotal = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   const goBack = () => {
//     navigate('/categories/beverages');
//   };

//   return (
//     <div className="container" style={{ marginTop: "100px" }}>
//       <h2 className="mb-4">Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           <div className="row">
//             {cartItems.map(item => (
//               <div className="col-12 col-md-6 col-lg-4 mb-3" key={item.id}>
//                 <div className="card h-100 shadow-sm">
//                   <img src={`/assets/images/${item.img}`} alt={item.name} className="card-img-top" style={{ height: "160px", objectFit: "cover" }} />
//                   <div className="card-body d-flex flex-column">
//                     <h5>{item.name}</h5>
//                     <p>Quantity: {item.quantity}</p>
//                     <p>Price: ₹{item.price}</p>
//                     <p>Subtotal: ₹{item.price * item.quantity}</p>
//                     <button className="btn btn-danger mt-auto" onClick={() => handleRemoveItem(item.id)}>Cancel</button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="mt-4 text-end">
//             <h4>Total: ₹{getTotal()}</h4>
//             <button className="btn btn-secondary me-2" onClick={goBack}>Back to Beverages</button>
//             <button className="btn btn-success">Proceed to Checkout</button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };
// export default CartItems


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CartItems = () => {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('cartItems');
    return saved ? JSON.parse(saved) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Remove item from cart
  const handleRemoveItem = (id) => {
    const updated = cartItems.filter(item => item.id !== id);
    setCartItems(updated);
  };

  // Increment item quantity
  const increment = (id) => {
    const updatedItems = cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedItems);
  };

  // Decrement item quantity
  const decrement = (id) => {
    const updatedItems = cartItems.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedItems);
  };

  // Calculate the total price of all items
  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  let nav = useNavigate();

  // Navigate to the payment page
  const payment = () => {
    nav('/payment');
  };

  return (
    <div className="container" style={{ marginTop: '100px' }}>
      <h2 className="mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="row">
            {cartItems.map((item) => (
              <div className="col-12 col-md-6 col-lg-4 mb-3" key={item.id}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={`/assets/images/${item.img}`}
                    alt={item.name}
                    className="card-img-top"
                    style={{ height: '160px', objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5>{item.name}</h5>
                    <p style={{ fontSize: '14px' }}>{item.content}</p>
                    <p>Price: ₹{item.price}</p>

                    {/* Quantity control */}
                    <div className="d-flex justify-content-center align-items-center gap-3 border rounded py-1 px-3 mb-2 bg-warning" style={{ width: 'fit-content', margin: 'auto', height: '38px' }}>
                      <button className="btn btn-outline-danger btn-sm" onClick={() => decrement(item.id)}>-</button>
                      <span className="fw-bold">{item.quantity}</span>
                      <button className="btn btn-outline-success btn-sm" onClick={() => increment(item.id)}>+</button>
                    </div>

                    <p>Subtotal: ₹{item.price * item.quantity}</p>
                    <button className="btn btn-danger mt-auto" onClick={() => handleRemoveItem(item.id)}>
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-end">
            <h4>Total: ₹{getTotal()}</h4>
            <button className="btn btn-success" onClick={payment}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartItems;







