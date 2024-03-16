import React, { useState, useCallback } from "react";
import CB2 from "./useCb2";
const LigarProFilho = _=>{
    const [num, mudaNum] = useState(0);
    const incremento =
    useCallback(delta => mudaNum(atual => atual + delta), [mudaNum])
    return(
        <div>
            <h2>Componente pai.</h2>
            <p>{num}</p>
            <button onClick = {_=> incremento(6)}>+6</button>
            <button onClick = {_=> incremento(8)}>+8</button>
            <button onClick = {_=> incremento(12)}>+12</button>
            <CB2 inc = {incremento}/>
        </div>
    )
}; 
export default LigarProFilho;