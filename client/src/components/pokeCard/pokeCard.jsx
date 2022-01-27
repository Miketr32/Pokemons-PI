import React from 'react';
import { Link } from 'react-router-dom';
import './pokeCard.css';

export default function PokeCard({ id , name, type , image}) {
    let number = 1;
    return ( 
        <div>
            <div className='pokeCard'>
                <p className='name' >{name}</p>
                <div className='pokeCard-image'>
                    <Link to={`/pokemons/${id}`}>
                        <img src={image} alt={name}/>
                    </Link>
                </div>
                <div className='pokeCard-type'>
                    {type && type.map( t => 
                    <p key={number++}>{t.name}</p>
                    )}
                </div>
            </div>
        </div>
    )
};
