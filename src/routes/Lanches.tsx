const Lanches = () => {
  type lanchesProps = {
    id: number;
    imagem: string;
    marca: string;
    classe: string;
    tipo: string;
    argumento: string;
    preco: string;
  };

  const lanches: lanchesProps[] = [
    {
      id: 1,
      imagem: "/hamb6.jpeg",
      marca: "La Vosier",
      classe: "Lanches",
      tipo: "Cubanaca",
      argumento:
        "Uma delícia de lanche, sabor sem igual, um gosto diferente de tudo que já provei. Super indico..",
      preco: "R$ 16,00",
    },
    {
      id: 2,
      imagem: "/hamb8.jpeg",
      marca: "Casa da Batata",
      classe: "Lanches",
      tipo: "Super Kit",
      argumento:
        "Uma delícia de lanche, sabor sem igual, um gosto diferente de tudo que já provei. Super indico..",
      preco: "R$ 26,00",
    },
    {
      id: 3,
      imagem: "/hamb3.jpeg",
      marca: "Via expresso",
      classe: "Lanches",
      tipo: "Millenium",
      argumento:
        "Uma delícia de lanche, sabor sem igual, um gosto diferente de tudo que já provei. Super indico.",
      preco: "R$ 46,00",
    },
    {
      id: 4,
      imagem: "/hamb4.jpeg",
      marca: "Lanches artesanais",
      classe: "Lanches",
      tipo: "in nature",
      argumento:
        "Uma delícia de lanche, sabor sem igual, um gosto diferente de tudo que já provei. Super indico.",
      preco: "R$ 29,00",
    },
    {
      id: 5,
      imagem: "/hamb5.jpeg",
      marca: "Cubanacan",
      classe: "Lanches",
      tipo: "Natchos",
      argumento:
        "Uma delícia de bebida, sabor sem igual um gosto diferente de tudo que já provei. Super recomendo.",
      preco: "R$ 26,00",
    },
    {
      id: 6,
      imagem: "/hamb6.jpeg",
      marca: "Body Fitnes",
      classe: "Bebidas",
      tipo: "Agua com gás",
      argumento:
        "Uma delícia de bebida, sabor sem igual um gosto diferente de tudo que já provei. Super recomendo.",
      preco: "R$ 9,00",
    },
    {
      id: 7,
      imagem: "/hamb7.jpeg",
      marca: "Latinos Lanches",
      classe: "Lanches",
      tipo: "Presuntinhos",
      argumento:
        "Uma delícia de lanche, sabor sem igual um gosto diferente de tudo que já provei. Super recomendo.",
      preco: "R$ 16,00",
    },
    {
      id: 8,
      imagem: "/hamb8.jpeg",
      marca: "Casa da Batata",
      classe: "Lanches",
      tipo: "Super Kit",
      argumento:
        "Uma delícia de lanche, sabor sem igual um gosto diferente de tudo que já provei. Super recomendo.",
      preco: "R$ 26,00",
    },
    {
      id: 9,
      imagem: "/hamb9.jpeg",
      marca: "Via expresso",
      classe: "Lanches",
      tipo: "Café com amor",
      argumento:
        "Uma delícia de lanche, sabor sem igual um gosto diferente de tudo que já provei. Super recomendo.",
      preco: "R$ 18,00",
    },
    {
      id: 10,
      imagem: "/hamb10.jpeg",
      marca: "Siga bem cainhoneiro",
      classe: "Lanches",
      tipo: "Enguiça blidado",
      argumento:
        "Uma delícia de lanche, sabor sem igual um gosto diferente de tudo que já provei. Super recomendo.",
      preco: "R$ 30,00",
    },
    {
      id: 11,
      imagem: "/hamb11.jpeg",
      marca: "Vida Saudavel",
      classe: "Lanches",
      tipo: "Pãozinho a Paulista",
      argumento:
        "Uma delícia de lanche, sabor sem igual um gosto diferente de tudo que já provei. Super recomendo.",
      preco: "R$ 14,00",
    },
    {
      id: 12,
      imagem: "/hamb12.jpeg",
      marca: "Pão de Queijo",
      classe: "Lanches",
      tipo: "Expressinho pra viagem",
      argumento:
        "Uma delícia de lanche, sabor sem igual um gosto diferente de tudo que já provei. Super recomendo.",
      preco: "R$ 20,00",
    },
  ];

  return (
    <main>
      <h1 className="text-base py-4 text-xl">Lanches</h1>
      {lanches.map((lanche) => {
        return (
          <div
            className=" flex flex-col border border-bebidas mb-8"
            key={lanche.id}
          >
            <div>
              <img
                src={lanche.imagem}
                alt="hamburger"
                className="block w-full h-[200px] object-cover"
              />
            </div>
            <div className="">
              <div className="">
                <div className="flex justify-between px-2 font-semibold">
                  <p className="">{lanche.marca}</p>
                  <p className="">{lanche.classe}</p>
                </div>
                <p className="px-2 font-semibold">{lanche.tipo}</p>
                <p className="px-2 text-sm mt-4">{lanche.argumento}</p>
                <ul className="flex justify-between px-2 pt-4 mb-1">
                  <li>
                    <p className="font-semibold text-base">{lanche.preco}</p>
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
    </main>
  );
};
export default Lanches;
