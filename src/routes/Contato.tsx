const Contato = () => {
  return (
    <section>
      <h1 className="text-base py-4 text-xl ml-5">Contato</h1>
      <form className="flex flex-col ml-12 space-y-4 ">
        <label htmlFor="">Nome:</label>
        <input
          type="text"
          placeholder="Digite seu nome"
          className="border border-gray-200"
        />
        <label htmlFor="">Email:</label>
        <input
          type="email"
          placeholder="Digite seu email"
          className="border border-gray-200"
        />
        <label htmlFor="">Assunto:</label>
        <input type="text" className="border border-gray-200" />
        <label htmlFor="">Mensagem</label>
        <textarea className="border border-gray-200"></textarea>
      </form>
      <div className="flex justify-end items-end">
        <button className="bg-base text-white px-2 mb-20 mt-10">Enviar</button>
      </div>
    </section>
  );
};

export default Contato;
