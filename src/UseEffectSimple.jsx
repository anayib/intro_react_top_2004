import { useState, useEffect } from "react";


export default function ToDoList() {
  
  let [toDoList, setTodo] = useState([]);
  let [taskInput, setTaskInput] = useState('');
  let [updateTaskId, setUpdateTaskId] = useState(null);

  useEffect(() => {
    console.log('To Do List Changed') // code to be executed whrn dependencies change
    return () => console.log('clean up logic'); // Clean up fucntion runs when component unmounts or before execution the function
  }, [toDoList]) // array of dependencies passed as second para to useEffect. When toDoList changes the callback passed as first parameter is executed. 

  const handleAddTask = (e) => {
    e.preventDefault();
    
    if(taskInput.trim()) {
      if (updateTaskId !== null) {
        setTodo(toDoList.map((task) => {
          return task.id === updateTaskId ? { ...task, task: taskInput} : task
        })) 
        setUpdateTaskId(null);
      } else { 
        const newTask = {
          id: Math.floor(Math.random() * 100),
          task: taskInput,
          completed: false,
        };
        setTodo([...toDoList, newTask]);
      }
      setTaskInput("");  // Clear the input field
    }
  };

  const handleDeleteTask = (id) => {
   setTodo(toDoList.filter(taskInput => taskInput.id !== id));
  }
   
  const handleUpdateTask = (id) => {
    let taskToEdit = toDoList.filter(taskInput => {
      return taskInput.id === id
     }
    );
    
    setTaskInput(taskToEdit[0].task);
    setUpdateTaskId(taskToEdit[0].id);
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
      <button type="submit">{updateTaskId !== null ?  'Update Task' : 'Add Task'}</button>
    </form>

    <ul>
      {toDoList.map((element) => (
        <li key={element.id}>
          <input type="checkbox" id={element.id} />
          <label htmlFor={element.id}>{element.task}</label>
          <button type="button" onClick ={() => handleDeleteTask(element.id)}>Delete Task</button>
          <button type="button" onClick ={() => handleUpdateTask(element.id)}>Edit Task</button>
        </li>
      ))}
    </ul>
    </>
  );
}
