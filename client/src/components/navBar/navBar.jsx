import React, { useState } from 'react';
import { getPokemonsNames } from '../../actions/actions';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './navBar.css';
import Logo from '../../Images/Logo.gif'


export default function NavBar() {
    const dispatch = useDispatch();
    const [pokeName, setPokeName] = useState(''); 

    const handleInputChange = (e) => {  
        setPokeName(e.target.value);
    };
    
    const handleChange = (e) => {
        e.preventDefault();
        if(pokeName){
        dispatch(getPokemonsNames(pokeName));
        setPokeName('') 
        }};

    return (
        <nav className='navBar'>
            <div>
                <Link to={'/home'}>
                    <img id='logo' src={Logo} alt='image-logo'/>
                </Link>
            </div>
            <div className='search'>
                    <input className='search-input' type='text' placeholder='Ingresa el nombre de un Pokemon' value={pokeName} onChange={handleInputChange}>
                    </input>
                    <button onClick={handleChange} className='button-search'>Buscar</button>
            </div>
        </nav>
    )
};

