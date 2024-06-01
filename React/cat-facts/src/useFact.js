import { useState, useEffect } from "react";

export function useFact(url, data) {
    const [facts,  setData] = useState(null);
    useEffect(() => {
      fetch(url)
      .then((response) => response.json())
      .then((facts) => {
        setData(facts)
        console.log(facts.fact)
      })
      .catch(() => console.log('Algo salió mal. Checking...'))
    }, [url]); 
  
    return { facts }
  }
  
  