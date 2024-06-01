import { useState, useEffect } from "react";

export function UseGatito(url) {
  const [gatitos,  setData] = useState(null);

  useEffect(() => {
    fetch(url)
    .then((response) => response.json())
    .then((gatito) => {
      setData(gatito)
    })
    .catch((error) => console.log('Algo salió mal. Checking...', error))
  }, [url]); 

  return { gatitos }

}


