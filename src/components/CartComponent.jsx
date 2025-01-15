
import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const CartComponent = () => {
  const { cart, dispatch } = useAppContext();
  const navigate = useNavigate();
  // const [cartItems, setCartItems] = useState([]);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h1>Cart</h1>
      {cart.map((item) => ( 
        <div key={item.id} className="cart-item">
          <h3>{item.name}</h3>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${item.price * item.quantity}</p>
        </div>
      ))}
      <div className="total">Total: ${calculateTotal()}</div>
      <button onClick={() =>{
        dispatch({ type: 'CLEAR_CART' });

         alert('Your order placed');
         navigate('/');

        
              }}>Check out</button>
              <button onClick={() =>{
        dispatch({ type: 'CLEAR_CART' });
         navigate('/');

        
              }}>CLEAR CART</button>
    </div>
  );
};

export default CartComponent;