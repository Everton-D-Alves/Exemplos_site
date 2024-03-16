import React from "react";
import Audio from "../assets/audio/Agnus_Day.mp3";
export default function Sobre(){
    return(
        <div>
            <h2>Sobre áudio:</h2>
            <p>
                <audio controls>
                    <source src = { Audio } type = "audio/mp3" />
                    Seu navegador não suporta esse áudio.
                </audio>
            </p>
        </div>
    )
}