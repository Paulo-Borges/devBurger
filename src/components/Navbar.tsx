import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">App</Link>
      <Link to="/bebidas">Bebidas</Link>
      <Link to="/contato">Contato</Link>
      <Link to="/lanches">Lanches</Link>
      <Link to="/login">Login</Link>
      <Link to="/sacola">Sacola</Link>
      <Link to="/signup">Signup</Link>
    </nav>
  );
};

export default Navbar;
