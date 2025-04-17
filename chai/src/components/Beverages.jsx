import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Beverages = () => {
  const navigate = useNavigate();
  const drinks = [
    { id: 1, name: "Coca-Cola", price: 70, img: "CocaCola.png", content: "Classic cola flavor.", rating: "★★★★☆" },
    { id: 2, name: "Pepsi", price: 50, img: "Pepsi.png", content: "Slightly sweeter taste.", rating: "★★★☆☆" },
    { id: 3, name: "Sprite", price: 40, img: "Sprite.png", content: "Lemon-lime soda.", rating: "★★★★☆" },
    { id: 4, name: "Fanta", price: 30, img: "Fanta.png", content: "Fruity and fizzy.", rating: "★★★★★" },
    { id: 5, name: "Mountain Dew", price: 120, img: "MountainDew.png", content: "Citrus-flavored bold taste.", rating: "★★★★☆" },
    { id: 6, name: "SevenUp", price: 80, img: "SevenUp.png", content: "Light and refreshing.", rating: "★★★☆☆" },
    { id: 7, name: "Thums Up", price: 70, img: "ThumsUp.png", content: "Spicy cola drink.", rating: "★★★★☆" },
    { id: 8, name: "Dr Pepper", price: 100, img: "DrPepper.png", content: "Cherry-cola taste.", rating: "★★★★☆" }
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
    navigate('/cart'); // updated - no need to pass cartItems in state
  };
  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="row">
        {drinks.map((value) => {
          const quantity = quantities[value.id] || 0;
          return (
            <div className="col-12 col-md-6 col-lg-3 mb-4" key={value.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={`/assets/images/${value.img}`}
                  alt={value.name}
                  style={{ height: "160px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5>{value.name}</h5>
                  <p style={{ fontSize: "14px" }}>{value.content}</p>
                  <p>Price: ₹{value.price}</p>
                  <p>Rating: {value.rating}</p>
                  <div className="d-flex justify-content-center align-items-center gap-3 border rounded py-1 px-3 mb-2 bg-warning" style={{ width: "fit-content", margin: "auto", height: "38px" }}>
                    <button className="btn btn-outline-danger btn-sm" onClick={() => handleDecrement(value.id)}>-</button>
                    <span className="fw-bold">{quantity}</span>
                    <button className="btn btn-outline-success btn-sm" onClick={() => handleIncrement(value.id)}>+</button>
                  </div>
                  <button
                    className="btn btn-primary mt-auto"
                    disabled={quantity === 0}
                    onClick={() => addToCart(value)}
                  >
                    Add Item
                  </button>
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
export default Beverages;






