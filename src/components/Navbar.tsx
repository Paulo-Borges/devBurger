import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "/Fast Food.png";
import { FaUser } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex bg-bg  w-full justify-between items-center px-4 relative ">
      <div>
        <img
          src={Logo}
          alt="Logo DevBurger"
          className="w-15 h-6 mx-auto my-4"
        />
      </div>
      <div>
        <RxHamburgerMenu
          className="text-white cursor-pointer sm:hidden"
          onClick={toggleMenu}
        />
      </div>
      <ul
        className={`
          max-sm:absolute 
          max-sm:top-14 
          max-sm:left-0 
          max-sm:w-full 
          max-sm:bg-bg 
          max-sm:p-4 
          max-sm:flex-col 
          max-sm:gap-2
          max-sm:z-10
          ${isMenuOpen ? "flex" : "hidden"}
        
        `}
      >
        <li>
          <Link to="/" className="text-white">
            Promoções
          </Link>
        </li>
        <li>
          <Link to="/bebidas" className="text-white">
            Bebidas
          </Link>
        </li>
        <li>
          <Link to="/lanches" className="text-white">
            Lanches
          </Link>
        </li>
        <li>
          <Link to="/contato" className="text-white">
            Contato
          </Link>
        </li>
        <li>
          <Link to="/sacola" className="text-white">
            <FaCartPlus />
          </Link>
        </li>
        <li>
          <Link to="/login" className="text-white">
            <FaUser />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
