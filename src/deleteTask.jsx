import { useState } from "react";


export default function ToDoList() {
  
  let [toDoList, setTodo] = useState([]);
  let [taskInput, setTaskInput] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();

    if (taskInput.trim()) {
      const newTask = {
        id: Math.floor(Math.random() * 100),
        task: taskInput,
        completed: false,
      };
      setTodo([...toDoList, newTask]);
      setTaskInput("");  // Clear the input field
    }
  };

  const handleDeleteTask = (id) => {
   setTodo(toDoList.filter(taskInput => taskInput.id !== id));
  }
 
  const handleInput = (e) => setTaskInput(e.target.value)

  return (
    <>
    <h1>To Do Dynamic List</h1>

    <form onSubmit={handleAddTask}>
      <input 
        type="text" 
        value={ taskInput }
        placeholder="add taks"
        onChange={handleInput}
      />
      <label htmlFor="task"></label>
      <button type="submit">Add Task</button>
    </form>

    <ul>
      {toDoList.map((element) => (
        <li key={element.id}>
          <input type="checkbox" id={element.id} />
          <label htmlFor={element.id}>{element.task}</label>
          <button type="button" onClick ={() => handleDeleteTask(element.id)}>Delete Task</button>
        </li>
      ))}
    </ul>
    </>
  );
}
