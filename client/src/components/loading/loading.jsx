import React from "react";
import LandingGif1 from '../../Images/LandingGIf1.gif'
import '../loading/loading.css'

export default function Loading() {
    return(
        <div>
        <div className="loading">
            <img src={LandingGif1} alt='img-loading'></img>
            <h1>Cargando ...</h1>
        </div>
        </div>
    )
};