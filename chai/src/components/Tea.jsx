import React, { useState } from 'react';

const Tea = () => {
  const Tea = [
    {
      id: 1,
      name: "Masala Chai",
      Price: 50,
      img: "MasalaTea.png",
      content: "Spiced Indian tea with milk and aromatic spices.",
      rating: "★★★★☆"
    },
    {
      id: 2,
      name: "Green Tea",
      Price: 70,
      img: "GreenTea.png",
      content: "Known for its fresh taste and health benefits.",
      rating: "★★★☆☆"
    },
    {
      id: 3,
      name: "Black Tea",
      Price: 90,
      img: "BlackTea.png",
      content: " Bold and strong; base for many blends like English Breakfast.",
      rating: "★★★★☆"
    },
    {
      id: 4,
      name: "Darjeeling Tea",
      Price: 120,
      img: "DarjeelingTea.png",
      content: "Delicate and floral, from the Darjeeling region of India.",
      rating: "★★★★★"
    },
    {
      id: 5,
      name: "Assam Tea",
      Price: 60,
      img: "AssamTea.png",
      content: "Rich, malty flavor; commonly used in breakfast teas.",
      rating: "★★★★☆"
    },
    {
      id: 6,
      name: "Oolong Tea",
      Price: 70,
      img: "OolongTea.png",
      content: "Complex flavor,between green and black tea.",
      rating: "★★★☆☆"
    },
    {
      id: 7,
      name: "White Tea",
      Price: 50,
      img: "WhiteTea.png",
      content: "Light, subtle, and minimally processed.",
      rating: "★★★★☆"
    },
    {
      id: 8,
      name: "Matcha ",
      Price: 110,
      img: "MatchaTea.png",
      content: "Japanese powdered green tea, whisked into a frothy drink.",
      rating: "★★★★☆"
    },
    {
      id: 9,
      name: "Chamomile Tea",
      Price: 70,
      img: "ChamomileTea.png",
      content: "Herbal tea known for its calming effects.",
      rating: "★★★★★"
    },
    {
      id: 10,
      name: "Peppermint Tea",
      Price: 110,
      img: "PeppermintTea.png",
      content: "Refreshing herbal tea, great for digestion.",
      rating: "★★★☆☆"
    },
    {
      id: 11,
      name: "Hibiscus Tea",
      Price: 140,
      img: "HibiscusTea.png",
      content: "Bright red, tart and fruity herbal tea.",
      rating: "★★☆☆☆"
    },
    {
      id: 12,
      name: "Butter Tea ",
      Price: 90,
      img: "ButterTea.png",
      content: "Traditional Tibetan tea with yak butter and salt.",
      rating: "★★★★☆"
    }
  ];

  const [quantities, setQuantities] = useState({});

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

  return (
    <div className="container" style={{ marginTop: "70px" }}>
      <div className="row">
        {Tea.map((value, index) => {
          const quantity = quantities[value.id] || 0;
          return (
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-4" key={index}>
              <div className="card shadow-sm d-flex flex-column" style={{ height: "500px" }}>

                {/* Card Image */}
                <div className="card-header p-0">
                  <img
                    src={"/assets/images/" + value.img}
                    alt={value.name}
                    style={{ width: "100%", height: "160px", objectFit: "cover" }}
                  />
                </div>

                {/* Card Body */}
                <div className="card-body flex-grow-1 d-flex flex-column justify-content-start">
                  <h4 className="card-title" style={{ height: "40px", overflow: "hidden", fontSize: "18px" }}>{value.name}</h4>
                  <p className="card-text" style={{ height: "45px", overflow: "hidden", fontSize: "14px" }}>{value.content}</p>
                  <h5 className="card-title mb-1" style={{ height: "24px", fontSize: "16px" }}>Unit Price: ₹{value.Price}</h5>

                  {/* Ratings */}
                  <div className="text-warning mb-2" style={{ height: "24px" }}>
                    <span className="fs-5">{value.rating}</span>
                  </div>

                  {/* Quantity Selector */}
                  <div className="d-flex justify-content-center align-items-center gap-3 border rounded py-1 px-3 mb-2 bg-warning" style={{ width: "fit-content", margin: "auto", height: "38px" }}>
                    <button className="btn btn-outline-danger btn-sm" onClick={() => handleDecrement(value.id)}>-</button>
                    <span className="fw-bold">{quantity}</span>
                    <button className="btn btn-outline-success btn-sm" disabled={quantity === 0} onClick={() => handleIncrement(value.id)}>+</button>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="card-footer bg-transparent border-0 mt-auto">
                  <button className="btn btn-primary w-100">Add to Cart</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tea;
