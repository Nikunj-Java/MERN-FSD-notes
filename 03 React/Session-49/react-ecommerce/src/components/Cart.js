// Checkout.js
import React from 'react';
import { useCart } from './CartContext';

const Checkout = () => {
  const { cartState } = useCart();

  const handleProceedToCheckout = () => {
    // Implement your logic for handling "Proceed to Checkout"
    console.log('Proceed to Checkout clicked');
  };

  const handleOrderNow = () => {
    // Implement your logic for handling "Order Now"
    console.log('Order Now clicked');
  };

  return (
    <div>
      <h2>Checkout</h2>
      {cartState.items.length === 0 ? (
        <p>Your cart is empty. Add items to proceed.</p>
      ) : (
        <div>
          <ul>
            {cartState.items.map((item, index) => (
              <li key={index}>
                <p>Product ID: {item.id}</p>
                <p>Product Name: {item.name}</p>
                {/* Display other product details as needed */}
              </li>
            ))}
          </ul>
          <button onClick={handleProceedToCheckout}>Shopping Cart</button>
          <button onClick={handleOrderNow}>Order Now</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
