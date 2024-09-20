import { useState } from "react";

export default function ToDoList() {
  
  let [counter, setCounter] =useState(0);

  let handleChange = (e)  => {
    e.preventDefault()
    console.log(e.target.name);
  }
  
  return (
    <>
    <h1>Counter</h1>
    <p>{counter}</p>

    <button onClick={handleChange} name="incrase">Increment</button>
    <button onClick={handleChange} name="decrease">Decrease</button>
    </>
  );
}