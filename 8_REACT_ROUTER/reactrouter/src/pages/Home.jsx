import { useState } from "react";
import "./Home.css";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

const Home = () => {
  const { data, error, loading, addItem } = useFetch(
    "http://localhost:3000/products"
  );
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({
      name,
      price,
    });
    setName("");
    setPrice("");
  };

  return (
    <div className="Home">
      <h2>Produtos:</h2>
      <ul className="products">
        {loading && <p>Carregando dados...</p>}
        {error && <p>{error}</p>}
        {!error &&
          data.map((item) => (
            <li key={item.id}>
              {item.name} - R$ {item.price}
              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>

      <div className="add-product">
        <form className="teste" onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </label>
          <button type="submit">Adicionar item</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
