"use client"

import { useEffect, useState } from "react";
import ProdutoCard from "./components/ProdutoCard";

interface Produto{
  id : number;
  title : string;
  price : number;
  description : string;
  image : string
}

export default function Home() {

  const URL = 'https://api.escuelajs.co/api/v1/products';

  var [produtos, setProdutos] = useState<Produto[]>([]);
  var [carrinho, setCarrinho] = useState(0);

  const adicionarAoCarrinho = () => {
    setCarrinho((valorAtual) => valorAtual + 1)
  }

  useEffect(() => {
    fetch(URL)
    .then((resposta) => resposta.json())
    .then((dados) => setProdutos(dados))
    .catch((erro) => console.log("Erro ao buscar Produto:", erro))
  }, [])

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>BookShelf</h1>
        <p>API Biblioteca de Livros</p>

        <p>Carrinho: ${carrinho}</p>

        <div>
          {produtos.map((produto) => {
             return <ProdutoCard
              key={produto.id}
              image={produto.image}
              title={produto.title} 
              id={produto.id} 
              price={produto.price} 
              description={produto.description}
              adicionarAoCarrinho={adicionarAoCarrinho}
            />
          })}
        </div>
      </main>
    </div>
  );
}
