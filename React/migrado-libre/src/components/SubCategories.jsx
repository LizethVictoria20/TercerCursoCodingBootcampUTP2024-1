import { useState, useEffect } from "react";

function SubCategories({ subCategory }) {
  const [subCate, setSubCate] = useState([]);
  const urlCategories = "https://api.mercadolibre.com/categories/";
  const urlSubCategories = `${urlCategories}${subCategory}`;
  const fetchAPI = (url) => {
    if (subCategory !== undefined) {
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          const childrens = res.children_categories;
          setSubCate(childrens);
        })

        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    fetchAPI(urlSubCategories);
  });
  return (
    <div>
      {subCate.map((data) => {
        return <p>{data.name}</p>;
      })}
    </div>
  );
}

export default SubCategories;
