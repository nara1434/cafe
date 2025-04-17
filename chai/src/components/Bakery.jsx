// import React, { useState } from 'react';

// const Bakery = () => {
//   const snacks = [
//     {
//       id: 1,
//       name: " Hot Chips ",
//       Price: 40,
//       img: "Chips.png",
//       content: "Includes potato chips, nachos, and flavored crisps.",
//       rating: "★★★★☆"
//     },
//     {
//       id: 2,
//       name: "Popcorn",
//       Price: 80,
//       img: "Popcorn.png",
//       content: "Classic movie-time snack, available in butter, caramel, or cheese flavors.",
//       rating: "★★★☆☆"
//     },
//     {
//       id: 3,
//       name: "Cookies",
//       Price: 30,
//       img: "Cookies.png",
//       content: "Sweet or savory, perfect with tea or coffee.",
//       rating: "★★★★☆"
//     },
//     {
//       id: 4,
//       name: "Samosa",
//       Price: 20,
//       img: "Samosa.png",
//       content: "A crispy, triangular Indian snack stuffed with spiced potatoes or meat.",
//       rating: "★★★★★"
//     },
//     {
//       id: 5,
//       name: "French Fries",
//       Price: 120,
//       img: "FrenchFries.png",
//       content: "Deep-fried potato sticks, often served with ketchup or mayo.",
//       rating: "★★★★☆"
//     },
//     {
//       id: 6,
//       name: "Chocolate",
//       Price: 50,
//       img: "Chocolates.png",
//       content: "Quick, sweet snack like Snickers, KitKat, or Dairy Milk.",
//       rating: "★★★☆☆"
//     },
//     {
//       id: 7,
//       name: "Nuts",
//       Price: 60,
//       img: "Nuts.png",
//       content: "Healthy snacking options, often mixed with raisins or seeds.",
//       rating: "★★★★☆"
//     },
//     {
//       id: 8,
//       name: "Sandwiches",
//       Price: 130,
//       img: "Sandwiches.png",
//       content: "Quick and filling, customizable with veggies, meat, or cheese.",
//       rating: "★★★★☆"
//     },
//     {
//       id: 9,
//       name: "Puffs",
//       Price: 25,
//       img: "Puffs.png",
//       content: "Spicy and crunchy Indian snacks like aloo bhujia, sev, or kurkure.",
//       rating: "★★★★★"
//     },
//     {
//       id: 10,
//       name: "Noodles",
//       Price: 110,
//       img: "Noodles.png",
//       content: "Fast and tasty, often eaten as a snack or light meal.",
//       rating: "★★★☆☆"
//     },
//     {
//       id: 11,
//       name: "Pizza",
//       Price: 180,
//       img: "Pizza.png",
//       content: "Savor the rich, cheesy goodness of our handcrafted pizzas, baked to perfection with the freshest ingredients.",
//       rating: "★★★☆☆"
//     },
//     {
//       id: 12,
//       name: "Burger",
//       Price: 130,
//       img: "Burger.png",
//       content: "Sink your teeth into our juicy, flavor-packed burgers, stacked high with fresh toppings and irresistible sauces.",
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
//         {snacks.map((value, index) => {
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

// export default Bakery;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Bakery = () => {
  const navigate = useNavigate();

  const snacks = [
    {
      id: 1,
      name: "Hot Chips",
      price: 40, // changed to lowercase 'price'
      img: "Chips.png",
      content: "Includes potato chips, nachos, and flavored crisps.",
      rating: "★★★★☆"
    },
    {
      id: 2,
      name: "Popcorn",
      price: 80, // changed to lowercase 'price'
      img: "Popcorn.png",
      content: "Classic movie-time snack, available in butter, caramel, or cheese flavors.",
      rating: "★★★☆☆"
    },
    {
      id: 3,
      name: "Cookies",
      price: 30, // changed to lowercase 'price'
      img: "Cookies.png",
      content: "Sweet or savory, perfect with tea or coffee.",
      rating: "★★★★☆"
    },
    {
      id: 4,
      name: "Samosa",
      price: 20, // changed to lowercase 'price'
      img: "Samosa.png",
      content: "A crispy, triangular Indian snack stuffed with spiced potatoes or meat.",
      rating: "★★★★★"
    },
    {
      id: 5,
      name: "French Fries",
      price: 120, // changed to lowercase 'price'
      img: "FrenchFries.png",
      content: "Deep-fried potato sticks, often served with ketchup or mayo.",
      rating: "★★★★☆"
    },
    {
      id: 6,
      name: "Chocolate",
      price: 50, // changed to lowercase 'price'
      img: "Chocolates.png",
      content: "Quick, sweet snack like Snickers, KitKat, or Dairy Milk.",
      rating: "★★★☆☆"
    },
    {
      id: 7,
      name: "Nuts",
      price: 60, // changed to lowercase 'price'
      img: "Nuts.png",
      content: "Healthy snacking options, often mixed with raisins or seeds.",
      rating: "★★★★☆"
    },
    {
      id: 8,
      name: "Sandwiches",
      price: 130, // changed to lowercase 'price'
      img: "Sandwiches.png",
      content: "Quick and filling, customizable with veggies, meat, or cheese.",
      rating: "★★★★☆"
    },
    {
      id: 9,
      name: "Puffs",
      price: 25, // changed to lowercase 'price'
      img: "Puffs.png",
      content: "Spicy and crunchy Indian snacks like aloo bhujia, sev, or kurkure.",
      rating: "★★★★★"
    },
    {
      id: 10,
      name: "Noodles",
      price: 110, // changed to lowercase 'price'
      img: "Noodles.png",
      content: "Fast and tasty, often eaten as a snack or light meal.",
      rating: "★★★☆☆"
    },
    {
      id: 11,
      name: "Pizza",
      price: 180, // changed to lowercase 'price'
      img: "Pizza.png",
      content: "Savor the rich, cheesy goodness of our handcrafted pizzas, baked to perfection with the freshest ingredients.",
      rating: "★★★☆☆"
    },
    {
      id: 12,
      name: "Burger",
      price: 130, // changed to lowercase 'price'
      img: "Burger.png",
      content: "Sink your teeth into our juicy, flavor-packed burgers, stacked high with fresh toppings and irresistible sauces.",
      rating: "★★★☆☆"
    }
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
        {snacks.map((value) => {
          const quantity = quantities[value.id] || 0;
          return (
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-4" key={value.id}>
              <div className="card shadow-sm d-flex flex-column" style={{ height: "500px" }}>

                {/* Card Image */}
                <div className="card-header p-0">
                  <img
                    src={`/assets/images/${value.img}`}
                    alt={value.name}
                    style={{ width: "100%", height: "160px", objectFit: "cover" }}
                  />
                </div>

                {/* Card Body */}
                <div className="card-body flex-grow-1 d-flex flex-column justify-content-start">
                  <h4 className="card-title" style={{ height: "40px", overflow: "hidden", fontSize: "18px" }}>{value.name}</h4>
                  <p className="card-text" style={{ height: "45px", overflow: "hidden", fontSize: "14px" }}>{value.content}</p>
                  <h5 className="card-title mb-1" style={{ fontSize: "16px" }}>Unit Price: ₹{value.price}</h5>

                  {/* Ratings */}
                  <div className="text-warning mb-2">
                    <span className="fs-5">{value.rating}</span>
                  </div>

                  {/* Quantity Selector */}
                  <div className="d-flex justify-content-center align-items-center gap-3 border rounded py-1 px-3 mb-2 bg-warning" style={{ width: "fit-content", margin: "auto", height: "38px" }}>
                    <button className="btn btn-outline-danger btn-sm" onClick={() => handleDecrement(value.id)}>-</button>
                    <span className="fw-bold">{quantity}</span>
                    <button className="btn btn-outline-success btn-sm" onClick={() => handleIncrement(value.id)}>+</button>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="card-footer bg-transparent border-0 mt-auto">
                  <button className="btn btn-primary mb-2 w-100" onClick={() => addToCart(value)}>Add to Cart</button>
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

export default Bakery;

