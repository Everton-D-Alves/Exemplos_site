import React from "react";
export default function Botao(props){
    let classes = 'botao '
    classes += props.operador ? 'operador' : '';
    classes += props.duplo ? 'duplo' : '';
    classes += props.triplo ? 'triplo' : '';
    return(
        // Não têm div, para não separar os botões.
        <button onClick = {_=> props.clicar && props.clicar(props.label)}
        className = {classes}>{props.label}</button>
    )
}