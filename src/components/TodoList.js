import TodoItem from "./TodoItem";
import EditTodo from './EditTodo';
import { useContext } from "react";
import { todoStateContext } from "../context/todoContext";


// todoList={state.todoList}

export default function TodoList(){
 
  const state = useContext(todoStateContext)



return state.todoList.length ? (
    <ul>
     {state.todoList.map((todo) =>
        todo.edit ? (
          <EditTodo
           key={todo.id} 
          
          todo={todo} />
        ) : (
          
            <TodoItem 
            key={todo.id} 
            todo={todo} 
          
            />
            ))}

   </ul> 
) :
(
  <p>Aucune tache en cours</p>
)
}



   
   



