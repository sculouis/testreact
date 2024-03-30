// NavItem.js
import React from 'react';

const NavItem = ({ href, text, onClick }) => 
  {
  return (
    <a href={href} onClick={onClick} className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">
      {text}
    </a>
  )
  };

export default NavItem;