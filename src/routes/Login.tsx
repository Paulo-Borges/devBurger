const Login = () => {
  return (
    <>
      <h1 className="text-base py-4 pl-4 text-xl">Login</h1>
      <form className="flex flex-col pl-8 space-y-4 my-10">
        <label htmlFor="">Email:</label>
        <input
          type="text"
          placeholder="Digite o seu email"
          className="border border-gray-200"
        />
        <label htmlFor="">Senha:</label>
        <input
          type="text"
          placeholder="Digite a sua senha"
          className="border border-gray-200"
        />
      </form>
      <div className="flex justify-end items-end">
        <button className="bg-base text-white px-2 mb-40">Enviar</button>
      </div>
    </>
  );
};

export default Login;
