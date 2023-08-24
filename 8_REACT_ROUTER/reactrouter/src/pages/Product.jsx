import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

const Product = () => {
  // 4 - Rota dinâmica
  const { id } = useParams();
  // 5 - Carregamento dado individual
  const {
    data: product,
    error,
    loading,
  } = useFetch("http://localhost:3000/products/" + id);

  console.log(product);

  return (
    <>
      <p>ID do produto: {id} </p>
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      <div>
        <h1>{product.name}</h1>
        <p>R$ {product.price}</p>
        {/* 6 Nested Routes */}
        <Link to={`/products/${product.id}/info`}> Mais informações</Link>
      </div>
    </>
  );
};

export default Product;
