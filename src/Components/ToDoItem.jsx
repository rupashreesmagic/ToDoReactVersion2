function ToDoItem({todoName,todoDate}) {
  //let todoName = 'Buy Milk';
  //let todoDate = '08/02/24';
  return (
    <div class="container ">
      <div class="row rr-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger rr-btn">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
export default ToDoItem;