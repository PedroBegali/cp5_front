import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo que volta para a Home */}
        <Link to="/" className="text-2xl font-bold text-orange-600 font-serif">
          Sabores do Front
        </Link>

        {/* Links de Navegação */}
        <nav className="flex gap-6">
          <Link to="/" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">
            Home
          </Link>
          <Link to="/sugerir" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">
            Sugerir Receita
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;