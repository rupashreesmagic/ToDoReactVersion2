import AppName from "./Components/AppName";
import AddToDo from "./Components/AddToDo";
import ToDoItems from "./Components/ToDoItems";



import "./App.css";
function App(){
  const todoItems = [{
    name:'Buy Milk',
    dueDate:'11/02/24',
  },
  {
    name:'Go to college',
    dueDate:'11/02/24',
  },
  {
    name:'Study Hard',
    dueDate:'right now',
  }

]
  return (
    <center className="todo-container">
      <AppName></AppName>
      
      <div className = "styles.itemsContainer">
      <AddToDo></AddToDo>
      <ToDoItems todoItems = {todoItems}></ToDoItems>
      
      </div>
      
    </center>
  );
}

export default App;
