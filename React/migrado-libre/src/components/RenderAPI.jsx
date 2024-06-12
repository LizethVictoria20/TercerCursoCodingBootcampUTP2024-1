import { useState, useEffect } from "react";
import Card from "./Card.jsx";
import Category from "./Category.jsx";

function RenderAPI() {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const URL =
    "https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326";
  const categoryURL = "https://api.mercadolibre.com/sites/MLA/categories";

  const fetchAPISeller = (URL) => {
    fetch(URL)
      .then((res) => res.json())
      .then((res) => {
        const products = res.results;
        setProduct(products);
      });
  };
  const apiFetchCategories = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setCategory(res);
      });
  };

  useEffect(() => {
    fetchAPISeller(URL);
    apiFetchCategories(categoryURL);
  }, []);

  return (
    <>
      <Card products={product} />
      <Category category={category} />
    </>
  );
}

export default RenderAPI;
