import { useState } from "react";
import { useTodoDispatcher } from "../context/TodoContext";

import Button from "./Button";







export default function AddTodo() {
    const [value, setValue] = useState('')
    const dispatch = useTodoDispatcher();
 
   function handleChange(e){
    const inputValue = e.target.value;
    setValue(inputValue);
   }


   function handleKeyDown(e){
    if(e.key === "Enter" && value.length){
      dispatch({
        type:"ADD_TODO",
        content:value
      })
      setValue('')
     }
  }


  function handleClick(){
    if(value.length){
      dispatch({
        type:"ADD_TODO",
        content:value
      })
      setValue('')
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center">
     <input type='text' onChange={handleChange} onKeyDown={handleKeyDown} value={value} className="flex-fill" placeholder="Ajouter une tache"/>
     <Button text="ajouter" onClick={handleClick} />
    </div>






  )






  }