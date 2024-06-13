import React, { useState, useEffect } from "react";
import { CiCircleChevDown, CiCircleChevUp } from "react-icons/ci";

function Category() {
  const categoryURL = "https://api.mercadolibre.com/sites/MLA/categories";
  const [categories, setCategories] = useState([]);
  const [openCategories, setOpenCategories] = useState({});

  useEffect(() => {
    fetch(categoryURL)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("API not found", error));
  }, []);

  const Menu = (id) => {
    // Creo una copia
    const openCategory = { ...openCategories };
    //saber si mi categoria está abierta :)
    if (openCategory[id]) {
      delete openCategory[id];
    } else {
      openCategory[id] = true;
    }
    // Update el estado -_-
    setOpenCategories(openCategory);
  };

  return (
    <div>
      {categories.map((category) => (
        <div key={category.id}>
          <button onClick={() => Menu(category.id)}>
            {openCategories[category.id] ? (
              <CiCircleChevUp />
            ) : (
              <CiCircleChevDown />
            )}
          </button>
          <span>{category.name}</span>
          {openCategories[category.id] && (
            <ul>
              <li>Subcategory 1</li>
              <li>Subcategory 2</li>
              <li>Subcategory 3</li>
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default Category;
