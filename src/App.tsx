import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Sugestao from "./pages/Sugestao";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="sugerir" element={<Sugestao />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
