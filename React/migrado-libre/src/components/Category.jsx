function Category({ category }) {
  return (
    <div>
      {
        category && category.length > 0 ? (
            category.map(data => (
                <a href="/" key={data.id}>{data.name}</a>
            ))
        ) : null
      }
    </div>
  );
}

export default Category;
