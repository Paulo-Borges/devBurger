const Bebidas = () => {
  const bebidas = [
    {
      id: 1,
      imagem: "/cubanacan.jpeg",
      marca: "La Vosier",
      classe: "Bebidas",
      tipo: "Cubanaca",
      argumento:
        "Uma delícia de bebida, sabor sem igual um gosto diferente de tudo que já provei. Super recomendo.",
      preco: "R$ 20,00",
    },
    {
      id: 2,
      imagem: "/carolina herrera.jpeg",
      marca: "Carolina Herrera",
      classe: "Bebidas",
      tipo: "Amanhecer",
      argumento:
        "Uma delícia de bebida, sabor sem igual um gosto diferente de tudo que já provei. Super recomendo.",
      preco: "R$ 25,00",
    },
    {
      id: 3,
      imagem: "/casa do café.jpeg",
      marca: "Casa do café",
      classe: "Bebidas",
      tipo: "Café com amor",
      argumento:
        "Uma delícia de bebida, sabor sem igual um gosto diferente de tudo que já provei. Super recomendo.",
      preco: "R$ 18,00",
    },
    {
      id: 4,
      imagem: "/doces supremo.jpeg",
      marca: "Doces Supremo",
      classe: "Bebidas",
      tipo: "Milk shake",
      argumento:
        "Uma delícia de bebida, sabor sem igual um gosto diferente de tudo que já provei. Super recomendo.",
      preco: "R$ 25,00",
    },
    {
      id: 5,
      imagem: "/body fitness.jpeg",
      marca: "Body Fitnes",
      classe: "Bebidas",
      tipo: "Suco de melancia",
      argumento:
        "Uma delícia de bebida, sabor sem igual um gosto diferente de tudo que já provei. Super recomendo.",
      preco: "R$ 10,00",
    },
    {
      id: 6,
      imagem: "/agua com gas.jpeg",
      marca: "Body Fitnes",
      classe: "Bebidas",
      tipo: "Agua com gás",
      argumento:
        "Uma delícia de bebida, sabor sem igual um gosto diferente de tudo que já provei. Super recomendo.",
      preco: "R$ 9,00",
    },
    {
      id: 7,
      imagem: "/cubanacan.jpeg",
      marca: "La Vosier",
      classe: "Bebidas",
      tipo: "Cubanaca",
      argumento:
        "Uma delícia de bebida, sabor sem igual um gosto diferente de tudo que já provei. Super recomendo.",
      preco: "R$ 20,00",
    },
    {
      id: 8,
      imagem: "/carolina herrera.jpeg",
      marca: "Carolina Herrera",
      classe: "Bebidas",
      tipo: "Amanhecer",
      argumento:
        "Uma delícia de bebida, sabor sem igual um gosto diferente de tudo que já provei. Super recomendo.",
      preco: "R$ 25,00",
    },
    {
      id: 9,
      imagem: "/casa do café.jpeg",
      marca: "Casa do café",
      classe: "Bebidas",
      tipo: "Café com amor",
      argumento:
        "Uma delícia de bebida, sabor sem igual um gosto diferente de tudo que já provei. Super recomendo.",
      preco: "R$ 18,00",
    },
    {
      id: 10,
      imagem: "/doces supremo.jpeg",
      marca: "Doces Supremo",
      classe: "Bebidas",
      tipo: "Milk shake",
      argumento:
        "Uma delícia de bebida, sabor sem igual um gosto diferente de tudo que já provei. Super recomendo.",
      preco: "R$ 25,00",
    },
    {
      id: 11,
      imagem: "/cubanacan.jpeg",
      marca: "Body Fitnes",
      classe: "Bebidas",
      tipo: "Suco de melancia",
      argumento:
        "Uma delícia de bebida, sabor sem igual um gosto diferente de tudo que já provei. Super recomendo.",
      preco: "R$ 10,00",
    },
    {
      id: 12,
      imagem: "/agua com gas.jpeg",
      marca: "Body Fitnes",
      classe: "Bebidas",
      tipo: "Agua com gás",
      argumento:
        "Uma delícia de bebida, sabor sem igual um gosto diferente de tudo que já provei. Super recomendo.",
      preco: "R$ 9,00",
    },
  ];
  return (
    <main>
      <h1 className="text-base py-4 text-xl">Bebidas</h1>
      <div className="md:grid md:grid-cols-2 2xl:grid-cols-3 gap-4">
        {bebidas.map((bebida) => {
          return (
            <div
              className=" flex flex-col border border-bebidas mb-8"
              key={bebida.id}
            >
              <div>
                <img
                  src={bebida.imagem}
                  alt="bebida"
                  className="block w-full h-[200px] 2xl:h-[400px] object-cover"
                />
              </div>
              <div className="">
                <div className="">
                  <div className="flex justify-between px-2 font-semibold">
                    <p className="">{bebida.marca}</p>
                    <p className="">{bebida.classe}</p>
                  </div>
                  <p className="px-2 font-semibold">{bebida.tipo}</p>
                  <p className="px-2 text-sm mt-4">{bebida.argumento}</p>
                  <ul className="flex justify-between px-2 pt-4 mb-1">
                    <li>
                      <p className="font-semibold text-base">{bebida.preco}</p>
                    </li>
                    <li className="bg-base px-5 pb-1 rounded text-white">
                      <a className="text-[10px]" href="./sacola.html">
                        Adicionar
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Bebidas;
