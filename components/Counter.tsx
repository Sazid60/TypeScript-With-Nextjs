"use client"
import { useState } from "react";
// type Shape = {
//     val : string
// }

const Counter = () => {
    // const [count, setCount] = useState<string>("hsashas") 
    // const [count, setCount] = useState<number>(0) 
    // const [count, setCount] = useState<Shape | undefined>(undefined) 
    const [count, setCount] = useState<number>(0)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={ () => setCount(count + 1)}>Increment </button>
            <button onClick={ () => setCount(count - 1)}>Decrement </button>
        </div>
    );
};

export default Counter;