console.log(1234567);

let listTodos = ["itme1", "item2", "item3"];

// display todos
function printTodos() {
  console.log("My todos: ", listTodos);
}

// add items to listTodo
function addItem(item) {
  listTodos.push(item);
  printTodos();
}

// change listTodos
function changeItem(position, changedItem) {
  listTodos[position] = changedItem;
  printTodos();
}

// delite item in listTodos
function delieteItem(positionItem) {
  listTodos.splice(positionItem, 1);
  printTodos();
}

//
addItem("item for testing");
changeItem(1, "promenjeno");
delieteItem(0);
