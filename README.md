
# Individual Project - Henry Pokemon

<p align="left">
  <img height="150" src="./pokemon.png" />
</p>

## Tabla de contenidos :scroll:
- [Comenzando](#comenzando)
- [Enunciado](#enunciado-dart)
- [Estructura de las carpetas](#estructura-de-las-carpetas-open_file_folder)
- [Tecnologias utilizadas](#tecnologias-utilizadas-package)
- [Frontend](#frontend-world_map)
- [Base de datos](#base-de-datos-performing_arts)
- [Backend](#backend)
- [Testing](#testing)

<br />


## Comenzando

 1. Forkear el repositorio
 2. Clonar el repositorio

Actualmente las versiónes necesarias son:

 * __Node__: 12.18.3 o mayor
 * __NPM__: 6.14.16 o mayor

## Enunciado

La idea general fue crear una aplicación en la cual se puedan ver los distintos Pokemons utilizando la api externa [pokeapi](https://pokeapi.co/) y a partir de ella poder, entre otras cosas:

  - Buscar pokemons
  - Filtrarlos / Ordenarlos
  - Crear nuevos pokemons


## Tecnologías utilizadas:
- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres

## Frontend

__Pagina inicial__: 
- [ ] Imagen de fondo representativa al proyecto
- [ ] Botón para ingresar al home.

__Ruta principal__: 
- [ ] Input de búsqueda para encontrar pokemons por nombre (La búsqueda será exacta, es decir solo encontrará al pokemon si se coloca el nombre completo)
- [ ] Área donde se verá el listado de pokemons. Al iniciar se cargan los primeros resultados obtenidos desde la ruta `GET /pokemons`.
- [ ] Botones/Opciones para filtrar por tipo de pokemon y por pokemon existente o creado por nosotros
- [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente los pokemons por orden alfabético y por fuerza
- [ ] Paginado para ir buscando y mostrando los siguientes pokemons, 12 pokemons por pagina.

__Ruta de detalle de Pokemon__:
- [ ] Campos mostrados en la ruta principal para cada pokemon (imagen, nombre y tipos)
- [ ] Estadísticas (vida, fuerza, defensa, velocidad)
- [ ] Altura y peso

__Ruta de creación__: 
- [ ] Formulario __controlado con JavaScript__ con los campos mencionados en el detalle del Pokemon
- [ ] Posibilidad de seleccionar/agregar más de un tipo de Pokemon
- [ ] Botón/Opción para crear un nuevo Pokemon

## Base de datos
- [ ] Se almacenan los datos con las siguientes propiedades:
  - ID (Número de Pokemon)
  - Nombre
  - Vida
  - Fuerza
  - Defensa
  - Velocidad
  - Altura
  - Peso
- [ ] Tipo con las siguientes propiedades:
  - ID
  - Nombre
  - 
## Backend

- [ ] __GET /pokemons__:
  - Obtiene un listado de los pokemons desde pokeapi.
  - Devuelve solo los datos necesarios para la ruta principal
- [ ] __GET /pokemons/{idPokemon}__:
  - Obtiene el detalle de un pokemon en particular
  - Traer solo los datos pedidos en la ruta de detalle de pokemon
- [ ] __GET /pokemons?name="..."__:
  - Obtiene el pokemon que coincida exactamente con el nombre pasado como query parameter.
  - Si no existe ningún pokemon muestra un mensaje de error.
- [ ] __POST /pokemons__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de pokemons por body
  - Crea un pokemon en la base de datos
- [ ] __GET /types__:
  - Obtiene todos los tipos de pokemons posibles
  - En una primera instancia trae los datos desde pokeapi y los guarda en la base de datos, luego son utilizados desde allí.


## Testing
Para el testing se utilizo Jest.

