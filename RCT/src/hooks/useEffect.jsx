import React, { useState, useEffect } from "react";
export default function Colateral(){
    const [num, MudaNum] = useState(0);
    useEffect(
        function(){
            document.title = `Você clicou ${num} vêz(es)!`
        }, [num]
    )
    return(
        <div>
            <h2>Efeito colateral na aba!</h2>
            <p>{num}</p>
            <button onClick = {_=>MudaNum(num + 1)} >Clique aqui!</button>
        </div>
    )
}