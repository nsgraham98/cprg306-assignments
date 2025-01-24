"use client";

import { useState } from "react";
 
export default function CounterExample() {
  const [count, setCount] = useState(0);
 
  const increment = () => {
    setCount(count + 1);
  };
 
  return (
    <div>
        <h1>useState example</h1>
        <p>Count: {count}</p>
        <button onClick={increment} className="bg-green-800 p-3 m-3 rounded-lg border-none hover:bg-green-900" >Increment</button>
        <p>===========================</p>
    </div>
  );
}