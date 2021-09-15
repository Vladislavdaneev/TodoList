import React, {useState} from 'react'
function AddToDo({onCreate}){
    const [value,setValue] = useState('')
    function submitHandler(event) {
        event.preventDefault()
        if (value.trim()) {
            onCreate(value)
            setValue('')
        }
    }
    return(
        <form onSubmit={submitHandler}>
            <input value={value} onChange={event=>setValue(event.target.value)}></input>
            <button type='submit' style={{cursor:'Pointer'}}>Добавить в список</button>
        </form>
    )
}
export default AddToDo