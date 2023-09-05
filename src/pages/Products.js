import { Link } from 'react-router-dom';

function ProductsPage(){
    const PRODUCTS = [
        { id: 'p1', title: 'product 1' },
        { id: 'p2', title: 'product 2' },
        { id: 'p3', title: 'product 3' },
    ];
    return (
        <>
        <h1>This is products page</h1>
        <ul>
            {PRODUCTS.map((prod) => (
                <li key={prod.id}>
                    <Link to={prod.id}>{prod.title}</Link>
                </li>
            ))}
        </ul>
        </>
    );
}

export default ProductsPage;