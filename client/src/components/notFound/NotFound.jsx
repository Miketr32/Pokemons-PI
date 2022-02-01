import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clear } from "../../actions/actions";
import noEncontrado from '../../Images/NotFound.gif'
import '../notFound/NotFound.css'

export default function NotFound(){
    const dispatch = useDispatch()
    const clearAll = () => {
        dispatch(clear())
    };

    return(
        <div>
            <div className="notFound">
                <img src={noEncontrado} alt='not-found'></img>
                <div className="notFound-title">
                <h1>Pokemon no encontrado...</h1>
                </div>
                <Link to={'/home'}>
                    <button className="back" onClick={clearAll}>Volver al inicio</button>
                </Link>
            </div>
        </div>
    )
}