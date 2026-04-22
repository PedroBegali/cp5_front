import { Link, useLocation } from "react-router-dom";
import { ChefHat, Home, UtensilsCrossed } from "lucide-react";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-100 shadow-sm transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-orange-100 p-2 rounded-xl group-hover:bg-orange-200 transition-colors">
            <ChefHat className="w-6 h-6 text-orange-600" />
          </div>
          <span className="text-2xl font-black text-transparent bg-clip-text bg-linear-to-r from-orange-600 to-red-500 font-serif tracking-tight">
            Sabores do Front
          </span>
        </Link>

        <nav className="flex gap-2 sm:gap-4 items-center">
          <Link
            to="/"
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-sans font-bold transition-all duration-300 ${
              isActive("/")
                ? "bg-orange-600 text-white shadow-md shadow-orange-200"
                : "text-gray-600 hover:bg-orange-50 hover:text-orange-600"
            }`}
          >
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">Home</span>
          </Link>

          <Link
            to="/sugerir"
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-sans font-bold transition-all duration-300 ${
              isActive("/sugerir")
                ? "bg-orange-600 text-white shadow-md shadow-orange-200"
                : "text-gray-600 hover:bg-orange-50 hover:text-orange-600"
            }`}
          >
            <UtensilsCrossed className="w-4 h-4" />
            <span className="hidden sm:inline">Sugerir Receita</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
