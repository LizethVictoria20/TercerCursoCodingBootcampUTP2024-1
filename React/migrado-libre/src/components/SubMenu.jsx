import { useState, useEffect } from "react";

function SubCategories({ subCategory, isOpen }) {
  const [subCate, setSubCate] = useState([]);
  const urlCategories = "https://api.mercadolibre.com/categories/";
  const urlSubCategories = `${urlCategories}${subCategory}`;


  useEffect(() => {
    if (isOpen) {
      fetch(urlSubCategories)
        .then((res) => res.json())
        .then((res) => {
          const childrens = res.children_categories;
          setSubCate(childrens);
        })
        .catch((error) => console.log(error));
    }
  }, [isOpen, urlSubCategories]);


  return (
    <ul>
      {subCate.map((data) => (
        <li key={data.id}>{data.name}</li>
      ))}
    </ul>
  );
}

export default SubCategories;
