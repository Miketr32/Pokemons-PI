import React from "react";
import { Link } from "react-router-dom";
import './landingPage.css'



export default function LandingPage(){
    return (
        <div>
        <h1>Hola</h1>
        <Link to='/home'>
            <button>Hola</button>
        </Link>
        </div>
    )
}