import React, { useRef } from "react";
export default function Referencia(){
    const referencia = useRef(null);
    function texto(){
        return referencia.current.focus()
    }
    return(
        <div>
            <h2>Referência</h2>
            <p>Clique no botão para ativar a caixa de texto!</p>
            <input type = "text" ref = {referencia} />
            <button onClick = {texto}>Referência</button>
        </div>
    )
}