import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";





function App() {

  const [todoList, setTodoList ] = useState([])


  function addTodo(content) {
    const todo = { id: crypto.randomUUID(),content  , done: false, edit: false, selected:false };
    setTodoList([...todoList, todo]);
  }

  function deleteTodo(id){
    setTodoList(todoList.filter((todo)=> todo.id !== id ))
  }

  function toggleTodo(id){
    setTodoList(
      todoList.map((todo)=> todo.id === id ? {...todo, done : !todo.done  } : todo)
    )
  }


  function toggleTodoEdit(id){
    setTodoList(
      todoList.map((todo)=> todo.id === id ? { ...todo,edit: !todo.edit} : todo)
    )
  }

 function editTodo(id, content){
  setTodoList(
  todoList.map((todo)=> todo.id === id ? {...todo,edit : !todo.edit, content} : todo))
 }

 function selectedTodo(id){
  setTodoList(
   todoList.map((todo)=> todo.id === id ? {...todo,selected: !todo.selected  } : {...todo,selected: false}))
 }




  return (
   <div className="d-flex justify-content-center align-items-center p-20">
     <div className="card container mb-20">
     <h1 className="mb-20">Liste des taches</h1>
     <AddTodo addTodo={addTodo} />
     <TodoList 
     toggleTodoEdit={toggleTodoEdit} 
     deleteTodo={deleteTodo} 
     todoList={todoList}
     toggleTodo={toggleTodo}
     editTodo={editTodo}
     selectedTodo={selectedTodo}
     />
      </div>
   </div>


  );
}

export default App;
