import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" bg-bg  w-[350px] text-white flex flex-col gap-4 p-4">
      <h2 className="justify-start items-start">NewsLetter</h2>
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
      <h2>Redes sociais</h2>
      <div className="flex gap-8">
        <Link to="https://x.com/paulobo17118573" target="_blank">
          <FaXTwitter />
        </Link>

        <Link to="https://github.com/Paulo-Borges" target="_blank">
          <FaGithub />
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
