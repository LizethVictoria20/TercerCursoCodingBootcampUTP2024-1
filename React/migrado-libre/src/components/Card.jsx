import "../styles/Card.css";

function Card({ products }) {
  return (
    <div className="container">
      {products.map((data) => (
        <div className="container-product" key={data.id}>
          <h3>{data.title}</h3>
          <p>${data.price}</p>
          <img src={data.thumbnail} alt="Product" />
        </div>
      ))}
    </div>
  );
}

export default Card;
