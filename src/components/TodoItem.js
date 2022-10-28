export default function TodoItem({todo,deleteTodo,editTodo,toggleTodo,selectedTodo}) {
    
   return (
   
     <li className={`mb-10 d-flex justify-content-center flex-row align-items-center p-10 
     
     ${todo.selected ? 'selected' : '' }`} >



     <span onClick={selectedTodo} className="flex-fill">{todo.content} {todo.done && '✅'}</span>
     <button className="btn btn-primary m-15" onClick={(e)=>{e.stopPropagation();toggleTodo()}}>Valider</button>
     <button className="btn btn-primary m-15" onClick={(e)=>{e.stopPropagation();editTodo()}}>Modifier</button>
     <button className="btn btn-primary m-15" onClick={(e)=>{e.stopPropagation();deleteTodo()}}>Supprimer</button>
     </li>
      






   )



  }