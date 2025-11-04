import { useParams, Link } from "react-router-dom";

const produtos = [
  { id: 1, nome: "Notebook Dell", descricao: "Ideal para trabalho e estudos." },
  { id: 2, nome: "Mouse Gamer", descricao: "Alta precisão e design ergonômico." },
  { id: 3, nome: "Monitor 27''", descricao: "Imagem nítida e cores vibrantes." },
];

export default function ProductDetails() {
  const { id } = useParams();
  const produto = produtos.find((p) => p.id === Number(id));

  if (!produto) return <h2>Produto não encontrado</h2>;

  return (
    <div>
      <h2>{produto.nome}</h2>
      <p>{produto.descricao}</p>
      <Link to="/">← Voltar à lista</Link>
    </div>
  );
}
