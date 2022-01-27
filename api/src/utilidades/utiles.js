const axios = require ('axios');
const { Pokemon , Types } = require('../db');

//   Funcion que trae los datos de los Pokemones  // 

async function PokemonData() {
    const poke20 = await axios.get('https://pokeapi.co/api/v2/pokemon'); // Traigo los primeros 20 Pokemones
    const poke40 = await axios.get(poke20.data.next);                    // Traigo 20 Pokemones mas
    const allData = [...poke20.data.results, ...poke40.data.results];
    const dataUrl = allData.map(async (d) => {
        let data2 = await axios.get(d.url);
        return data2.data;
    });
    let pokeData = await Promise.all(dataUrl);
    return pokeData;   
}

//   Funcion que trae los tipos de Pokemones  // 

async function PokemonTypes() {
    const type = await axios.get("https://pokeapi.co/api/v2/type");
    const allDataType = type.data.results;
    const urlType = allDataType.map(async (t) => {
        let type2 = await axios.get(t.url);
        return type2.data;
    });
    let pokeType = await Promise.all(urlType);
    return pokeType;       
}

//  Funcion que crea Pokemones nuevos  // 

var idUnico = 40;

async function PokemonCreator(req, res) { 
    const { name , image , type1 , type2 , health , attack , defense , speed , height , weight} = req.body;
    if(typeof name === 'number' || height > 1000) {
        return res.status(404).send('Alguno de los datos no son correctos, por favor verifica los ingresos');
        }
    try {
        let nameCorrection = name.toLowerCase();
        let newPokemon = {
        name: nameCorrection,
        id: ++idUnico,
        image: image,
        health: health,
        attack:attack,
        defense: defense,
        speed: speed,
        height: height,
        weight: weight
        };
    let creacion = await Pokemon.create(newPokemon);
    let foundType1 = await Types.findAll({where: {name: type1}});    
    await creacion.addTypes(foundType1, {through: "pokemon_types"});
    if(type2){
        let foundType2 = await Types.findAll({where: {name: type2}});
        await creacion.addTypes(foundType2, {through: "pokemon_types"});
    }
    res.status(200).send("Nuevo Pokemon creado exitosamente");
    }
    catch (error) {
        res.status(404).send(`Hubo un error = ${error} por favor verifica los datos`);
    }
}

//  Funcion que agrega los tipos a la base de datos  //

async function PokemonAddTypes(){
    const dataBaseTypes = await Types.findAll();
    if (dataBaseTypes.length > 0 ) {
        return dataBaseTypes;
    }
    const types = await PokemonTypes();
    let newType = types.map( async (d, index) => {
        let nuevoTipo = {
            id : index + 1,
            name : d.name
        }
        let nuevoIngreso = await Types.create(nuevoTipo);
        return nuevoIngreso;
    }); 
    const allTypes = await Promise.all(newType);
    return allTypes;
}


module.exports = {
    PokemonData,
    PokemonTypes,
    PokemonCreator,
    PokemonAddTypes
}