import React, { useState } from 'react';
import { getPokemonsNames, getPokemons } from '../../actions/actions';
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

    const recharge = () => {
        dispatch(getPokemons())
    }
    return (
        <nav className='navBar'>
            <div>
                <Link to={'/home'}>
                    <img className='logo' src={Logo} alt='logo' onClick={recharge}/>
                </Link>
            </div>
            <form className='search'>
                    <input className='search-input' type='text' placeholder='Ingresa el nombre de un Pokemon' value={pokeName} onChange={handleInputChange}>
                    </input>
                    <button onClick={handleChange} className='button-search'>Buscar</button>
            </form>
        </nav>
    )
};

