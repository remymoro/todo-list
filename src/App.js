import { useReducer } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import themeContext from "./context/theme";
import { todoStateContext } from "./context/todoContext";
import { todoDispatcherContext } from "./context/todoContext";
import todoReducer from "./reducers/todoReducer";



function App() {
    
    const [state , dispatch] = useReducer(todoReducer,{
      theme:'primary',
      todoList:[],
    })
  

  


  





 function handleChange(e){
   dispatch({
    type:"SET_THEME",
     theme:e.target.value
   })   

 }



  return (
    <todoStateContext.Provider value={state}>
    <todoDispatcherContext.Provider value={dispatch}>

    <themeContext.Provider value={state.theme} >
   <div className="d-flex justify-content-center align-items-center p-20">
     <div className="card container mb-20">
     <h1 className="mb-20 d-flex flex-row justify-content-center align-items-center">
       <span className="flex-fill"> Liste des taches</span>
             <select value={state.theme} onChange={handleChange}>
              <option value="primary">Rouge</option>
              <option value="secondary">Bleu</option>
              </select>
      </h1>

     <AddTodo  />
     <TodoList />
      </div>
   </div>
   </themeContext.Provider>


  
    </todoDispatcherContext.Provider>

    </todoStateContext.Provider>
   

  );
}

export default App;
