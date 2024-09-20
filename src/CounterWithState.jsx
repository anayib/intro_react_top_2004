import { useState } from "react";

export default function CounterWithState() {
  
  let [counter, setCounter] =useState(0);

  let handleChange = (e)  => {
    e.preventDefault()
    let name = e.target.name;

    if (name === 'increase') {
      setCounter(counter + 1)
    } else if (name === 'decrease') {
      setCounter(counter-1)
    }
  }
  
  return (
    <>
    <h1>Counter</h1>
    <p>{counter}</p>
    <button onClick={handleChange} name="increase">Increase</button>
    <button onClick={handleChange} name="decrease">Decrease</button>
    </>
  );
}