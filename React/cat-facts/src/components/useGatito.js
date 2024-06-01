import { useState, useEffect } from "react";

export function UseGatito(url) {
  const [gatitos, setGatitos] = useState([]);

  const fetchGatitos = () => {
    fetch(url)
      .then(response => {
        // Manejando errores en el llamado de la API
        if (!response.ok) {
          throw new Error('La respuesta de la API no fue satisfactoria.');
        }
        return response.json();
      })
      .then(data => {
        setGatitos(data);
      })
      .catch(error => {
        //Errores en obtener la imagen del gatito
        console.error('Error fetching gatitos:', error);
      });
  };

  useEffect(() => {
    fetchGatitos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { gatitos, fetchGatitos };
}
