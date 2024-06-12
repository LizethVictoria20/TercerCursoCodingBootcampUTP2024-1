
function Card(products ) {
    return (
        <div>
            {
                products.products.map((data) => console.log(data))
            }
        </div>
    )
}

export default Card;
