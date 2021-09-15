import React from 'react'
import TodoList from './TodoList/List';
import './App.css'
import AddToDo from './TodoList/AddToDo';
function App() {
  let [todos,setTodos] = React.useState([
    {id:1, completed: false, title: 'Купить хлеб'},
    {id:2, completed: true, title: 'Купить Масло'},
    {id:3, completed: false, title: 'Купить молоко',time:'asdad'},
  ])  
  const styles = {
    fontStyle:'italic'
  }
  function addTodo(title){
    setTodos(todos.concat([{
      title,
      id: Date.now,
      completed:false
    }]))
  }
  return (
    <div className="App">
      <header className="App-header">
          <h1>Ваш список дел</h1>
          <AddToDo onCreate={addTodo}/>
          {todos.length? (<TodoList todo={todos}/>):(<p style={styles}> Здесь пусто, добавим что-нибудь: </p>)}
      </header>
      
    </div>
  )
}

export default App;
