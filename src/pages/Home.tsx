// useState e useEffect SEMPRE vêm do "react"
import { useState, useEffect } from "react";
// Importamos o JSON que criamos no Passo 1
import receitasData from "../data/receitas.json";
import Card from "../components/Card";

interface Recipe {
  id: number;
  nome: string;
  categoria: string;
  ingredientes: string[];
  modoPreparo: string;
  imagem: string;
}

const Home = () => {
  const [receitas, setReceitas] = useState<Recipe[]>([]);
  const [busca, setBusca] = useState("");
  const [selecionada, setSelecionada] = useState<Recipe | null>(null);

  useEffect(() => {
    // Carregamos os dados do JSON para o estado
    setReceitas(receitasData);
  }, []);

  const filtradas = receitas.filter(r => 
    r.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="p-6">
      <input 
        type="text" 
        placeholder="Buscar receita..." 
        className="w-full max-w-md p-3 mb-8 border border-gray-300 rounded-xl"
        onChange={(e) => setBusca(e.target.value)}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtradas.map(item => (
          <Card 
            key={item.id}
            nome={item.nome}
            categoria={item.categoria}
            imagem={item.imagem}
            onClick={() => setSelecionada(item)}
          />
        ))}
      </div>

      {/* Modal Simples de Detalhes */}
      {selecionada && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-8 rounded-3xl max-w-lg w-full relative">
            <button onClick={() => setSelecionada(null)} className="absolute top-4 right-4">X</button>
            <h2 className="text-2xl font-bold mb-4">{selecionada.nome}</h2>
            <p className="font-bold text-orange-600">Ingredientes:</p>
            <ul className="list-disc ml-5 mb-4">
              {selecionada.ingredientes.map(i => <li key={i}>{i}</li>)}
            </ul>
            <p className="font-bold text-orange-600">Modo de Preparo:</p>
            <p>{selecionada.modoPreparo}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;