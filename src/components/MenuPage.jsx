
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const navigate = useNavigate();
 const { dispatch } = useAppContext();

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch('http://localhost:5001/menu');
        const data = await response.json();
        setMenuItems(data);
      } catch (error) {
        console.error('Error fetching menu:', error);
      }
    };

    fetchMenu();
  }, []);

  return (
    <div>
      <h1>Menu</h1>
      <div className="menu-grid">
        {menuItems.map((item) =>{
          return (
            <div key={item.id} className="menu-item">
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              
              <button onClick={() =>{
                 dispatch({ type: 'ADD_TO_CART', payload: { ...item, quantity: 1 } });
          
                 navigate(`/cart`);
              }}>Add to Cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuPage;