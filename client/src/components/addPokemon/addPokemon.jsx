import React, {useEffect, useState} from 'react';
import { addPokemons, getPokemonsTypes } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import validator from './validator';
import NavBar from '../navBar/navBar.jsx';
import './addPokemon.css';

export default function NewPokemon() {
    let dispatch = useDispatch();
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
    }, [dispatch]) 

    const handleInputChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value});
        setErrors(validator({...input, [e.target.name]: e.target.value})); 
    }

    const handleSubmit = (e) => { 
        e.preventDefault();
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

        return(
            <div>
            <NavBar />
            <div className='form-container'>
            <h2>Crea tu propio Pokemon</h2>
            <form className='create-pokemon'>
                <div className='pokemon-params'>
                    <p>Nombre:</p>
                    <input 
                    type="text" 
                    placeholder='Ingresa un nombre...' 
                    name='name' 
                    value={input.name} 
                    onChange={handleInputChange} >
                    </input>
                </div>
                {errors.name && (
                    <p>{errors.name}</p>
                    )}
                <div className='pokemon-params'>
                    <p>Ataque:</p>
                    <input 
                    type="number" 
                    placeholder='Nivel de ataque...' 
                    name='attack' 
                    max='350' 
                    value={input.attack} 
                    onChange={handleInputChange} >
                    </input>
                </div>
                {errors.attack && (
                    <p>{errors.attack}</p>
                    )}
                <div className='pokemon-params'>
                    <p>Defensa:</p>
                    <input 
                    type="number" 
                    placeholder='Nivel de defensa...' 
                    name='defense' 
                    max='350' 
                    value={input.defense} 
                    onChange={handleInputChange} >
                    </input>
                </div>
                {errors.defense && (
                    <p>{errors.defense}</p>
                    )}
                <div className='pokemon-params'>
                    <p>Velocidad:</p>
                    <input 
                    type="number" 
                    placeholder='Nivel de velocidad' 
                    name='speed' 
                    max='350' 
                    value={input.speed} 
                    onChange={handleInputChange} >
                    </input>
                </div>
                {errors.speed && (
                    <p>{errors.speed}</p>
                    )}
                <div className='pokemon-params'>
                    <p>Salud:</p>
                    <input 
                    type="number" 
                    placeholder='Nivel de vida...' 
                    name='health' 
                    max='350' 
                    value={input.health} 
                    onChange={handleInputChange} >
                    </input>
                </div>
                {errors.health && (
                    <p>{errors.health}</p>
                    )}
                <div className='pokemon-params'>
                    <p>Altura:</p>
                    <input 
                    type="number" 
                    placeholder='Ingresa la altura...' 
                    name='height' 
                    max='350' 
                    value={input.height} 
                    onChange={handleInputChange} >
                    </input>
                </div>
                {errors.height && (
                    <p>{errors.height}</p>
                    )}
                <div className='pokemon-params'>
                    <p>Peso:</p>
                    <input 
                    type="number" 
                    placeholder='Ingresa el peso...' 
                    name='weight' 
                    max='350' 
                    value={input.weight} 
                    onChange={handleInputChange} >
                    </input>
                </div>
                {errors.weight && (
                    <p>{errors.weight}</p>
                    )}
                <div className='pokemon-types'>
                    <p>Tipos:</p>
                    <div className='option-types'>
                        <select 
                        value={input.type1} 
                        name='type1' 
                        onChange={handleInputChange} >
                            <option value='Primer tipo'>Primer tipo</option>
                            {
                                pokeTypes.map( x => 
                                    <option value={x.id} key={x.id}>{x.name}</option>
                                )
                            }
                        </select>
                    </div>
                    <div className='option-types'>
                        <select 
                        value={input.type2} 
                        name='type2' 
                        onChange={handleInputChange} >
                            <option value='Segundo tipo'>Segundo tipo</option>
                            {
                                pokeTypes.map( y => 
                                    <option value={y.id} key={y.id}>{y.name}</option>
                                )
                            }
                        </select>
                    </div>
                </div>
                <div className='pokemon-image'>
                    <input 
                    type='text' 
                    name='image' 
                    value={input.image} 
                    onChange={handleInputChange} >
                    </input>
                    <p className='pokemon-image-description'>Aqui puedes ingresar una imagen en formatos compatibles (.jpg, .svg, .jpeg, etc) tanto desde una URL como desde tu dispositivo.</p>
                </div>
                <button className='submit-pokemon' onClick={handleSubmit}>Crear Pokemon</button>
            </form>
            </div>

           

            </div>
        )
};

/* 
Ejemplo de mensaje de Pokemon Created 

 {Object.keys(errors).length !== 0 ? (
              <button
                disabled="true"
                className={style.btnError}
                onClick={finishedForm}
              >
                <p>Complete the form</p>
              </button>
            ) : (
              <button className={style.btn} onClick={finishedForm}>
                Create
              </button>
            )}
            {isCreated && <Modal />}





*/
