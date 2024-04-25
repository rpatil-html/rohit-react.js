// import { useState } from "react"

// function Counter()
// {
//     const [value,setvalue]=useState(0)
//     return(
//         <div className="App">
//             <h1 style={{textAlign:"center"}}>Counter</h1>
//             <h2 style={{textAlign:"center"}}>{value}</h2>
//             <button className="btn" onChange={ ()=> setvalue(value+1)}>Increment</button>
//             <button className="btn" onReset={ ()=> setvalue(value)}>Reset</button>
//             <button className="btn" onChange={ ()=> setvalue(value-1)}>Decrement</button>
//         </div>
//     )
// }
// export default Counter

import React, { useState } from "react";

function Counter() {
    const [value, setValue] = useState(0);

    const increment = () => {
        setValue(prevValue => prevValue + 1);
    };

    const reset = () => {
        setValue(0);
    };

    const decrement = () => {
        setValue(prevValue => prevValue - 1);
    };

    return (
        <div className="App">
            <h1 style={{ textAlign: "center" }}>Counter</h1>
            <h2 style={{ textAlign: "center" }}>{value}</h2>
            <button className="btn" onClick={increment}>Increment</button>
            <button className="btn" onClick={reset}>Reset</button>
            <button className="btn" onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Counter;
