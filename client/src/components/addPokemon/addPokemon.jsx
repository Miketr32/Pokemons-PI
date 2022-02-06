import React, {useEffect, useState} from 'react';
import { addPokemons, getPokemonsTypes, clear, getPokemons } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import validator from './validator';
import NavBar from '../navBar/navBar.jsx';
import './addPokemon.css';
import PokeCreated from '../createdSucesfully/pokeCreated';

export default function NewPokemon() {
    let dispatch = useDispatch();
    let pokesApi = useSelector((state) => state.allPokemons);
    let pokeTypes = useSelector((state) => state.pokemonsTypes);
    let pokeCreated = useSelector((state) => state.newPokemons);

    const [input , setInput ] = useState({
        name: '',
        image: '',
        health: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        type1:'',
        type2: ''
    });
    const [errors , setErrors ] = useState({name: ''});

    useEffect(() => {
        dispatch(getPokemonsTypes())
        dispatch(getPokemons())
    }, []) 

    const handleInputChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value});
        setErrors(validator({...input, [e.target.name]: e.target.value})); 
    }

    const handleSubmit = (e) => { 
        e.preventDefault();
        let filtro = pokesApi.filter(x => x.name === input.name.toLowerCase())
        if(filtro.length !==0 ){
            setInput({
                name: '',
                image: '',
                health: '',
                attack: '',
                defense: '',
                speed: '',
                height: '',
                weight: '',
                type1: '',
                type2: ''
            });
            return alert("Ya existe un pokemon con este nombre");
        } 
        dispatch(addPokemons(input));
        setInput({
            name: '',
            image: '',
            health: '',
            attack: '',
            defense: '',
            speed: '',
            height: '',
            weight: '',
            type1: '',
            type2: ''
        });
    }

    const pokemonCreated = () => {
        setTimeout(() => dispatch(clear()), 4000)
        };

        return(
            <div>
            <NavBar />
            <div className='form-container'>
            <form className='create-pokemon' onSubmit={handleSubmit}>
            <h2>Crea tu propio Pokemon</h2>
            <div className='form'>
                <div className='pokemon-params'>
                    <p>Nombre:</p>
                    <input 
                    type="text" 
                    placeholder='Ingresa un nombre...' 
                    name='name' 
                    value={input.name} 
                    onChange={handleInputChange}
                    required
                    >
                    </input>
                </div>
                {errors.name && (
                    <div className='errors'>
                    <div id='namee'>{errors.name}</div>
                    </div>
                    )}
                <div className='pokemon-params'>
                    <p>Ataque:</p>
                    <input 
                    type="number" 
                    placeholder='Nivel de ataque...' 
                    name='attack' 
                    max='350' 
                    value={input.attack} 
                    onChange={handleInputChange} 
                    required>
                    </input>
                </div>
                {errors.attack && (
                    <div className='errors'>
                    <div id='attack'>{errors.attack}</div>
                    </div>
                    )}
                <div className='pokemon-params'>
                    <p>Defensa:</p>
                    <input 
                    type="number" 
                    placeholder='Nivel de defensa...' 
                    name='defense' 
                    max='350' 
                    value={input.defense} 
                    onChange={handleInputChange}
                    required >
                    </input>
                </div>
                {errors.defense && (
                    <div className='errors'>
                    <div id='defense'>{errors.defense}</div>
                    </div>
                    )}
                <div className='pokemon-params'>
                    <p>Velocidad:</p>
                    <input 
                    type="number" 
                    placeholder='Nivel de velocidad' 
                    name='speed' 
                    max='350' 
                    value={input.speed} 
                    onChange={handleInputChange}
                    required >
                    </input>
                </div>
                {errors.speed && (
                    <div className='errors'>
                    <div className='speed'>{errors.speed}</div>
                    </div>
                    )}
                <div className='pokemon-params'>
                    <p>Salud:</p>
                    <input 
                    type="number" 
                    placeholder='Nivel de vida...' 
                    name='health' 
                    max='350' 
                    value={input.health} 
                    onChange={handleInputChange} 
                    required>
                    </input>
                </div>
                {errors.health && (
                    <div className='errors'>
                    <div className='health'>{errors.health}</div>
                    </div>
                    )}
                <div className='pokemon-params'>
                    <p>Altura:</p>
                    <input 
                    type="number" 
                    placeholder='Ingresa la altura...' 
                    name='height' 
                    max='350' 
                    value={input.height} 
                    onChange={handleInputChange} 
                    required>
                    </input>
                </div>
                {errors.height && (
                    <div className='errors'>
                    <div className='height'>{errors.height}</div>
                    </div>
                    )}
                <div className='pokemon-params'>
                    <p>Peso:</p>
                    <input 
                    type="number" 
                    placeholder='Ingresa el peso...' 
                    name='weight' 
                    max='350' 
                    value={input.weight} 
                    onChange={handleInputChange} 
                    required>
                    </input>
                </div>
                {errors.weight && (
                    <div className='errors'>
                    <div className='weight'>{errors.weight}</div>
                    </div>
                    )}
                <div className='pokemon-params'>
                    <p>Tipos:</p>
                    <div className='option-types'>
                        <select 
                        className='special-select'
                        value={input.type1} 
                        name='type1' 
                        onChange={handleInputChange} 
                        required>
                            <option value='Primer tipo'>Primer tipo</option>
                            {
                                pokeTypes.map( x => 
                                    <option value={x.name} key={x.id}>{x.name}</option>
                                )
                            }
                        </select>
                        <select 
                        className='special-select'
                        value={input.type2} 
                        name='type2' 
                        onChange={handleInputChange} >
                            <option value='Segundo tipo'>Segundo tipo</option>
                            {
                                pokeTypes.map( y => 
                                    <option value={y.name} key={y.id}>{y.name}</option>
                                )
                            }
                        </select>
                    </div>
                </div>
                <div className='pokemon-params pokemon-image'>
                    <p>Url:</p>
                    <input 
                    type='text' 
                    name='image' 
                    value={input.image} 
                    onChange={handleInputChange} >
                    </input>
                </div>
                {errors.weight && (
                    <div className='errors'>
                    <div className='imageE'>{errors.image}</div>
                    </div>
                    )}
                <div className='square'>
                    {input.image ? (
                        <img
                        src={input.image}
                        alt='imagen'></img>
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>
            {Object.keys(errors).length !==0 ? (
                    <button 
                    disabled='true'
                    onClick={pokemonCreated}
                    className='submit-pokemon-error'>Crear Pokemon</button>
                ) : (
                    <button 
                    className='submit-pokemon'
                    onClick={pokemonCreated}>Crear Pokemon</button>
                )}
                {pokeCreated && <PokeCreated />}
            </form>
            </div>
            </div>
        )
};






