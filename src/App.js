import React from 'react'
import TodoList from './TodoList/TodoList';
import './App.css'
import AddToDo from './TodoList/AddToDo';
import context from './context';
function App() {
  let [todos,setTodos] = React.useState([
   
  ])  
  const styles = {
    fontStyle:'italic'
  }
  function addTodo(title){
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed:false
    }]))
  }
  function removeToDo (id) {
    setTodos(todos.filter(todo=>todo.id!==id))
  }
  
  return (
    <context.Provider value={{removeToDo:removeToDo}}>
    <div className="App">
      <header className="App-header">
          <h1>Ваш список дел</h1>
          <AddToDo onCreate={addTodo}/>
          {todos.length? (<TodoList todos={todos}/>):(<p style={styles}> Здесь пусто, добавим что-нибудь? </p>)}
      </header>
      
    </div>
    </context.Provider>
  )
}

export default App;
