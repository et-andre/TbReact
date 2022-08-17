
function ProductList({products}) {
    const productsJsx = products.map(
        (product) => <ProductTableRow key={product.id} {...product}/>
    );

    return (
        <>
            <h2>List of products</h2>
            <table className="table">
                <ProductTableHead/>
                <tbody>
                    {productsJsx}
                </tbody>
            </table>
        </>
    );
}

function ProductTableHead () {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Promo</th>
            </tr>
        </thead>
    );
};

function ProductTableRow ({ name, price, promo }) {
    return (
        <tr className={promo ? 'table-success' : ''}>
            <td>{name}</td>
            <td>{price}</td>
            <td>{promo ? "En promo" : ""}</td>
        </tr>
    );
}

export default ProductList;