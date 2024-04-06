import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { usePostComponent } from './PostComponentContext';


const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setComponent } = usePostComponent();

  const handleItemClick = (text, event) => {
     // 防止默认的链接跳转行为
     event.preventDefault();
    // 适用于移动视图，点击菜单项后关闭菜单
    setIsMenuOpen(false);
    switch (text) {
      case 'Home':
        setComponent('Home');
        break;
      case 'Services':
        setComponent('Services');
        break;
      case 'About':
        setComponent('About');
        break;
      case 'Contact':
        setComponent('Contact');
        break;
      default:
        break;
    }
  };

  const navItems = [
    { href: '#home', text: 'Home' },
    { href: '#services', text: 'Services' },
    { href: '#about', text: 'About' },
    { href: '#contact', text: 'Contact' }
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          {/* Logo */}
          <div className="flex items-center py-4 px-2">
            <a href="#" className="flex items-center py-4 px-2">
              <span className="font-semibold text-gray-500 text-lg">MyBrand</span>
            </a>
          </div>
          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <a key={index} href={item.href} className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                 onClick={(e) => handleItemClick(item.text, e)}>
                {item.text}
              </a>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="outline-none mobile-menu-button">
          {isMenuOpen ? (
            <FontAwesomeIcon icon={faTimes} className="w-6 h-6 text-gray-500 hover:text-green-500" />
          ) : (
            <FontAwesomeIcon icon={faBars} className="w-6 h-6 text-gray-500 hover:text-green-500" />
          )}
        </button>
      </div>
        </div>
      </div>
      {/* Mobile Menu Items */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute bg-white w-full`}>
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          {navItems.map((item, index) => (
            <a key={index} href={item.href} className="block py-2 px-4 text-sm text-gray-700 bg-gray-200 hover:bg-green-500 hover:text-white"
            onClick={(e) => handleItemClick(item.text, e)}>
              {item.text}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
