import { useState, useEffect } from "react";

export function useFact(url) {
    const [facts,  setFact] = useState({});
    useEffect(() => {
      fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setFact(data)
        console.log(data.fact)
      })
      .catch(() => console.log('Algo salió mal. Checking...'))
    }, [url]); 
  
    return { facts }
  }
