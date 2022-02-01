import React from "react";
import { Link } from "react-router-dom";
import './landingPage.css'
import welcome from '../../Images/welcome.png'



export default function LandingPage(){
    return (
        <div className="landing">
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>
        <h1>Bienvenidos</h1>
        <Link to='/home'>
            <button
            className="home-button">
                <span>Ingresar</span>
                <span>Pokemon App</span>
            </button>
        </Link>
        <div>
            <img className="imagen" src={welcome}></img>
        </div>
        </div>
    )
}