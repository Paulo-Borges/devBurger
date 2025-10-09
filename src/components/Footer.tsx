import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" bg-bg  w-full text-white flex flex-col md:flex-row md:justify-center md:gap-16 md:p-10 gap-4 p-4">
      <div>
        <h2 className="justify-start items-start md:text-2xl md:mb-4">
          NewsLetter
        </h2>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Digite seu e-mail"
            className="bg-white placeholder:text-gray-400 rounded-xs"
          />
          <button className="bg-base text-sm px-4 rounded-xs cursor-pointer">
            Cadastrar
          </button>
        </div>
      </div>
      <div>
        <h2 className="md:text-2xl md:mb-4">Redes sociais</h2>
        <div className="flex gap-8">
          <Link to="https://x.com/paulobo17118573" target="_blank">
            <FaXTwitter />
          </Link>

          <Link to="https://github.com/Paulo-Borges" target="_blank">
            <FaGithub />
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
