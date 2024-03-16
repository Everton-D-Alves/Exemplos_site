import React, { useState } from "react";
export default function Estado(){
    const [num, mudaNum] = useState(0);
    return(
        <div>
            <h2>Números</h2>
            <p>{num}</p>
            <button onClick = {_=> mudaNum(num + 1)}>+1</button>
            <button onClick = {_=> mudaNum(num - 1)}>-1</button>
        </div>
    )
}