import React from "react";
const LigarProPai = (props)=>{
    console.log("...renderizou!")
    return(
        <div>
            <h2>Componente filho</h2>
            <p>Renderiza apenas 1 vez no console!</p>
            <button onClick = {_=> props.inc(-6)}>-6</button>
            <button onClick = {_=> props.inc(-8)}>-8</button>
            <button onClick = {_=> props.inc(-12)}>-12</button>
        </div>
    )
}; 
export default React.memo(LigarProPai);