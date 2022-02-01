const { Router } = require('express');
const router = Router();
const axios = require ('axios');
const { Pokemon, Types } = require('../db');
const { PokemonData , PokemonCreator, PokemonAddTypes } = require('../utilidades/utiles');
const { reset } = require('nodemon');

router.get('/pokemons', async (req, res) => { 
    const {name} = req.query;
    if(name) {
        let veamos = name.toLowerCase();
        const datos = await PokemonData();
        const pokeByDataBase = await Pokemon.findOne({where: {name: veamos}, include: { model: Types, through:{attributes:[]},attributes:["name"]}}); 
            if(pokeByDataBase){                                                                                                                      
                let founded = {
                    id: pokeByDataBase.id,
                    name: pokeByDataBase.name,
                    image: pokeByDataBase.image,
                    types: pokeByDataBase.types
                }
                return res.status(200).json(founded);
            }
        else if(datos){
        let filtro = await datos.find( (f) => f.name === veamos);
        if(filtro){
            let founded = {
                id: filtro.id,
                name: filtro.name,
                image: filtro.sprites.other.home.front_default,
                types: filtro.types.map(t => { return { name: t.type.name}}),
                created: false
            };
            return res.status(200).json(founded);
        }
        else{
            return res.status(404).send('No se encontro a este Pokemon');
        }
    }
    }
    const pokeByDataBase = await Pokemon.findAll({include: { model: Types, through:{attributes:[]},attributes:["name"]}}); 
    const datos = await PokemonData();
    let dataFilter = datos.map((d) => {
        let founded = {
            id: d.id,
            name: d.name,
            image: d.sprites.other.home.front_default,
            attack: d.stats[1].base_stat, 
            types: d.types.map(t => {return  {name:t.type.name}}),
            created: false
        };
        return founded;
    });
    const allPokeData = [...dataFilter, ...pokeByDataBase]
    res.status(200).json(allPokeData); 
});

router.get('/pokemons/:idPokemon', async (req, res) => {
    const idPokemon = Number (req.params.idPokemon);
    try{
    if(idPokemon && typeof idPokemon === 'number'){
        const idByDataBase = await Pokemon.findOne({where: {id: idPokemon}, include: { model: Types, through:{attributes:[]},attributes:["name"]}})
        if(idByDataBase){
            return res.status(200).json(idByDataBase);
        } 

        const datos = await PokemonData();
        const pokeById = await datos.find((p) => p.id === idPokemon);
        if(pokeById){
            let founded = {
                name: pokeById.name,
                id: pokeById.id,
                image: pokeById.sprites.other.home.front_default,
                types: pokeById.types.map( t => { return {name: t.type.name}}),
                health: pokeById.stats[0].base_stat,
                attack: pokeById.stats[1].base_stat,
                defense: pokeById.stats[2].base_stat,
                speed: pokeById.stats[5].base_stat,
                height: pokeById.height,
                weight: pokeById.weight,
                created: false
            };
            return res.status(200).json(founded);
        }
        else{
            return res.status(404).send('No se ha encontrado este Pokemon, por favor intenta con otro')
            }
        } else {
            return res.status(404).send('El ID debe ser un numero');
        }
    }
    catch(error) {
        return res.status(404).send(`Hubo un error del tipo = ${error}`);
    }
});

router.post('/pokemons', async (req, res) => {   
    await PokemonCreator(req, res);
});

router.get('/types', async (req, res) => {   
    const pokeTypes = await PokemonAddTypes(req, res);
    return res.status(200).json(pokeTypes);
});

module.exports = router;