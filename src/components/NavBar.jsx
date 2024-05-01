// import { usePostComponent } from './PostComponentContext';
// Initialization for ES Users
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  initTWE,
} from "tw-elements";

const NavBar = () => {
  useEffect(() => {
    // Initialize the navbar
    initTWE({ Collapse });
    }, []);
  // const { setComponent } = usePostComponent();

  const navItems = [
    { href: '/', text: 'Home' },
    { href: 'service', text: 'Services' },
    { href: 'about', text: 'About' },
    { href: 'contact', text: 'Contact' }
  ];

  return (
    // <!-- Main navigation container -->
    <nav
      className="relative flex w-full flex-nowrap items-center justify-between bg-zinc-50 py-2 text-neutral-500 shadow-dark-mild hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:py-4"
      data-twe-navbar-ref>
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <div className="ms-2">
          <a href="/" className="text-xl text-black dark:text-white" >Navbar</a>
        </div>
        {/* <!-- Hamburger button for mobile view --> */}
        <button
          className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
          type="button"
          data-twe-collapse-init
          data-twe-target="#navbarSupportedContent3"
          aria-controls="navbarSupportedContent3"
          aria-expanded="false"
          aria-label="Toggle navigation">
          {/* <!-- Hamburger icon --> */}
          <span
            className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd" />
            </svg>
          </span>
        </button>
    
        {/* <!-- Collapsible navbar container --> */}
        <div
          className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
          id="navbarSupportedContent3"
          data-twe-collapse-item>
          {/* <!-- Left links --> */}
          <div
            className="list-style-none me-auto flex flex-col ps-0 lg:mt-1 lg:flex-row"
            data-twe-navbar-nav-ref>
              {navItems.map((item, index) => (
            <div
            key={index}
            className="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2"
            data-twe-nav-item-ref>
            <Link to={item.href} className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                 >
                {item.text}
              </Link>
              </div>
            ))}
          </div>
          {/* <!-- Left links --> */}
        </div>
        {/* <!-- Collapsible wrapper --> */}
      </div>
    </nav>  );
};

export default NavBar;
