import { useState, useEffect } from "react";

export function useGatito(url) {
  const [gatitos,  setData] = useState(null);
  useEffect(() => {
    fetch(url)
    .then((response) => response.json())
    .then((gatito) => {
      setData(gatito)
    })
    .catch(() => console.log('Algo salió mal. Checking...'))
  }, [url]); 

  return { gatitos }
}


