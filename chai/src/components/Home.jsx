import React, { useState, useEffect } from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const slidesData = [
  {
    id: 0,
    image: 'HazelnutColdBrew.png',
    title: 'Hazelnut Cold Brew',
    description: 'Chilled slow-brewed coffee infused with rich hazelnut flavor, topped with sweet cream.',
  },
  {
    id: 1,
    image: 'CheesyCroissant.png',
    title: 'Cheesy Garlic Croissant',
    description: 'Flaky croissant stuffed with melted cheese and garlic butter — toasted to perfection.',
  },
  {
    id: 2,
    image: 'ChocolateLavaPancakes.png',
    title: 'Chocolate Lava Pancakes',
    description: 'Warm, fluffy pancakes filled with molten chocolate and topped with whipped cream and berries.',
  },
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  let nav =useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const topCoffess = [
    { id: 1, src: '/assets/images/Affogato.png', alt: 'Affogato' },
    { id: 2, src: '/assets/images/Americano.png', alt: 'Americano' },
    { id: 3, src: '/assets/images/Cappuccino.png', alt: 'Cappuccino' },
    { id: 4, src: '/assets/images/Breve.png', alt: 'Breve'},
    { id: 5, src: '/assets/images/Cortado.png', alt: 'Cortado' },
  ];
  const bestTea = [
    { id: 1, src: '/assets/images/BlackTea.png', alt: 'Black Tea' },
    { id: 2, src: '/assets/images/WhiteTea.png', alt: 'WhiteTea' },
    { id: 3, src: '/assets/images/MatchaTea.png', alt: 'MatchaTea' },
    { id: 4, src: '/assets/images/ButterTea.png', alt: 'Butter Tea' },
    { id: 5, src: '/assets/images/ChamomileTea.png', alt: 'ChamomileTea' },
  ];
  const beverages = [
    { id: 1, src: '/assets/images/CocaCola.png', alt: 'CocaCola' },
    { id: 2, src: '/assets/images/Pepsi.png', alt: 'Pepsi' },
    { id: 3, src: '/assets/images/Sprite.png', alt: 'Sprite' },
    { id: 4, src: '/assets/images/Fanta.png', alt: 'Fanta' },
    { id: 5, src: '/assets/images/MountainDew.png', alt: 'MountainDew' },
  ];
  const Snacks = [
    { id: 1, src: '/assets/images/Chips.png', alt: 'Chips' },
    { id: 2, src: '/assets/images/Popcorn.png', alt: 'Popcorn' },
    { id: 3, src: '/assets/images/Cookies.png', alt: 'Cookies' },
    { id: 4, src: '/assets/images/Samosa.png', alt: 'Samosa' },
    { id: 5, src: '/assets/images/FrenchFries.png', alt: 'FrenchFries' },
  ];
  const desert = [
    { id: 1, src: '/assets/images/ChocolateCake.png', alt: 'ChocolateCake' },
    { id: 2, src: '/assets/images/IceCream.png', alt: 'IceCream' },
    { id: 3, src: '/assets/images/GulabJam.png', alt: 'GulabJam' },
    { id: 4, src: '/assets/images/Cheesecake.png', alt: 'Cheesecake ' },
    { id: 5, src: '/assets/images/Brownies.png', alt: 'Brownies' },
  ];

  return (
    <>
      <Header />
      <div className="container" style={{ marginTop: '70px' }}>
        <div className="row">
          <div className="col-12">
            <h4 className="Today-Special">Today's Special <i className="fa-solid fa-fire"style={{color: "#e9071e"}}></i></h4>
            <div id="carouselExampleCaptions" className="carousel slide">
              <div className="carousel-indicators">
                {slidesData.map((slide, index) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to={index}
                    className={index === activeIndex ? 'active' : ''}
                    aria-current={index === activeIndex ? 'true' : undefined}
                    aria-label={`Slide ${index + 1}`}
                    onClick={() => setActiveIndex(index)}
                  ></button>
                ))}
              </div>

              <div className="carousel-inner">
                {slidesData.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
                  >
                   <img
                      src={`/assets/images/${slide.image}`}
                      className="d-block w-100"
                      alt={slide.title}
                      style={{ height: '450px', objectFit: 'cover' }}  
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5 className='text-white'>{slide.title}</h5>
                      <p className='text-white'>{slide.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                onClick={() =>
                  setActiveIndex((activeIndex - 1 + slidesData.length) % slidesData.length)
                }
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                onClick={() => setActiveIndex((activeIndex + 1) % slidesData.length)}
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Coffee Section */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            {/* Header Row */}
            <div className="d-flex justify-content-between align-items-center">
              <h4 className='Top-coffee'>
                Top Coffees <i className="fa-solid fa-mug-hot ms-2" style={{ color: "#eca409" }}></i>
              </h4>
              <i className="fa-solid fa-circle-chevron-right"  onClick={()=>nav('/categories/coffee')} ></i>
            </div>

            {/* Image Scroll Row */}
            <div className="d-flex overflow-auto pb-2 hide-scrollbar mt-4">
              {topCoffess.map((item) => (
                <img
                  key={item.id}
                  src={item.src}
                  alt={item.alt}
                  className="me-3 top-coffee-img" onClick={()=>nav('/categories/coffee')}
                  style={{ height: '140px', width:'220px', borderRadius: '10px', flex: '0 0 auto',cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tea Section */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            {/* Header Row */}
            <div className="d-flex justify-content-between align-items-center">
              <h4 className='best-tea'>
                Best Tea's <i className="fa-solid fa-mug-saucer ms-2" style= {{color:"#0b61f4"}}></i>
              </h4>
              <i className="fa-solid fa-circle-chevron-right"  onClick={()=>nav('/categories/tea')} ></i>
            </div>

            {/* Image Scroll Row */}
            <div className="d-flex overflow-auto pb-2 hide-scrollbar mt-4">
              {bestTea.map((item) => (
                <img
                  key={item.id}
                  src={item.src}
                  alt={item.alt}
                  className="me-3 best-tea-img" onClick={()=>nav('/categories/tea')}
                  style={{ height: '140px', width:'220px', borderRadius: '10px', flex: '0 0 auto',cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Beverages */}

      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            {/* Header Row */}
            <div className="d-flex justify-content-between align-items-center">
              <h4 className='beverages'>
              Beverages <i className="fa-solid fa-martini-glass-citrus ms-2" style={{color: "#B197FC"}}></i>
              </h4>
              <i className="fa-solid fa-circle-chevron-right"  onClick={()=>nav('/categories/beverages')} ></i>
            </div>

            {/* Image Scroll Row */}
            <div className="d-flex overflow-auto pb-2 hide-scrollbar mt-4">
              {beverages.map((item) => (
                <img
                  key={item.id}
                  src={item.src}
                  alt={item.alt}
                  className="me-3 beverages-img" onClick={()=>nav('/categories/beverages')}
                  style={{ height: '140px', width:'220px', borderRadius: '10px', flex: '0 0 auto',cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Snacks */}

      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            {/* Header Row */}
            <div className="d-flex justify-content-between align-items-center">
              <h4 className='Snacks'>
              Snacks <i className="fa-solid fa-burger ms-2" style={{style:"#63E6BE"}}></i>
              </h4>
              <i className="fa-solid fa-circle-chevron-right"  onClick={()=>nav('/categories/deserts')} ></i>
            </div>
            {/* Image Scroll Row */}
            <div className="d-flex overflow-auto pb-2 hide-scrollbar mt-4">
              {Snacks.map((item) => (
                <img
                  key={item.id}
                  src={item.src}
                  alt={item.alt}
                  className="me-3 Snacks-img" onClick={()=>nav('/categories/bakery')}
                  style={{ height: '140px', width:'220px', borderRadius: '10px', flex: '0 0 auto',cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* deserts */}

      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            {/* Header Row */}
            <div className="d-flex justify-content-between align-items-center">
              <h4 className='desert'>
              Deserts  <i className="fa-solid fa-bowl-food ms-2" style={{color:"#FFD43B"}}></i>
              </h4>
              <i className="fa-solid fa-circle-chevron-right"  onClick={()=>nav('/categories/deserts')} ></i>
            </div>

            {/* Image Scroll Row */}
            <div className="d-flex overflow-auto pb-2 hide-scrollbar mt-4">
              {desert.map((item) => (
                <img
                  key={item.id}
                  src={item.src}
                  alt={item.alt}
                  className="me-3 desert-img" onClick={()=>nav('/categories/deserts')}
                  style={{ height: '140px', width:'220px', borderRadius: '10px', flex: '0 0 auto',cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* footer */}

      <Footer/>
    </>
  );
};

export default Home;
