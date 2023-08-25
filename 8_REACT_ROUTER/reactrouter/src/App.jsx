import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Info from "./pages/info";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";

// Components
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";


function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />
        {/* 9 - Search */}
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* 4 - Rota dinâmica */}
          <Route path="/products/:id" element={<Product />} />
          {/* 6 - Nested Route */}
          <Route path="/products/:id/info" element={<Info />} />
          {/* 9 - Página de busca */}
          <Route path="/search" element={<Search />}/>
          {/* 7 - No Match Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
