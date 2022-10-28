import TodoItem from "./TodoItem";
import EditTodo from './EditTodo';
import { useContext } from "react";
import { TodoStateContext } from "../context/TodoContext";


// todoList={state.todoList}

export default function TodoList(){
 
  const state = useContext(TodoStateContext)



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



   
   



