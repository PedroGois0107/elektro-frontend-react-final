import { Link } from 'react-router-dom';
import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="bg-gray-900 bg-opacity-90 backdrop-blur-sm text-white p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
      {/* Ícone Menu */}
      <Link to="/Usuario" className= "text-2xl text-white hover:text-gray-300 transition-colors">☰</Link> 
      

      {/* Ícone Carrinho */}
      <Link to="/Error"  className="text-2xl text-white hover:text-gray-300 transition-colors">🛒</Link>
    </div>
  );
};

export default Header;