import React, { useEffect } from 'react';
import { getPokemonsDetails, clearById } from '../../actions/actions';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../navBar/navBar';
import Loading from '../loading/loading';
import './Details.css';


export default function PokemonDetail(){
    let { id } = useParams();
    let dispatch = useDispatch();
    let pokesDetails = useSelector((state) => state.pokemonsDetails);

    useEffect(() => {
        dispatch(getPokemonsDetails(id));
        dispatch(clearById());
    }, []); 
    if(pokesDetails.length !== 0){
        return (
            <div className='detailsBackground'>
            <NavBar />
            <div>
            <div className='cardsDetails'>
                <div>
                <h3 className='pokeName'>{pokesDetails.name}</h3> 
                <img src={pokesDetails.image} alt={pokesDetails.name} className="pokeImage" />
                </div>
                <div className='types'>
                {pokesDetails.types && pokesDetails.types.map(x => <p key={pokesDetails.id}>{x.name}</p>)}
                </div>
                <div className='description'>
                    <div>
                        <h4>{`Salud: ${pokesDetails.health}`}</h4>
                    </div>
                    <div>
                        <h4>{`Ataque: ${pokesDetails.attack}`}</h4>
                    </div>
                    <div>
                        <h4>{`Defensa: ${pokesDetails.defense}`}</h4>
                    </div>
                    <div>
                        <h4>{`Velocidad: ${pokesDetails.speed}`}</h4>
                    </div>
                    <div>
                        <h4>{`Altura: ${pokesDetails.height}`}</h4>
                    </div>
                    <div>
                        <h4>{`Peso: ${pokesDetails.weight}`}</h4>
                    </div>
                </div>
           </div> 
           <div>
                <button className='button-home'>
                    <Link to='/home'>Volver al inicio</Link>
                </button>
                </div>
        </div>
        </div>
        )
    } 
    else if (!pokesDetails.length){
        return(
            <div>
                <NavBar />
                <div>
                    <Loading />
                </div>
            </div>
        )
        }}

