import { Link } from "react-router";

function NavBar() {
    return (<nav>
        <Link to="/">Home</Link>
        <Link to="/external">External</Link>
        <Link to="/state">State</Link>
        <Link to="/add">Add Trainer</Link>
        <Link to="/components">Components</Link>

    </nav>);
}

export default NavBar;