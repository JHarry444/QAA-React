import { useContext } from "react";
import { Link } from "react-router";

import { themeContext } from "../App";

function NavBar() {

    const { setTheme } = useContext(themeContext);

    return (<nav>
        <Link to="/">Home</Link>
        <Link to="/external">External</Link>
        <Link to="/state">State</Link>
        <Link to="/add">Add Trainer</Link>
        <Link to="/components">Components</Link>

        <button onClick={() => {
            setTheme(currentTheme => {
                let newTheme = currentTheme === "light" ? "dark" : "light";
                console.log("Theme:", newTheme);
                return newTheme;
            })
        }}>Toggle theme</button>
    </nav>);
}

export default NavBar;