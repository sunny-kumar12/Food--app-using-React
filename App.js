import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://img.freepik.com/premium-vector/delivery-logo-template-with-gradient-effect-fast-pin-gps-concept_369481-747.jpg?semt=ais_hybrid&w=740" alt="Logo" />
      </div>

      <nav className="nav-bar">
        <ul className="nav-list">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

const ResturantCard = (props) =>{
  return (
    <div className='res-card'>
      <img src="https://img.freepik.com/free-photo/restaurant-interior-with-empty-tables_144627-102.jpg?w=740&t=st=1698356466~exp=1698357066~hmac=0b1c8d2f3e4a5c7f9b8d1e2f3c4a5b6c7d8e9f0a1b2c3d4e5f6g7h8i9j0k1l2m" alt="Restaurant" />
      <h3>{props.resName}</h3>
      <p>Location: {props.resLocation}</p>
      <p>Cuisine: {props.resCuisine}</p>
      <p>Rating: {props.resRating}</p>
      <p>Price Range: {props.resPrice}</p>
    </div>
  );
};

const Body = () => {
  return (
    <div className='body'>
      <div className='search'>Search</div>
      <div className='res-container'>
        <ResturantCard resName="Meghna Food" resLocation="hyderabad" resCuisine="Indian" resRating="4.5" resPrice="$$2" />
        <ResturantCard resName="KFC" resLocation="bangalore" resCuisine="Fast Food" resRating="4.0" resPrice="$$4" />
        <ResturantCard resName="Pizza Hut" resLocation="chennai" resCuisine="Italian" resRating="4.2" resPrice="$$5" />
      </div>

    </div>
  );
};

const AppLayout = () =>{
  return (
    <div className='app'>
      <Header />
      <Body />
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);