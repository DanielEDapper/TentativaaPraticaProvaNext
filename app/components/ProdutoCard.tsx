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
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-md flex flex-col justify-between">
            <div className="bg-white p-4 flex items-center justify-center h-48">
            {produto.image && (
                <Image
                    src={produto.image}
                    alt={produto.title}
                    width={180}
                    height={180}
                />
                )}
            </div>
    
            <div className="p-5 flex flex-col gap-4">
                <div>
                    <h2 className="font-bold text-white text-lg">
                        {produto.title}
                    </h2>
    
                    <p className="text-zinc-400 text-sm mt-2">
                        {produto.description}
                    </p>
                </div>
    
                <div className="pt-4 border-t border-zinc-700 flex items-center justify-between gap-4">
                    <span className="text-xl font-bold text-white">
                        R$ {produto.price}
                    </span>
    
                    <button
                        onClick={produto.adicionarAoCarrinho}
                        className="bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium px-3 py-2 rounded-lg transition"
                    >
                        Adicionar
                    </button>
                </div>
            </div>
        </div>
    );
}