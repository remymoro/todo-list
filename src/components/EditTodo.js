import { useState } from 'react';
import Button from './Button';
import { todoDispatcherContext } from "../context/todoContext";
import { useContext } from "react";










export default function EditTodo({ todo }) {
  const dispatch = useContext(todoDispatcherContext)
  const [value, setValue] = useState(todo.content);

  function handleChange(e) {
    const inputValue = e.target.value;
    setValue(inputValue);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && value.length) {
      dispatch({
        type:"EDIT_TODO",
        id:todo.id,
        content:value
      })
      setValue('')
    }
  }

  function handleClick() {
    if (value.length) {
      dispatch({
        type:"EDIT_TODO",
        id:todo.id,
        content:value
      })
      setValue('')
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center mb-10">
      <input
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={value}
        className="mr-15 flex-fill"
        placeholder="Ajouter une tâche"
      />
      <Button onClick={()=> dispatch({type:'TOGGLE_EDIT_TODO' , id: todo.id})} className="mr-15" text="Annuler"/>
      <Button onClick={handleClick} className=" mr-15" text="valider"/>
    </div>
        
     


  );
}