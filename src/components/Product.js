import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Products.css';

// Define the Product component
const Product = () => {
  const [products, setProducts] = useState([]);
  const [showMemberPrice, setShowMemberPrice] = useState(false);
  const [showRegularPrice, setShowRegularPrice] = useState(false);
  // Get the authentication token from local storage
  const [authToken] = useState(localStorage.getItem('authToken'));

  // Effect to fetch product information when the component mounts or when the authentication token changes
  useEffect(() => {
    // Function to fetch products from the API
    const fetchProducts = async () => {
      const apiUrl = 'https://dev-mrp.insby.tech/api';

      try {
        // Make a GET request to fetch product information
        const response = await axios.get(`${apiUrl}/v2/session/product`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        // Preload images before updating the state
        const imagePromises = response.data.data.map((product, index) =>
          new Promise((resolve) => {
            const img = new Image();
            img.src = product.image_url;
            img.onload = () => resolve({ ...product, index });
          })
        );

        const loadedProducts = await Promise.all(imagePromises);

        // Sort products based on index
        const sortedProducts = loadedProducts.sort((a, b) => a.index - b.index);

        // Update state with the loaded and sorted products
        setProducts(sortedProducts);
      } catch (error) {
        console.log('Error fetching product information', error);

        // Handle 401 Unauthorized error
        if (error.response && error.response.status === 401) {
          setProducts([]);
        }
      }
    };


    fetchProducts();
  }, [authToken]);

  // Render the product information
  return (
    <div className="product-container">
      {products.map((product, index) => ( //Map over each product and render corresponding HTML structure
        <div key={index} className="product-card">
          <div className="image-container">
            <img src={product.image_url} alt={product.title} />
          </div>
          <div className="product-details">
            <h2>{product.title}</h2>
            <p>{product.body}</p>
            <button className='regular-price-button' onClick={() => setShowRegularPrice(!showRegularPrice)}>
              {showRegularPrice ? `Regular price: ${product.prices[0].price} $` : 'Show Regular Price'}
            </button>
            {authToken && (
              <button className='member-price-button' onClick={() => setShowMemberPrice(!showMemberPrice)}>
                {showMemberPrice ? `Member Price: ${product.prices[0].member_price} $` : 'Member Price'}
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Product;