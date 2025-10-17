const Sacola = () => {
  return (
    <main className="flex flex-col justify-center items-center text-center mb-6">
      <h1 className="text-base py-4 text-xl">Finalizar seu pedido</h1>
      <section className="flex flex-col md:flex-row space-y-4 border border-gray-300 rounded shadow-md shadow-gray-500 mb-8">
        <div className="flex justify-center">
          <img src="finalizaragua.jpeg" alt="" className="h-40" />
        </div>
        <div>
          <p>Água levemente adocicada</p>
          <p className="font-bold">Via Expresso</p>
          <p className="font-semibold text-red-500">R$ 17,00</p>
        </div>
        <div className="flex justify-center gap-6">
          <button className="border px-4 cursor-pointer">-</button>
          <p className="border px-4">2</p>
          <button className="border px-4 cursor-pointer">+</button>
          <p className="border px-4">R$ 16,00</p>
        </div>
      </section>

      <section className="flex flex-col md:flex-row space-y-4 border border-gray-300 rounded shadow-md shadow-gray-500 ">
        <div className="flex justify-center">
          <img src="finalizarkit.jpeg" alt="" className="h-40" />
        </div>
        <div>
          <p>Kit cancun</p>
          <p className="font-bold">Brasil México</p>
          <p className="font-semibold text-red-500">R$ 25,00</p>
        </div>
        <div className="flex justify-center gap-6">
          <button className="border px-4 cursor-pointer">-</button>
          <p className="border px-4">4</p>
          <button className="border px-4 cursor-pointer">+</button>
          <p className="border px-4">R$ 100,00</p>
        </div>
      </section>
      <section className="flex flex-col gap-4 mt-8 border-gray-300 rounded shadow-md shadow-gray-500">
        <table className="">
          <thead className="">
            <th className="">N° de itens: </th>
            <th className="pl-4"> Total:</th>
          </thead>
          <tbody>
            <tr>
              <td>6</td>
              <td>116</td>
            </tr>
          </tbody>
        </table>
        <button className="bg-base px-5 pb-1 rounded text-white cursor-pointer">
          Finalizar agora
        </button>
      </section>
    </main>
  );
};

export default Sacola;
