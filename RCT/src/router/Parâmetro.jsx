import React from "react";
import Poster from "../assets/image/poster1.png";
import Video from "../assets/video/video7.mp4";
import { useParams } from "react-router-dom";
export default function Params(){
    const { id } = useParams();
    return(
        <div>
            <h2>Parâmetro</h2>
            <p>Comentário: { id }</p>
            <p>
                <video poster = { Poster } controls>
                    <source src = { Video } type = "video/mp4" />
                    Seu navegador não suporta esse vídeo.
                </video>
            </p>
        </div>
    )
} 