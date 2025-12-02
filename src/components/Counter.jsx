import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <>
            <label htmlFor="myCounter">Counter:</label>
            <input type="number" id="myCounter" readOnly value={count} />
            <button onClick={() => {
                setCount(count + 1)
            }}>+</button>
        </>
    );
}

export default Counter;