import { useSearchParams, Link } from "react-router-dom"
import {useFetch} from "../hooks/useFetch"

const Search = () => {
    const [searchParams] = useSearchParams()
    const {
        data: items,
        error,
        loading,
      } = useFetch("http://localhost:3000/products?" + searchParams);



  return (
    <div>
        <h1>Resultados disponiveis: </h1>
        <ul className="products">
        {loading && <p>Carregando dados...</p>}
        {error && <p>{error}</p>}
        {!error &&
          items.map((item) => (
            <li key={item.id}>
              {item.name} - R$ {item.price}
              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Search