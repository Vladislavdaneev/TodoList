import React from 'react'
import TodoItem from './TodoItem'
function TodoList(props){
const styles ={
    ul:{
        listStyle: 'none',
    }
}



    return(
        <ul stylele={styles} >
            {props.todos.map((todos,index)=>{
                return <TodoItem
                    todos={todos}
                    key={todos.id}
                    index={index}
                    
                    />
                }
            )}
        </ul>
    )
}
  
  
                   
export default TodoList