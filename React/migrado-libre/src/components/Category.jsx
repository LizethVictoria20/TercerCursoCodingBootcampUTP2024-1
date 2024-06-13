import React, { useState, useEffect } from 'react';

function Category() {
  const categoryURL = 'https://api.mercadolibre.com/sites/MLA/categories';
  const [categories, setCategories] = useState([]);
  const [watchCategories, setwatchCategories] = useState({});

  const apiFetchCategories = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.error('API not found', error));
  };

  useEffect(() => {
    apiFetchCategories(categoryURL);
  }, []);


    //Menú desplegable
    const menuCategories = (id) => {
        setwatchCategories((beforeState) => ({
            //Copia todas las propiedades del estado anterior
            ...beforeState,
            [id]: !beforeState[id]
            //Cambia el valor del estado
        }))
    } 


    return (
        <div>
            {categories.map((category) => (
            <div key={category.id}>
                <button onClick={() => menuCategories(category.id)}>
                {watchCategories[category.id] ? '-' : '+'}
                </button>
                <span>{category.name}</span>
                {watchCategories[category.id] && (
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
