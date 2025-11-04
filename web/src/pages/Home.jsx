import { Link } from "react-router-dom";

const produtos = [
  { id: 1, nome: "Notebook Dell", preco: "R$ 4.200,00" },
  { id: 2, nome: "Mouse Gamer", preco: "R$ 150,00" },
  { id: 3, nome: "Monitor 27''", preco: "R$ 1.200,00" },
];

export default function Home() {
  return (
    <div>
      <h2>Lista de Produtos</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {produtos.map((p) => (
          <li key={p.id} style={{ marginBottom: "10px" }}>
            <Link to={`/product/${p.id}`}>{p.nome}</Link> — {p.preco}
          </li>
        ))}
      </ul>
    </div>
  );
}
