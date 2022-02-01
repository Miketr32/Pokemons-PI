import React from 'react';
import { Link } from 'react-router-dom';
import './pokeCard.css';

export default function PokeCard({ id , name, type , image}) {
    let number = 1;
    return ( 
    <div>
        <div className='pokeCard'>
                <p className='name'>{name}</p>
                <div>
                    <Link to={`/pokemons/${id}`}>
                        <img src={image} alt={name} className='pokeCard-image'/>
                    </Link>
                </div>
                <div className='pokeCard-type'>
                    {type && type.map( t => 
                    <p className='eachType' key={number++}>{t.name}</p>
                    )}
                </div>
            </div>
    </div>
    )
};
