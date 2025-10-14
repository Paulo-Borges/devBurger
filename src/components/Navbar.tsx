import { NavLink } from "react-router-dom";
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
  // type activeProps = {
  //   bg: "string";
  //   text: "string";
  //   padding: "2px";
  //   isActive: boolean;
  // };

  // const getActiveLinkClasses = ({ isActive }: activeProps) => {
  //   return isActive
  //     ? "bg-base text-white p-2"
  //     : "bg-transparent text-white p-2 ";
  // };

  return (
    <nav className="flex bg-bg  w-full justify-between items-center px-4 relative">
      <div>
        <img
          src={Logo}
          alt="Logo DevBurger"
          className="w-15 h-6 mx-auto my-4"
        />
      </div>
      <div>
        <RxHamburgerMenu
          className="text-white cursor-pointer md:hidden"
          onClick={toggleMenu}
        />
      </div>
      <ul
        className={`
          max-sm:absolute 
          max-sm:top-14 
          md:pt-5
          2xl:pb-4
          max-sm:left-0 
          max-sm:w-full 
          max-sm:bg-bg 
          max-sm:p-4 
          max-sm:flex-col 
          max-sm:gap-2
          md:gap-5
          max-sm:z-10
          md:flex
          ${isMenuOpen ? "flex" : "hidden"}
        
        `}
      >
        <li>
          <NavLink to="/" className="text-white" onClick={toggleMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/bebidas" className="text-white">
            Bebidas
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/lanches"
            className="text-white bg-transparent active:bg-base hover:bg-base"
          >
            Lanches
          </NavLink>
        </li>
        <li>
          <NavLink to="/contato" className="text-white">
            Contato
          </NavLink>
        </li>
        <li>
          <NavLink to="/sacola" className="text-white">
            <FaCartPlus />
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className="text-white">
            <FaUser />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
