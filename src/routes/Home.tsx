const Home = () => {
  type promocoesProps = {
    id: number;
    imagem: string;
    marca: string;
    classe: string;
    tipo: string;
    argumento: string;
    preco: string;
  };

  const promocoes: promocoesProps[] = [
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
      imagem: "/cubanacan.jpeg",
      marca: "La Vosier",
      classe: "Bebidas",
      tipo: "Cubanaca",
      argumento:
        "Uma delícia de bebida, sabor sem igual um gosto diferente de tudo que já provei. Super recomendo.",
      preco: "R$ 20,00",
    },
    {
      id: 5,
      imagem: "/carolina herrera.jpeg",
      marca: "Carolina Herrera",
      classe: "Bebidas",
      tipo: "Amanhecer",
      argumento:
        "Uma delícia de bebida, sabor sem igual um gosto diferente de tudo que já provei. Super recomendo.",
      preco: "R$ 25,00",
    },
    {
      id: 6,
      imagem: "/casa do café.jpeg",
      marca: "Casa do café",
      classe: "Bebidas",
      tipo: "Café com amor",
      argumento:
        "Uma delícia de bebida, sabor sem igual um gosto diferente de tudo que já provei. Super recomendo.",
      preco: "R$ 18,00",
    },
    {
      id: 7,
      imagem: "/imagens.jpeg",
      marca: "la Voiser",
      classe: "Super Hamburger",
      tipo: "Lanche",
      argumento:
        "Uma delícia de lanche, sabor sem igual um gosto diferente de tudo que já provei. Super recomendo.",
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
      imagem: "/hamb8.jpeg",
      marca: "Casa da Batata",
      classe: "Lanches",
      tipo: "Super Kit",
      argumento:
        "Uma delícia de lanche, sabor sem igual um gosto diferente de tudo que já provei. Super recomendo.",
      preco: "R$ 26,00",
    },
  ];
  return (
    <main>
      <div className="flex bg-[url(/grande1.jpeg)] bg-no-repeat bg-cover mb-4  w-full h-full md:h-[400px] 2xl:h-[700px] 3xl:h-[900px]">
        <div className="block text-center m-auto my-20 md:my-30 2xl:my-70 font-bold">
          <h1 className="text-white md:text-3xl 2xl:text-5xl">
            Que tal matar a sua fome agora?
          </h1>
          <button className="bg-red-600 p-2 2xl:px-8 text-white font-light mt-4 2xl:mt-8 cursor-pointer">
            Eu Quero
          </button>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 2xl:grid-cols-3 gap-4">
        {promocoes.map((promocao) => {
          return (
            <div
              className=" flex flex-col border border-bebidas mb-8"
              key={promocao.id}
            >
              <div>
                <img
                  src={promocao.imagem}
                  alt="promocao"
                  className="block w-full  h-[200px] 2xl:h-[400px] object-cover"
                />
              </div>
              <div className="">
                <div className="">
                  <div className="flex justify-between px-2 font-semibold">
                    <p className="">{promocao.marca}</p>
                    <p className="">{promocao.classe}</p>
                  </div>
                  <p className="px-2 font-semibold">{promocao.tipo}</p>
                  <p className="px-2 text-sm mt-4">{promocao.argumento}</p>
                  <ul className="flex justify-between px-2 pt-4 mb-1">
                    <li>
                      <p className="font-semibold text-base">
                        {promocao.preco}
                      </p>
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
      <section className="flex flex-col  bg-[url(/grande2.jpeg)] bg-no-repeat bg-cover  mb-4  w-full h-40 md:h-[400px] 2xl:h-[700px] 3xl:h-[900px]">
        <h1 className="flex mx-auto text-white pt-4 2xl:pt-8 text-2xl md:text-5xl 2xl:text-7xl">
          Promoção do momento
        </h1>
        <p className="flex pl-65 2xl:pl-280 md:pl-150 text-white font-semibold pt-10 md:pt-20 2xl:pt-60 text-[18px] md:text-2xl 2xl:text-4xl">
          40% off
        </p>
      </section>
      <section className="flex justify-center space-x-4 md:space-x-20 2xl:space-x-40">
        <div>
          <img src="/card-icon.png" alt="" className="w-18 md:w-25 2xl:w-40" />
        </div>
        <div>
          <img
            src="/1Vector.png"
            alt=""
            className="w-13 mt-3 md:w-20 2xl:w-37"
          />
        </div>
        <div>
          <img
            src="/card-icon-2.png"
            alt=""
            className="w-18 md:w-25 2xl:w-40"
          />
        </div>
        <div>
          <img
            src="/1Vector.png"
            alt=""
            className="w-13 mt-3 md:w-20 2xl:w-37"
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
