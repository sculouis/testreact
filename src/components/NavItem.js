// NavItem.js
import React from 'react';

const NavItem = ({ href, children, onClick }) => (
  <li className="nav-item">
    <a href={href} className="nav-link" onClick={onClick}>
      {children}
    </a>
  </li>
);

export default NavItem;