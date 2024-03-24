import './Header.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Header({imagesNav}) {
  let links = [
    { name: 'About', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Catalogue', path: '/catalogue' },
    { name: 'Shipping', path: '/shipping' },
    { name: 'FAQ', path: '/FAQ' },
    { name: 'Contact', path: '/contact' },
  ];

  const [drop, setDrop] = useState(false);

  return (
    <div className="bg-[#000000] relative z-20">
      <header className="containerr mx-auto relative md:flex justify-between items-center py-[20px] bg-main z-20">
        <div className="absolute top-0 left-0 bg-[#000000] w-full h-full z-20 block md:hidden"></div>
      <div className="logo w-[50px] h-[30px]  ">
        <img className="w-[100%] relative z-30" src={imagesNav} alt="" />
      </div>
      <span
        onClick={() => setDrop(!drop)}
        className="absolute top-1 right-6 text-white bg-red p-5 md:hidden cursor-pointer z-30"
      >
        <FontAwesomeIcon icon={faBars} />
      </span>
      <nav
        className={`bg-main w-full md:w-fit left-0 md:el-center absolute z-[-1] duration-500 ${drop ? 'top-[65px]' : 'top-[-250px]'
          } ease-in md:relative md:top-[0] z-10`}
      >
        <ul className="px-[40px] md:px-0 py-[10px] md:py-[0] md:flex justify-between items-center w-[100%] text-white">
          {links.map((link) => (
            <li
              key={link.name}
              className="w-fit md:ml-5 mt-2 h-[30px] hover:text-tx md:text-md text-sm"
            >
              <NavLink
                className="block h-[100%]"
                to={link.path}
                activeclassname="active"
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
    </div>
  );
}

export default Header;