// Import React and the Product component
import React from 'react';
import Product from '../components/Product';
import '../styles/Home.css';

// Define the Home component
const Home = () => {
  return (
    <div>
      <nav>
        <div>
          <a href='http://localhost:3000/login' className='home-login'>M</a>
        </div>
      </nav>
      <div className="container">
        <div className="product-container">
          <Product/>
        </div>
      </div>
    </div>
  );
};

export default Home;