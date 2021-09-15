import React from 'react'
import TodoItem from './ListItem'
function TodoList(props){
const styles ={
    ul:{
        listStyle: 'none',
    }
}



    return(
        <ul stylele={styles} >
            {props.todo.map((todo,index)=>{
                return <TodoItem
                    todo={todo}
                    key={todo.id}
                    index={index}
                
                    />
                }
            )}
        </ul>
    )
}
  
  
                   
export default TodoList