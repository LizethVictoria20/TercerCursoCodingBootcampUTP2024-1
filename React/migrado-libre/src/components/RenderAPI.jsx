import { useState, useEffect } from 'react';
import Card from './Card.jsx'

function RenderAPI() {
  const [ product, setProduct ] = useState([])
  const URL = 'https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326'
  const fetchAPI = (URL) => {
    fetch(URL)
    .then((res) => res.json())
    .then((res) => {
      const products = res.results
      setProduct(products)
    })
  }

    useEffect(() => {
      fetchAPI(URL)
    }, [])
    return (
      <>
        <Card products={product} />
      </>
    )
}


export default RenderAPI;
