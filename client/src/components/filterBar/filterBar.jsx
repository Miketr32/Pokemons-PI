import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link} from 'react-router-dom';
import { pokeByType, pokeByOrigin , getPokemonsTypes, filterAlph , filterForce, clear  } from "../../actions/actions";
import './filterBar.css';


export default function FilterBar() {
    const dispatch = useDispatch();
    const allTypes = useSelector ((state) => state.pokemonsTypes);

    const [typeOrder, setTypeOrder] = useState('');
    const [originOrder, setOriginOrder] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const [sortForce, setSortForce] = useState('');

    const orderByType = (e) => {                                        // Filtrado por tipo
        setTypeOrder(e.target.value)
        if(e.target.value !== 'clearTypes' && e.target.value !== null){ 
            dispatch(pokeByType(e.target.value));
        }
        else{
            setTypeOrder("");
            dispatch(clear())
        }
    };
    
    const orderByOrigin = (e) => {                                     // Filtrado por creador
        setOriginOrder(e.target.value)
        if(e.target.value !== 'clearOrigin'){
            dispatch(pokeByOrigin(e.target.value));
        }
        else{
            setOriginOrder("");
            dispatch(clear())
        }
    };

    const orderByAlph = (e) => {                                       // Filtrado alfabetico
        setSortOrder(e.target.value);
        if(e.target.value !== "clearAlp"){
            dispatch(filterAlph(e.target.value));
        }
        else{
            setSortOrder("");
            dispatch(clear());
        }
        
    };

    const orderByForce = (e) => {                                     // Filtrado por orden de fuerza
        setSortForce(e.target.value);
        if(e.target.value !== "clearAt"){
            dispatch(filterForce(e.target.value))
        }
        else{
            return dispatch(clear());
        }
    };
    
    useEffect(() => {
        dispatch(getPokemonsTypes());
    }, [dispatch]);

    return (
        <nav>
            <div>
            <button></button>  {/* Al hacer click en este boton las option seran visibles */}
                <div>
                <select 
                className='select' 
                value={typeOrder} 
                onChange={orderByType}>
                    <option 
                    name='types' 
                    value="clearTypes">Tipo:</option>
                    {allTypes && allTypes.map( m =>
                        <option name={m.name} key={m.id} >{m.name}</option>
                    )}
                </select>
                <select 
                className='select' 
                value={originOrder} 
                onChange={orderByOrigin}>
                    <option value='clearOrigin'>Origen:</option>
                    <option value='false'>Api</option>
                    <option value='true'>Base de datos</option>
                </select>
                <select 
                className='select' 
                value={sortOrder} 
                onChange={orderByAlph}>
                    <option value='clearAlp'>Ord.Alf:</option>
                    <option value='Asc'>A - Z</option>
                    <option value='Desc'>Z - A</option>
                </select>
                <select 
                className='select' 
                value={sortForce} 
                onChange={orderByForce}>
                    <option value="clearAt">Ataque:</option>
                    <option value='forceAsc'>Mayor(+)</option>
                    <option value='forceDesc'>Menor(-)</option>
                </select>
                </div>
            </div>
            <div>
                <Link to='/addPokemon'>
                    <button>Crea tu propio Pokemon</button>
                </Link>
            </div>
        </nav>
    )
};


