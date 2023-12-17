// ProductDetail.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    // Implement your logic to add the product to the cart
    const product = { id, name: `Product ${id}` };
    addToCart(product);

    // Redirect to the cart page
    navigate('/cart');
  };

  return (
    <div>
      <h2>Product Detail</h2>
      <p>Product ID: {id}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      {/* Display detailed information about the product */}
    </div>
  );
};

export default ProductDetail;
