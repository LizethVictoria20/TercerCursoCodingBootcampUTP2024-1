import "../styles/Card.css";

function Card({ products }) {
  return (
    <div className="container">
      {products.map((data) => (
        <div className="container-product" key={data.id}>
          <a href={data.permalink} target="_blank" rel="noreferrer">
            {data.title}
          </a>
          <p>${data.price}</p>
          <img src={data.thumbnail} alt="Product" />
        </div>
      ))}
    </div>
  );
}

export default Card;
