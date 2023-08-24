import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Erro ao buscar os dados da API");
      }
      const result = await response.json();
      setData(result);
    } catch (erro) {
      setError("Erro ao buscar os dados da API");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  const addItem = async (item) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(item),
      });
      if (!response.ok) {
        throw new Error("Erro ao adicionar item");
      }
      fetchData(); // Atualiza a lista após adicionar item
    } catch (erro) {
      setError("Erro ao adicionar item");
    }
  };

  return { data, error, loading, addItem };
};

export default useFetch;
