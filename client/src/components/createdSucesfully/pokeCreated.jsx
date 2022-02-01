import React from "react";
import { useSelector } from "react-redux";
import '../createdSucesfully/pokeCreated.css';
import pokecreated from '../../Images/pokeCreated1.gif';
import error from '../../Images/error2.gif'


export default function PokeCreated(){
    const created = useSelector((state) => state.newPokemons);

    if(created){
    return (

        <div className="success">
            <img src={pokecreated}></img>
            <h2>Pokemon creado</h2>
        </div>

    )} else{
        return(
                <div className="error">
                    <img src={error}></img>
                    <h2>Algo salio mal!</h2>
                </div>
        )
    }
}