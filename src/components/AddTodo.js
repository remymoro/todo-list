import { useState } from "react";
import Button from "./Button";







export default function AddTodo({addTodo}) {
    const [value, setValue] = useState('')
 
   function handleChange(e){
    const inputValue = e.target.value;
    setValue(inputValue);
   }


   function handleKeyDown(e){
    if(e.key === "Enter" && value.length){
      addTodo(value)
      setValue('')
     }
  }


  function handleClick(){
    if(value.length){
      addTodo(value)
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