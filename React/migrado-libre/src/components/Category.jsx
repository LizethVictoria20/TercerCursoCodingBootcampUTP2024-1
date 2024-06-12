import { useState, useEffect } from "react";

function Category() {
    const categoryURL = "https://api.mercadolibre.com/sites/MLA/categories";
    const [category, setCategory] = useState([]);

    const apiFetchCategories = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      })
      .catch((error) => console.error("API not found", error));
  };

  useEffect(() => {
    apiFetchCategories(categoryURL);
  }, []);

  return (
    <div>
        {
            category.map((data) => 
                <div key={data.id}>
                    <a href='/'>{data.name}</a >
                </div>
            )
        }
    </div>
  )

//   return (
//     <div>
//       {
//         category && category.length > 0 ? (
//             category.map(data => (
//                 <a href="/" key={data.id}>{data.name}</a>
//             ))
//         ) : null
//       }
//     </div>
//   );
}

export default Category;
