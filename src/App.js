import { useReducer } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import themeContext from "./context/theme";
import todoReducer from "./reducers/todoReducer";



function App() {
    // le use reducer prends une fonction en paramètre  et un e état initial cette fonction est la seule à changer l"état du reducer 
  //  on recupere l'état du reducer qui retoure un tableau est l'état que l'on va stocker stocker dans le reducer 
    const [state , dispatch] = useReducer(todoReducer,{
      theme:'primary',
      todoList:[],
    })
  

  function addTodo(content) {
    // dispotch est la façon don on va pouvoir invoquer le reducer avec une action qui est unbjet avec un clef type  on donne le nom de l'action exemple "ADD_TODO"
   dispatch({
    // convention pour nommée majuscule
    type:'ADD_TODO',
    content,
    // on lui passe ensuite toute les actions donc on va avoir besoin pour réaliseer cette  action 
   })
  }



  function deleteTodo(id){
    dispatch({
      type:"DELETE_TODO",
      id,
    })
  }

  // a partir du moment ou une action est dispactché automatiquement notre todoReducer est invoque on arrive dans le switch (suite dans todoReducer.js)

  function toggleTodo(id){
    dispatch({
      type:"TOGGLE_TODO",
      id,
    })
  }


  function toggleTodoEdit(id){
    dispatch({
      type:"TOGGLE_EDIT_TODO",
      id,
    })  
  }

 function editTodo(id, content){
   dispatch({
    type:"EDIT_TODO",
    id,
    content
   })
 }

 function selectedTodo(id){
    dispatch({
      type:"SELECTED_TODO",
      id
    })
 }


 function handleChange(e){
   dispatch({
    type:"SET_THEME",
     theme:e.target.value
   })   

 }



  return (
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

     <AddTodo addTodo={addTodo} />
     <TodoList 
     toggleTodoEdit={toggleTodoEdit} 
     deleteTodo={deleteTodo} 
     todoList={state.todoList}
     toggleTodo={toggleTodo}
     editTodo={editTodo}
     selectedTodo={selectedTodo}
     />
      </div>
   </div>
   </themeContext.Provider>

  );
}

export default App;
