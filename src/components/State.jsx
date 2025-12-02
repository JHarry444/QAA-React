import { useNavigate } from "react-router";
import Counter from "./Counter";

function State() {
    const navigate = useNavigate();
    return (
        <>
            <h2>State:</h2>
            <Counter />
            <button onClick={() => navigate("/")}>Home</button>
        </>
    );
}

export default State;