import Button from "./Button";
import { TodoDispatcherContext } from "../context/TodoContext";
import { useContext } from "react";







export default function TodoItem({todo}) {
  const dispatch = useContext(TodoDispatcherContext)
    
   return (
   
     <li className={`mb-10 d-flex justify-content-center flex-row align-items-center p-10 
     
     ${todo.selected ? 'selected' : '' }`} >


     <span onClick={()=> dispatch({type:"SELECTED_TODO",id:todo.id})} className="flex-fill">{todo.content} {todo.done && '✅'}</span>
     <Button className=" m-15" onClick={(e)=>{e.stopPropagation();dispatch({type:"TOGGLE_TODO",id:todo.id})}} text="Valider"/>
     <Button className=" m-15" onClick={(e)=>{e.stopPropagation();dispatch({type:"TOGGLE_EDIT_TODO",id :todo.id})}} text="Modifier"/>
     <Button className=" m-15" onClick={(e)=>{e.stopPropagation(); dispatch({type:"DELETE_TODO",id:todo.id})}}text="Supprimer"/>
     </li>
      






   )



  }