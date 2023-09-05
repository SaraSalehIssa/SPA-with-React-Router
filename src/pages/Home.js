import { Link, useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();

    function navigateHandler(){
        navigate('/products');
    }

    return <>
        <h1>This is home page</h1>
        <p>GO TO <Link to="products">list of products</Link>.</p>
        <p><button onClick={navigateHandler}>Navigate</button></p>
    </>
}

export default HomePage;