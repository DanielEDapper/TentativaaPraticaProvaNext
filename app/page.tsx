"use client"

import { useEffect, useState } from "react";
import ProdutoCard from "./components/ProdutoCard";

interface Produto {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
}

export default function Home() {

  const URL = 'https://api.escuelajs.co/api/v1/products';

  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [carrinho, setCarrinho] = useState(0);
  const [loading, setLoading] = useState(true);

  const adicionarAoCarrinho = () => {
    setCarrinho((valorAtual) => valorAtual + 1);
  }

  useEffect(() => {
    fetch(URL)
      .then((resposta) => resposta.json())
      .then((dados) => {
        setProdutos(dados);
        setLoading(false);
      })
      .catch((erro) => {
        console.log("Erro ao buscar Produto:", erro);
        setLoading(false);
      });
  }, []);

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-6xl mx-auto">

        <header className="mb-8 flex justify-between items-center border-b border-zinc-800 pb-4">
          <div>
            <h1 className="text-3xl font-bold text-emerald-400">
              BookShelf
            </h1>

            <p className="text-zinc-400 text-sm">
              API Biblioteca de Livros
            </p>
          </div>

          <div className="bg-zinc-900 px-4 py-2 rounded-lg border border-zinc-800">
            Itens no carrinho:{" "}
            <span className="font-bold text-emerald-400">
              {carrinho}
            </span>
          </div>
        </header>

        {loading && (
          <p className="text-zinc-400">
            Carregando produtos...
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {produtos.map((produto) => (
            <ProdutoCard
              key={produto.id}
              image={produto.images[0]}
              title={produto.title}
              id={produto.id}
              price={produto.price}
              description={produto.description}
              adicionarAoCarrinho={adicionarAoCarrinho}
            />
          ))}
        </div>

      </div>
    </main>
  );
}