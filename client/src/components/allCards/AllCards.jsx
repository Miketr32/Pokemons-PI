import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PokeCard from "../pokeCard/pokeCard";
import { getPokemons, getPokemonsTypes } from "../../actions/actions";

export default function AllCards() {
    let dispatch = useDispatch();
    let allPokemon = useSelector((state) => state.pokemonsFilter);

    const [countPoke , setCountPoke ] = useState(1);   // Establezco la cantidad de Pokemones actuales
    // eslint-disable-next-line no-unused-vars
    const [pagePoke , setPagePoke ] = useState(12);   // Establezco la cantidad de Pokemons por pagina


    const lastPoke = countPoke * pagePoke; // 1 * 12 = 12
    const firstPoke = lastPoke - pagePoke; // 12 - 12 = 0
    const pages = Math.ceil(allPokemon.length / lastPoke); // Indicador de la pagina actual

    const pokesFiltered = useSelector((state) => state.pokemonsFilter? state.pokemonsFilter.slice(firstPoke, lastPoke): false); // Almacena la cantidad maxima por pagina

    const back = () => {
        if(countPoke !== 1 ){
            setCountPoke(countPoke -1 );
        }};

    const next = () => {
        if(countPoke !== pages) {
            setCountPoke(countPoke + 1);
        }};

    if(countPoke > pages) {
        back();
    }

    useEffect(() => {
        dispatch(getPokemons());
        dispatch(getPokemonsTypes());
    },[])

    if(!pokesFiltered){ 
        return(
            <div>
                <h1>No se ha encontrado</h1>
            </div>
        )
    }
    else if(pokesFiltered.length){
    return (
        <div>
        <div>
         {pokesFiltered && pokesFiltered.map((p) => (
             <PokeCard 
                name={p.name}
                type={p.type}
                image={p.image}
                health={p.hp}
                attack={p.attack}
                defense={p.defense}
                speed={p.speed}
                id={p.id}
                key={p.id}
             />
         ))}
         </div>
            <div>
                <button onClick={back}>Anterior</button>
                <p>{countPoke} / {pages}</p>
                <button onClick={next}>Proximo</button>
            </div>
        </div>
    )}
    else{
        return (
            <div>
                <h4>Cargando</h4>
            </div>
        )}}

