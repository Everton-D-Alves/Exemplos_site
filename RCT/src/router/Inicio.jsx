import React from "react";
import Imagem from "../assets/image/paisagem3.jpg";
export default function Inicio(){
    return(
        <div>
            <h2>Início</h2>
            <p>Sejam bem-vindos!</p>
            <p><img src = { Imagem } alt = "Paisagem" width = "1280px" height = "720px"/></p>
        </div>
    )
}