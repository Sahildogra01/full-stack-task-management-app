
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import MenuPage from './components/MenuPage';
import CartComponent from './components/CartComponent';
import OrderPage from './components/OrderPage';
import { useAppContext } from './context/AppContext';

const App = () => {
  const { user } = useAppContext();

  return (
    <Routes>
      <Route path="/" element={user ? <Navigate to="/menu" /> : <LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/menu" element={user ? <MenuPage /> : <Navigate to="/" />} />
      <Route path="/cart" element={user ? <CartComponent /> : <Navigate to="/" />} />
      <Route path="/order" element={user ? <OrderPage /> : <Navigate to="/" />} />
    </Routes>
  );
};

export default App;