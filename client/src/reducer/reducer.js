const initialState = {
    allPokemons: [],      
    pokemonsDetails: [],  
    pokemonsFilter: [],  
    pokemonsTypes: [],  
    newPokemons: false   
};


export default function rootReducer(state = initialState, action) {
    switch(action.type){

        case "GET_POKEMONS":
            return {
                ...state,
                allPokemons: action.payload,
                pokemonsFilter: action.payload
            };

        case "GET_POKEMONS_DETAILS":
            return {
                ...state,
                pokemonsDetails: action.payload
            };

        case "GET_POKEMONS_NAMES":
            const nameSearched = state.allPokemons.filter((x) => {
                return x.name === action.payload
            });
            if(nameSearched.length !== 0){
            return {
                ...state,
                pokemonsFilter: nameSearched
            };}
            else{
                return {
                    ...state,
                    pokemonsFilter: false
                }
            };

        case "GET_POKEMONS_TYPES":
            return {
                ...state,
                pokemonsTypes: [...action.payload]
            };

        case "ADD_POKEMONS":
            return {
                ...state,
                newPokemons: action.payload,
            };

        case "POKE_BY_TYPE":
            const founded = state.allPokemons.filter(x => {return x.types.some( t => t.name === action.payload)});
            if(founded.length !== 0){
                return {
                    ...state,
                    pokemonsFilter: founded
                };
            }
            else {
                return {
                    ...state,
                    pokemonsFilter: false
                }
            }


        case "POKE_BY_ORIGIN": 
            const origin = state.allPokemons.filter((x) => {return x.created.toString() === action.payload});
            if(origin.length) { 
                return {
                    ...state,
                    pokemonsFilter: origin
                }}
            else{
                return {
                    ...state,
                    pokemonsFilter: false
                }};

        case "FILTER_ALPH":
            let orderAsce = action.payload === 'Asc' ? state.allPokemons.sort((a,b) =>{
                if(a.name > b.name) return 1;
                if(b.name > a.name) return -1;
                return false;
            }): action.payload === 'Desc' ? state.allPokemons.sort((a,b) => {
                if(a.name > b.name) return -1;
                if(b.name > a.name) return 1;
                return false;
            }): state.allPokemons.sort((a,b) => {
                return a.id - b.id
            });
            return {
                ...state,
                pokemonsFilter: orderAsce
            };

        case "FILTER_FORCE":
            let forceAsce = action.payload === 'forceAsc' ? state.allPokemons.sort((a,b) => {
                if(a.attack < b.attack) return 1;
                if(b.attack < a.attack) return -1;
                return 0;
            }): action.payload === 'forceDesc' ? state.allPokemons.sort((a,b) => {
                if(a.attack < b.attack) return -1;
                if(b.attack < a.attack) return 1;
                return 0;
            }): state.allPokemons.sort((a,b) => {
                return a.id - b.id
            });
            return {
                ...state,
                pokemonsFilter:forceAsce
            };

        case "CLEAR":
            return {
            ...state,
            pokemonsFilter: state.allPokemons,
            newPokemons: false,
            };

        case "CLEAR_BY_ID":
            return{
                ...state,
                pokemonsDetails:[]
            }

        default:
            return state;
    }
};

