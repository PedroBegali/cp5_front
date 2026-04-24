interface CardProps {
  nome: string;
  categoria: string;
  imagem: string;
  onClick: () => void;
}

const Card = ({ nome, categoria, imagem, onClick }: CardProps) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
    >
      <img src={imagem} alt={nome} className="w-full h-48 object-cover" />
      <div className="p-4 text-left">
        <span className="text-orange-600 text-[10px] font-bold uppercase">
          {categoria}
        </span>
        <h3 className="text-xl font-bold text-gray-800">{nome}</h3>
        <p className="text-gray-400 text-xs mt-2 italic">
          Clique para ver preparo
        </p>
      </div>
    </div>
  );
};

export default Card;
