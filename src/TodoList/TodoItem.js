import React, {useContext} from 'react'
import context from '../context'
function TodoItem ({todos,index}){
    const {removeToDo} = useContext(context)
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
            borderColor: 'green',
            
        },
        button:{
            borderRadius: '50px',
            cursor: 'pointer',
            backgroundColor: 'red',
            color: 'white',
        }
    }

        return (
            <li style={styles.li}>
            <span>
                {index+1})
                &nbsp;
                {todos.title}
                &nbsp;
                {todos.index}
            </span>
            <button style={styles.button} onClick={removeToDo.bind(null, todos.id)}>&nbsp;&times;&nbsp;</button>
            </li>
        )
}
export default TodoItem