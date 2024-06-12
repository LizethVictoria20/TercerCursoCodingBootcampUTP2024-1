import { useState, useEffect } from "react";
import Card from "./Card.jsx";
import Category from "./Category.jsx";

function RenderAPI() {
  const [product, setProduct] = useState([]);
  const URL =
    "https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326";

  const fetchAPISeller = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        const products = res.results;
        setProduct(products);
      })
      .catch((error) => console.error("API not found", error));
  };

  

  useEffect(() => {
    fetchAPISeller(URL);
  }, []);

  return (
    <>
      <Card products={product} />
    </>
  );
}

export default RenderAPI;
