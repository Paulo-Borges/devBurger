const Contato = () => {
  return (
    <section>
      <h1 className="text-base py-4 text-xl ml-5">Contato</h1>
      <form className="flex flex-col ml-12">
        <label htmlFor="">Nome:</label>
        <input type="text" placeholder="Digite seu nome" />
        <label htmlFor="">Email:</label>
        <input type="email" placeholder="Digite seu email" />
        <label htmlFor="">Assunto:</label>
        <input type="text" />
        <label htmlFor="">Mensagem</label>
        <textarea className=""></textarea>
      </form>
      <button>Enviar</button>
    </section>
  );
};

export default Contato;
