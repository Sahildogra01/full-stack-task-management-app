
import React, { useState } from 'react';

const OrderPage = () => {
  const [orderHistory, setOrderHistory] = useState([]);

  const placeOrder = async () => {
    try {
      const response = await fetch('http://localhost:5001/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: orderHistory }),
      });

      if (response.ok) {
        alert('Order placed successfully!');
        const newOrder = await response.json();
        setOrderHistory((prev) => [...prev, newOrder]);
      } else {
        alert('Failed to place order.');
      }
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  return (
    <div>
      <h1>Order History</h1>
      <button onClick={placeOrder}>Place Order</button>
      {orderHistory.map((order, index) => (
        <div key={index} className="order-item">
          <h3>Order {index + 1}</h3>
          <p>Total: ${order.total}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderPage;