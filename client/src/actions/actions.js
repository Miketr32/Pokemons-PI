import axios from 'axios';

export function getPokemons() {
    return async function (dispatch) {
        try {
        let allPokes =  await axios.get(`https://pipokemons.herokuapp.com/pokemons`)
            dispatch({
                type: "GET_POKEMONS",
                payload: allPokes.data
            });}
        catch(error){
            console.log(`Hubo un error de tipo: ${error}`)
        }}};

export function getPokemonsDetails(id) { 
    return async function (dispatch) {
        try {
        let pokeDetail = await axios.get(`https://pipokemons.herokuapp.com/pokemons/${id}`);
            dispatch({
                type: "GET_POKEMONS_DETAILS",
                payload: pokeDetail.data    
            })}
        catch(error){
            dispatch({
                type: "GET_POKEMONS_DETAILS",
                payload:null
            })}
    }};

export function getPokemonsNames(payload) {
    return {
        type: "GET_POKEMONS_NAMES",
        payload: payload
    }};

export function getPokemonsTypes() {
    return async function (dispatch) {
        try{
        const pokeType = await axios.get('https://pipokemons.herokuapp.com/types');
            dispatch({
                type: "GET_POKEMONS_TYPES",
                payload: pokeType.data
            });}
        catch(error){
            console.log(`Hubo un error del tipo: ${error}`)
        }
    }};

export function addPokemons(payload) {  
    return async function (dispatch) {
        try{
            console.log(payload)
            var newPoke = await axios.post('https://pipokemons.herokuapp.com/pokemons', payload);
            dispatch({
                type:"ADD_POKEMONS",
                payload: true     
            });         
            return newPoke;
        }
        catch(error){
            dispatch({
                type:"ADD_POKEMONS",
                payload:false
            })}
    }};

export function pokeByType(payload) {
    return {
        type: "POKE_BY_TYPE",
        payload
    }};

export function pokeByOrigin(payload) {
    return {
        type: "POKE_BY_ORIGIN",
        payload
    }};

export function filterAlph(payload) {
    return {
        type: "FILTER_ALPH",
        payload
    }
};

export function filterForce(payload) {
    return {
        type: "FILTER_FORCE",
        payload
    }
};

export function clear() {
    return {
        type: "CLEAR",
    };
;}

export function clearById(){
    return{
        type: "CLEAR_BY_ID",
    }
}
