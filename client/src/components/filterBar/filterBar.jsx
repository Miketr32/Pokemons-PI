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
    const [filterBar, setFilterBar] = useState(false);                     // 
    
    const orderByType = (e) => {                                        // Filtrado por tipo
        setTypeOrder(e.target.value)
        if(e.target.value !== 'clearTypes'){ 
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
        dispatch(filterAlph(e.target.value));  
    };

    const orderByForce = (e) => {                                     // Filtrado por orden de fuerza
        setSortForce(e.target.value);
        dispatch(filterForce(e.target.value))
    };
    
    useEffect(() => {
        dispatch(getPokemonsTypes());
    }, []);

    if(!filterBar){
        return (
            <nav>
                <div className="centerBar background">
                        <button className="Create" onClick={() => setFilterBar(true)}>Filtros</button>
                    <Link to='/addPokemon'>
                        <button className="Filter">Crea tu propio Pokemon</button>{/* Al hacer click en este boton las option seran visibles */}
                    </Link>
                </div>
            </nav>
        )} 
    else {
    return (
        <nav>
            <div className="centerBar background">
                    <button className="Create" onClick={() => setFilterBar(false)}>Ocultar</button>
                <Link to='/addPokemon'>
                    <button className="Filter">Crea tu propio Pokemon</button>{/* Al hacer click en este boton las option seran visibles */}
                </Link>
            </div>
                <div className="filterBar background">
                <select 
                className='select' 
                value={typeOrder} 
                onChange={orderByType}>
                    <option 
                    name='types' 
                    value="clearTypes">Filtrar por tipo:</option>
                    {allTypes && allTypes.map( m =>
                        <option name={m.name} key={m.id} >{m.name}</option>
                    )}
                </select>
                <select 
                className='select' 
                value={originOrder} 
                onChange={orderByOrigin}>
                    <option value='clearOrigin'>Filtrar por origen:</option>
                    <option value='false'>Api</option>
                    <option value='true'>Base de datos</option>
                </select>
                <select 
                className='select' 
                value={sortOrder} 
                onChange={orderByAlph}>
                    <option value='clearAlp'>Filtrar por Ord.Alf:</option>
                    <option value='Asc'>A - Z</option>
                    <option value='Desc'>Z - A</option>
                </select>
                <select 
                className='select' 
                value={sortForce} 
                onChange={orderByForce}>
                    <option value="clearAt">Filtrar por nivel de ataque:</option>
                    <option value='forceAsc'>Mayor(+)</option>
                    <option value='forceDesc'>Menor(-)</option>
                </select>
                </div>
        </nav>
    )}
};


