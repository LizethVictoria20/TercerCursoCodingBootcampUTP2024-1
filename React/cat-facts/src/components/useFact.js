import { useState, useEffect } from "react";

export function useFact(url) {
  const [fact, setFact] = useState("");

  const fetchFact = () => {
    fetch(url)
      .then(response => {
        // Manejando errores en el llamado de la API
        if (!response.ok) {
          throw new Error('La respuesta de la API no fue satisfactoria.');
        }
        return response.json();
      })
      .then(data => {
        // Fact que retorna una la primera palabra
        setFact(data.fact.split(" ")[0]);
        // Fact retorna completo en la consola
        console.log(data.fact)
      })
      .catch(error => {
        //Errores en obtener la imagen del gatito
        console.error('Error fetching fact:', error);
      });
  };

  useEffect(() => {
    fetchFact();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { fact, fetchFact };
}
