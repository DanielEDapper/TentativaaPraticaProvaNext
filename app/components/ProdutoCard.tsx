import Image from "next/image";

interface ProdutoCardProps {
    id : number;
    title : string;
    price : number;
    description : string;
    image : string
    adicionarAoCarrinho : () => void
}

export default function ProdutoCard(produto : ProdutoCardProps)
{
    return (
        <div>
            <div>
                <Image
                src={produto.image}
                alt={produto.title}/>
            </div>
            <div>
                <p>{produto.id}</p>
                <h2>{produto.title}</h2>
                <p>{produto.price}</p>

                <button onClick={produto.adicionarAoCarrinho}>Adicionar ao Carrinho</button>
            </div>
        </div>
    )
}