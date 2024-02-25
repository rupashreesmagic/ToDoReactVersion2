import ToDoItem from "./ToDoItem";

const ToDoItems = ({ todoItems }) => {
  return (
    <div >
      {todoItems.map(item => <ToDoItem todoDate = {item.dueDate} todoName = {item.name}></ToDoItem>)}
    </div>
  );
};
export default ToDoItems;
