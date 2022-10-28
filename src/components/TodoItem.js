import Button from "./Button";



export default function TodoItem({todo,deleteTodo,editTodo,toggleTodo,selectedTodo}) {
    
   return (
   
     <li className={`mb-10 d-flex justify-content-center flex-row align-items-center p-10 
     
     ${todo.selected ? 'selected' : '' }`} >


     <span onClick={selectedTodo} className="flex-fill">{todo.content} {todo.done && '✅'}</span>
     <Button className=" m-15" onClick={(e)=>{e.stopPropagation();toggleTodo()}} text="valider"/>
     <Button className=" m-15" onClick={(e)=>{e.stopPropagation();editTodo()}} text="modifier"/>
     <Button className=" m-15" onClick={(e)=>{e.stopPropagation();deleteTodo()}}text="supprimer"/>
     </li>
      






   )



  }