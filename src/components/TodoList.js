import TodoItem from "./TodoItem";
import EditTodo from './EditTodo';




export default function TodoList({todoList, deleteTodo,toggleTodoEdit,toggleTodo,editTodo,selectedTodo}){

return todoList.length ? (
    <ul>
     {todoList.map((todo) =>
        todo.edit ? (
          <EditTodo
           key={todo.id} 
          editTodo={(content)=>editTodo(todo.id, content)}
          cancelEditTodo={() => toggleTodoEdit(todo.id)}
          todo={todo} />
        ) : (
          
            <TodoItem key={todo.id} 
            todo={todo} 
            deleteTodo={()=>deleteTodo(todo.id)} 
            editTodo={() => toggleTodoEdit(todo.id)}
            toggleTodo ={()=>toggleTodo(todo.id)}
            selectedTodo = {()=>selectedTodo(todo.id)}
            />
            ))}

   </ul> 
) :
(
  <p>Aucune tache en cours</p>
)
}



   
   



