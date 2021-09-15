import React from 'react'

function TodoItem ({todo,index}){
const styles ={
    li:{
        display: 'flex',
        justifyContent:'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius:'24px',
        margin: '.5rem auto',
        maxWidth:'50%',
        
    }
}
    return (
        <li style={styles.li}>
        <span>
            {index+1})
            &nbsp;
            {todo.title}
        </span>
        </li>
    )
    }
export default TodoItem