import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    // min-h-screen faz com que o rodapé fique sempre em baixo
    <div className="min-h-screen flex flex-col bg-gray-50">
      
      {/* O Header aparece em todas as páginas */}
      <Header />

      {/* O Outlet é o "espaço vazio" onde as páginas vão carregar */}
      <main className="grow container mx-auto px-4 py-8">
        <Outlet />
      </main>

      {/* O Footer com os vossos nomes (obrigatório pela prova) */}
      <Footer />
      
    </div>
  );
};

export default Layout;