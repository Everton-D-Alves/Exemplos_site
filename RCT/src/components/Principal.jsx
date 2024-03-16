import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "../router/Inicio";
import Parametro from "../router/Parâmetro";
import Sobre from "../router/Sobre";
import N404 from "../router/N404";
import Estado from "../hooks/useState";
import Colateral from "../hooks/useEffect";
import Ref from "../hooks/useRef";
import Callback from "../hooks/useCb1";
import Calc from "../out/Calculadora";
import Horas from "../out/Horas";
function Principal(){
    return(
        <main className = "conteudo">
            <Routes>
                <Route exact path = "/" element = { <Inicio/> } />
                <Route path = "/parametro/:id" element = { <Parametro/> } />
                <Route path = "/sobre" element = { <Sobre/> } />
                <Route path = "*" element = { <N404/> } />
                <Route path = "/estado" element = { <Estado/> } />
                <Route path = "/colateral" element = { <Colateral/> } />
                <Route path = "/ref" element = { <Ref/> } />
                <Route path = "/cb" element = { <Callback/> } />
                <Route path = "/calc" element = { <Calc/> } />
                <Route path = "/horas" element = { <Horas/> } />
            </Routes>
        </main>
    )
}; 
export default Principal;