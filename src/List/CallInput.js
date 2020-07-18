import React, {useState} from "react";

function CallInput({id,Change,callText}) {
    const [value,setValue] = useState('')
    function btnHandler(event) {
        event.preventDefault()
        if (value.trim()){
            Change(id,value);

        }
        callText()
    }
    return(
        <form className="f" onSubmit={btnHandler}>
            <input value={value} onBlur={btnHandler} onChange={event => setValue(event.target.value)} className="inp" autoFocus/>
        </form>
    )
}

export default CallInput