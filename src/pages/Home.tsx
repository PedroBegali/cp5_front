import { useState, useEffect } from "react";
import Card from "../components/Card";

interface Recipe {
  id: number;
  nome: string;
  categoria: string;
  ingredientes: string[];
  modoPreparo: string;
  imagem: string;
}

const categorias = [
  "Todas",
  "Saladas",
  "Pratos Principais",
  "Sobremesas",
  "Bebidas",
];

const Home = () => {
  const [receitas, setReceitas] = useState<Recipe[]>([]);
  const [busca, setBusca] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todas");
  const [selecionada, setSelecionada] = useState<Recipe | null>(null);

  useEffect(() => {
    fetch("/data/receitas.json")
      .then((response) => response.json())
      .then((data) => setReceitas(data))
      .catch((error) => console.error("Erro ao carregar receitas:", error));
  }, []);

  const filtradas = receitas.filter((r) => {
    const matchBusca = r.nome.toLowerCase().includes(busca.toLowerCase());
    const matchCategoria =
      categoriaSelecionada === "Todas" || r.categoria === categoriaSelecionada;
    return matchBusca && matchCategoria;
  });

  return (
    <div className="flex flex-col items-center max-w-6xl mx-auto">
      <div className="w-full text-center mb-8">
        <h1 className="text-3xl font-serif font-bold text-gray-800 mb-6">
          Encontre sua próxima receita
        </h1>
        <input
          type="text"
          placeholder="Buscar receita (ex: Lasanha)..."
          className="w-full max-w-xl p-4 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaSelecionada(cat)}
            className={`px-5 py-2 rounded-full font-medium text-sm transition-colors duration-300 ${
              categoriaSelecionada === cat
                ? "bg-orange-600 text-white shadow-md"
                : "bg-white text-gray-600 border border-gray-200 hover:bg-orange-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtradas.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {filtradas.map((item) => (
            <Card
              key={item.id}
              nome={item.nome}
              categoria={item.categoria}
              imagem={item.imagem}
              onClick={() => setSelecionada(item)}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 mt-10">
          Nenhuma receita encontrada com esses filtros.
        </p>
      )}

      {selecionada && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl">
            <button
              onClick={() => setSelecionada(null)}
              className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 text-gray-800 w-8 h-8 rounded-full flex items-center justify-center font-bold transition-colors"
            >
              ✕
            </button>

            <img
              src={selecionada.imagem}
              alt={selecionada.nome}
              className="w-full h-64 object-cover rounded-t-3xl"
            />

            <div className="p-8">
              <span className="text-orange-600 text-xs font-bold uppercase tracking-wider">
                {selecionada.categoria}
              </span>
              <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6 mt-1">
                {selecionada.nome}
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-lg border-b pb-2 mb-3">
                    Ingredientes
                  </h3>
                  <ul className="list-disc ml-5 space-y-1 text-gray-700">
                    {selecionada.ingredientes.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg border-b pb-2 mb-3">
                    Modo de Preparo
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {selecionada.modoPreparo}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
