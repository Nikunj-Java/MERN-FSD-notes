// ProductList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext'; 

const ProductList = () => {
  const { addToCart } = useCart();

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        <li>
          <Link to="/products/1">Product 1</Link>
    
        </li>
        <li>
          <Link to="/products/2">Product 2</Link>
           
        </li>
        {/* Add more products as needed */}
      </ul>
    </div>
  );
};

export default ProductList;
