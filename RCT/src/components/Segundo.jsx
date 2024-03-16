import React from "react";
import { Link } from "react-router-dom";
const Segundo = _=>{
    return(
        <aside className = "menu">
            <nav>
                <ul>
                    <li>
                        <Link to = "/">Inicio</Link>
                    </li>
                    <li>
                        <Link to = "/parametro/Clique no poster para iniciar o vídeo!">Parâmetro #1</Link>
                    </li>
                    <li>
                        <Link to = "/parametro/Muito bom!">Parâmetro #2</Link>
                    </li>
                    <li>
                        <Link to = "/sobre">Sobre</Link>
                    </li>
                    <li>
                        <Link to = "/estado">Estado</Link>
                    </li>
                    <li>
                        <Link to = "/colateral">Efeito Colateral</Link>
                    </li>
                    <li>
                        <Link to = "/ref">Referência</Link>
                    </li>
                    <li>
                        <Link to = "/cb">Callback</Link>
                    </li>
                    <li>
                        <Link to = "/calc">Calculadora</Link>
                    </li>
                    <li>
                        <Link to = "/horas">Horas</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}; 
export default Segundo;