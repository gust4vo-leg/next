import CardProduto from "@/components/cardProduto";
import "./produtos.css";

export default function Produtos() {
  const listaProdutos = [
    {
      id: 1,
      titulo: "Detergente YPE",
      descricao: "É legal, mas não pode beber",
      imagem: "detergente.png",
      preco: 5.67,
    },
    {
      id: 2,
      titulo: "Sabão em pó OMO",
      descricao: "Mais área de contato, mais poder!",
      imagem: "sabao.png",
      preco: 15.67,
    },
    {
      id: 3,
      titulo: "Desinfetante MINUANO",
      descricao: "Hmm é cremoso, é saboroso!",
      imagem: "desinfetante.png",
      preco: 4.67,
    },
    {
      id: 4,
      titulo: "Água Sanitária YPE",
      descricao: "Bom para beber ",
      imagem: "aguaSanitaria.png",
      preco: 4.15,
    },
  ];

  return (
    <>
      <h1>Página de listagem de produtos!</h1>

      {/* aqui é onde os cards de produtos vão ficar*/}
      <div className="cardContainer">
        {listaProdutos.map((produto, idx) => {
          return (
            <CardProduto
              //key={produto.id}
              key={idx}
              titulo={produto.titulo}
              descricao={produto.descricao}
              imagem={produto.imagem}
              preco={produto.preco}
            />
          );
        })}
      </div>
    </>
  );
}
