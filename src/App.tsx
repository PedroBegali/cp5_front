import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Sugestao from "./pages/Sugestao";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* O Layout "abraça" as rotas filhas */}
        <Route path="/" element={<Layout />}>
          
          {/* Rota inicial (Index) mostra a Home */}
          <Route index element={<Home />} />
          
          {/* Rota /sugerir mostra o formulário com useForm */}
          <Route path="sugerir" element={<Sugestao />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;