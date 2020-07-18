import React, {useState} from "react";

function ShowRows({value, age, TextToInput}) {
    return(
        <div className="rows">
        <div onClick={TextToInput}>
            {value}
        </div>
        <div onClick={TextToInput}>
        {age}
        </div>
        </div>
    )
}

export default ShowRows