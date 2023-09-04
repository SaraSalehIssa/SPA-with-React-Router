import { Link } from 'react-router-dom';

function HomePage() {
    return <>
        <h1>This is home page</h1>
        <p>GO TO <Link to="/products">list of products</Link>.</p>
    </>
}

export default HomePage;