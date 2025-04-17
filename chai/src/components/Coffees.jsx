// import React, { useState } from 'react';

// const Coffees = () => {
//   const coffee = [
//     {
//       id: 1,
//       name: "Affogato Coffee",
//       Price: 100,
//       img: "Affogato.png",
//       content: "Espresso poured over a scoop of vanilla ice cream",
//       rating: "★★★★☆"
//     },
//     {
//       id: 2,
//       name: "Americano Coffee",
//       Price: 150,
//       img: "Americano.png",
//       content: "Espresso diluted with hot water.",
//       rating: "★★★☆☆"
//     },
//     {
//       id: 3,
//       name: "Breve Coffee",
//       Price: 90,
//       img: "Breve.png",
//       content: "Espresso with steamed half-and-half instead of milk",
//       rating: "★★★★☆"
//     },
//     {
//       id: 4,
//       name: "Cappuccino Coffee",
//       Price: 100,
//       img: "Cappuccino.png",
//       content: "Equal parts espresso, steamed milk, and foam.",
//       rating: "★★★★★"
//     },
//     {
//       id: 5,
//       name: "Cortado Coffee",
//       Price: 120,
//       img: "Cortado.png",
//       content: "Equal parts espresso and steamed milk.",
//       rating: "★★★★☆"
//     },
//     {
//       id: 6,
//       name: "Doppio Coffee",
//       Price: 100,
//       img: "Doppio.png",
//       content: "A double shot of espresso.",
//       rating: "★★★☆☆"
//     },
//     {
//       id: 7,
//       name: "Espresso  Coffee",
//       Price: 70,
//       img: "Espresso.png",
//       content: "The pure, concentrated shot of coffee.",
//       rating: "★★★★☆"
//     },
//     {
//       id: 8,
//       name: "Espresso con Panna Coffee",
//       Price: 100,
//       img: "EspressoconPanna.png",
//       content: "Espresso topped with whipped cream.",
//       rating: "★★★★☆"
//     },
//     {
//       id: 9,
//       name: "Flat White  Coffee",
//       Price: 170,
//       img: "FlatWhite.png",
//       content: "Similar to latte but with thinner foam and more espresso.",
//       rating: "★★★★★"
//     },
//     {
//       id: 10,
//       name: "Latte  Coffee",
//       Price: 110,
//       img: "Latte.png",
//       content: " Espresso with lots of steamed milk and a bit of foam.",
//       rating: "★★★☆☆"
//     },
//     {
//       id: 11,
//       name: "Lungo  Coffee",
//       Price: 200,
//       img: "Lungo.png",
//       content: "A long espresso shot with more water, milder taste.",
//       rating: "★★☆☆☆"
//     },
//     {
//       id: 12,
//       name: "Macchiato  Coffee",
//       Price: 100,
//       img: "Macchiato.png",
//       content: "Espresso topped with a small amount of frothed milk.",
//       rating: "★★★★☆"
//     },
//     {
//       id: 13,
//       name: "Mocha  Coffee",
//       Price: 180,
//       img: "Mocha.png",
//       content: "Espresso with chocolate syrup and steamed milk.",
//       rating: "★★★★★"
//     },
//     {
//       id: 14,
//       name: "Ristretto  Coffee",
//       Price: 100,
//       img: "Ristretto.png",
//       content: "A short espresso shot with less water, more intense flavor.",
//       rating: "★★★☆☆"
//     },
//     {
//       id: 15,
//       name: "Red Eye Coffee",
//       Price: 130,
//       img: "RedEye.png",
//       content: "Brewed coffee with an added shot of espresso for extra kick.",
//       rating: "★★★★☆"
//     }
//   ];

//   const [quantities, setQuantities] = useState({});

//   const handleIncrement = (id) => {
//     setQuantities(prev => ({
//       ...prev,
//       [id]: (prev[id] || 0) + 1
//     }));
//   };

//   const handleDecrement = (id) => {
//     setQuantities(prev => ({
//       ...prev,
//       [id]: Math.max((prev[id] || 0) - 1, 0)
//     }));
//   };

//   return (
//     <div className="container" style={{ marginTop: "70px" }}>
//       <div className="row">
//         {coffee.map((value, index) => {
//           const quantity = quantities[value.id] || 0;
//           return (
//             <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-4" key={index}>
//               <div className="card shadow-sm d-flex flex-column" style={{ height: "500px" }}>

//                 {/* Card Image */}
//                 <div className="card-header p-0">
//                   <img
//                     src={"/assets/images/" + value.img}
//                     alt={value.name}
//                     style={{ width: "100%", height: "160px", objectFit: "cover" }}
//                   />
//                 </div>
//                 <div className="card-body flex-grow-1 d-flex flex-column justify-content-start">
//                   <h4 className="card-title" style={{ height: "40px", overflow: "hidden", fontSize: "18px" }}>{value.name}</h4>
//                   <p className="card-text" style={{ height: "45px", overflow: "hidden", fontSize: "14px" }}>{value.content}</p>
//                   <h5 className="card-title mb-1" style={{ height: "24px", fontSize: "16px" }}>Unit Price: ₹{value.Price}</h5>
//                   <div className="text-warning mb-2" style={{ height: "24px" }}>
//                     <span className="fs-5">{value.rating}</span>
//                   </div>
//                   <div className="d-flex justify-content-center align-items-center gap-3 border rounded py-1 px-3 mb-2 bg-warning" style={{ width: "fit-content", margin: "auto", height: "38px" }}>
//                     <button className="btn btn-outline-danger btn-sm" onClick={() => handleDecrement(value.id)}>-</button>
//                     <span className="fw-bold">{quantity}</span>
//                     <button className="btn btn-outline-success btn-sm" onClick={() => handleIncrement(value.id)}>+</button>
//                   </div>
//                 </div>
//                 <div className="card-footer bg-transparent border-0 mt-auto">
//                   <button className="btn btn-primary w-100">Add to Cart</button>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Coffees;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Coffees = () => {
  const navigate = useNavigate();

  const coffee = [
    { id: 1, name: "Affogato Coffee", price: 100, img: "Affogato.png", content: "Espresso poured over a scoop of vanilla ice cream", rating: "★★★★☆" },
    { id: 2, name: "Americano Coffee", price: 150, img: "Americano.png", content: "Espresso diluted with hot water.", rating: "★★★☆☆" },
    { id: 3, name: "Breve Coffee", price: 90, img: "Breve.png", content: "Espresso with steamed half-and-half instead of milk", rating: "★★★★☆" },
    { id: 4, name: "Cappuccino Coffee", price: 100, img: "Cappuccino.png", content: "Equal parts espresso, steamed milk, and foam.", rating: "★★★★★" },
    { id: 5, name: "Cortado Coffee", price: 120, img: "Cortado.png", content: "Equal parts espresso and steamed milk.", rating: "★★★★☆" },
    { id: 6, name: "Doppio Coffee", price: 100, img: "Doppio.png", content: "A double shot of espresso.", rating: "★★★☆☆" },
    { id: 7, name: "Espresso Coffee", price: 70, img: "Espresso.png", content: "The pure, concentrated shot of coffee.", rating: "★★★★☆" },
    { id: 8, name: "Espresso con Panna Coffee", price: 100, img: "EspressoconPanna.png", content: "Espresso topped with whipped cream.", rating: "★★★★☆" },
    { id: 9, name: "Flat White Coffee", price: 170, img: "FlatWhite.png", content: "Similar to latte but with thinner foam and more espresso.", rating: "★★★★★" },
    { id: 10, name: "Latte Coffee", price: 110, img: "Latte.png", content: "Espresso with lots of steamed milk and a bit of foam.", rating: "★★★☆☆" },
    { id: 11, name: "Lungo Coffee", price: 200, img: "Lungo.png", content: "A long espresso shot with more water, milder taste.", rating: "★★☆☆☆" },
    { id: 12, name: "Macchiato Coffee", price: 100, img: "Macchiato.png", content: "Espresso topped with a small amount of frothed milk.", rating: "★★★★☆" },
    { id: 13, name: "Mocha Coffee", price: 180, img: "Mocha.png", content: "Espresso with chocolate syrup and steamed milk.", rating: "★★★★★" },
    { id: 14, name: "Ristretto Coffee", price: 100, img: "Ristretto.png", content: "A short espresso shot with less water, more intense flavor.", rating: "★★★☆☆" },
    { id: 15, name: "Red Eye Coffee", price: 130, img: "RedEye.png", content: "Brewed coffee with an added shot of espresso for extra kick.", rating: "★★★★☆" }
  ];

  const [quantities, setQuantities] = useState({});
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleIncrement = (id) => {
    setQuantities(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const handleDecrement = (id) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0)
    }));
  };

  const addToCart = (item) => {
    const quantity = quantities[item.id] || 0;
    if (quantity === 0) return;

    setCartItems(prevItems => {
      const existing = prevItems.find(i => i.id === item.id);
      if (existing) {
        return prevItems.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prevItems, { ...item, quantity }];
    });

    setQuantities(prev => ({ ...prev, [item.id]: 0 }));
  };

  const handleGoToCart = () => {
    navigate('/cart');
  };

  return (
    <div className="container" style={{ marginTop: "70px" }}>
      <div className="row">
        {coffee.map((value) => {
          const quantity = quantities[value.id] || 0;
          return (
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-4" key={value.id}>
              <div className="card shadow-sm d-flex flex-column" style={{ height: "500px" }}>
                <div className="card-header p-0">
                  <img
                    src={`/assets/images/${value.img}`}
                    alt={value.name}
                    style={{ width: "100%", height: "160px", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body flex-grow-1 d-flex flex-column justify-content-start">
                  <h4 className="card-title" style={{ height: "40px", overflow: "hidden", fontSize: "18px" }}>{value.name}</h4>
                  <p className="card-text" style={{ height: "45px", overflow: "hidden", fontSize: "14px" }}>{value.content}</p>
                  <h5 className="card-title mb-1" style={{ fontSize: "16px" }}>Unit Price: ₹{value.price}</h5>
                  <div className="text-warning mb-2">
                    <span className="fs-5">{value.rating}</span>
                  </div>
                  <div className="d-flex justify-content-center align-items-center gap-3 border rounded py-1 px-3 mb-2 bg-warning" style={{ width: "fit-content", margin: "auto", height: "38px" }}>
                    <button className="btn btn-outline-danger btn-sm" onClick={() => handleDecrement(value.id)}>-</button>
                    <span className="fw-bold">{quantity}</span>
                    <button className="btn btn-outline-success btn-sm" onClick={() => handleIncrement(value.id)}>+</button>
                  </div>
                </div>
                <div className="card-footer bg-transparent border-0 mt-auto d-flex flex-column">
                  <button className="btn btn-primary mb-2" disabled={quantity === 0} onClick={() => addToCart(value)}>Add to Cart</button>                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-end mt-4">
        <button className="btn btn-success" onClick={handleGoToCart}>Go to Cart</button>
      </div>
    </div>
  );
};
export default Coffees;


