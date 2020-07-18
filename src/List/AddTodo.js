import React, {useState} from "react";

function AddTodo({Add}) {
    const [value,setValue] = useState('')
    function btnHandler(event) {
        event.preventDefault()
        if (value.trim()){
            Add(value)
            setValue('')
        }

    }
    return(
        <form className="f" onSubmit={btnHandler}>
            <input value={value} onChange={event => setValue(event.target.value)} className="inp"/>
            <button type="submit" className="btn">Add todo</button>
        </form>
    )
}

export default AddTodo