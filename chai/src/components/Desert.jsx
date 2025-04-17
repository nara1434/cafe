// import React, { useState } from 'react';

// const Desert = () => {
//   const Desert = [
//     {
//       id: 1,
//       name: "Chocolate Cake",
//       Price: 50,
//       img: "ChocolateCake.png",
//       content: "Rich, moist, and indulgent, often topped with fudge or ganache.",
//       rating: "★★★★☆"
//     },
//     {
//       id: 2,
//       name: "Ice Cream",
//       Price: 40,
//       img: "IceCream.png",
//       content: "A frozen treat in endless flavors like vanilla, chocolate, and mango.",
//       rating: "★★★☆☆"
//     },
//     {
//       id: 3,
//       name: "Gulab Jamun",
//       Price: 60,
//       img: "GulabJam.png",
//       content: "Deep-fried Indian milk balls soaked in sweet syrup.",
//       rating: "★★★★☆"
//     },
//     {
//       id: 4,
//       name: "Cheesecake",
//       Price: 90,
//       img: "Cheesecake.png",
//       content: "Creamy dessert with a graham cracker or biscuit base.",
//       rating: "★★★★★"
//     },
//     {
//       id: 5,
//       name: "Brownies",
//       Price: 60,
//       img: "Brownies.png",
//       content: "Dense, fudgy chocolate bars, sometimes with nuts or frosting.",
//       rating: "★★★★☆"
//     },
//     {
//       id: 6,
//       name: "Tiramisu",
//       Price: 90,
//       img: "Tiramisu.png",
//       content: "Italian layered dessert with coffee-soaked ladyfingers and mascarpone.",
//       rating: "★★★☆☆"
//     },
//     {
//       id: 7,
//       name: "Jalebi",
//       Price: 30,
//       img: "Jalebi.png",
//       content: "Crisp, syrupy Indian sweet made in spiral shapes.",
//       rating: "★★★★☆"
//     },
//     {
//       id: 8,
//       name: "Custard ",
//       Price: 110,
//       img: "Custard.png",
//       content: "Smooth and creamy, available in vanilla, caramel, and fruit flavors.",
//       rating: "★★★★☆"
//     },
//     {
//       id: 9,
//       name: "Donuts",
//       Price: 70,
//       img: "Donuts.png",
//       content: "Deep-fried or baked, often glazed or filled with jelly or cream.",
//       rating: "★★★★★"
//     },
//     {
//       id: 10,
//       name: "Fruit Salad with Ice Cream ",
//       Price: 110,
//       img: "FruitSalad.png",
//       content: "A light, refreshing dessert combining chopped fruits and a scoop of ice cream.",
//       rating: "★★★☆☆"
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
//         {Desert.map((value, index) => {
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

//                 {/* Card Body */}
//                 <div className="card-body flex-grow-1 d-flex flex-column justify-content-start">
//                   <h4 className="card-title" style={{ height: "40px", overflow: "hidden", fontSize: "18px" }}>{value.name}</h4>
//                   <p className="card-text" style={{ height: "45px", overflow: "hidden", fontSize: "14px" }}>{value.content}</p>
//                   <h5 className="card-title mb-1" style={{ height: "24px", fontSize: "16px" }}>Unit Price: ₹{value.Price}</h5>

//                   {/* Ratings */}
//                   <div className="text-warning mb-2" style={{ height: "24px" }}>
//                     <span className="fs-5">{value.rating}</span>
//                   </div>

//                   {/* Quantity Selector */}
//                   <div className="d-flex justify-content-center align-items-center gap-3 border rounded py-1 px-3 mb-2 bg-warning" style={{ width: "fit-content", margin: "auto", height: "38px" }}>
//                     <button className="btn btn-outline-danger btn-sm" onClick={() => handleDecrement(value.id)}>-</button>
//                     <span className="fw-bold">{quantity}</span>
//                     <button className="btn btn-outline-success btn-sm" onClick={() => handleIncrement(value.id)}>+</button>
//                   </div>
//                 </div>

//                 {/* Card Footer */}
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

// export default Desert;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Desert = () => {
  const navigate = useNavigate();

  const desert = [
    { id: 1, name: "Chocolate Cake", price: 50, img: "ChocolateCake.png", content: "Rich, moist, and indulgent, often topped with fudge or ganache.", rating: "★★★★☆" },
    { id: 2, name: "Ice Cream", price: 40, img: "IceCream.png", content: "A frozen treat in endless flavors like vanilla, chocolate, and mango.", rating: "★★★☆☆" },
    { id: 3, name: "Gulab Jamun", price: 60, img: "GulabJam.png", content: "Deep-fried Indian milk balls soaked in sweet syrup.", rating: "★★★★☆" },
    { id: 4, name: "Cheesecake", price: 90, img: "Cheesecake.png", content: "Creamy dessert with a graham cracker or biscuit base.", rating: "★★★★★" },
    { id: 5, name: "Brownies", price: 60, img: "Brownies.png", content: "Dense, fudgy chocolate bars, sometimes with nuts or frosting.", rating: "★★★★☆" },
    { id: 6, name: "Tiramisu", price: 90, img: "Tiramisu.png", content: "Italian layered dessert with coffee-soaked ladyfingers and mascarpone.", rating: "★★★☆☆" },
    { id: 7, name: "Jalebi", price: 30, img: "Jalebi.png", content: "Crisp, syrupy Indian sweet made in spiral shapes.", rating: "★★★★☆" },
    { id: 8, name: "Custard", price: 110, img: "Custard.png", content: "Smooth and creamy, available in vanilla, caramel, and fruit flavors.", rating: "★★★★☆" },
    { id: 9, name: "Donuts", price: 70, img: "Donuts.png", content: "Deep-fried or baked, often glazed or filled with jelly or cream.", rating: "★★★★★" },
    { id: 10, name: "Fruit Salad with Ice Cream", price: 110, img: "FruitSalad.png", content: "A light, refreshing dessert combining chopped fruits and a scoop of ice cream.", rating: "★★★☆☆" }
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
        {desert.map((value) => {
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
                  <button className="btn btn-primary mb-2" disabled={quantity === 0} onClick={() => addToCart(value)}>Add to Cart</button>
                </div>
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

export default Desert;


