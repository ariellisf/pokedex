
const pokeApi = {}


function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.order = pokeDetail.order
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)

    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

// requisitando a url de cada pokemon, para acessar os seus detalhes

pokeApi.getPokemonsDetails = (pokemon) => {
    return fetch(pokemon.url)
        .then((response)=> response.json())
        .then(convertPokeApiDetailToPokemon)
}

// retornar toda a manipulação do fetch

pokeApi.getPokemons = (offset = 0, limit = 10) => {

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

// requisição
return fetch(url)

    // faça alguma coisa => then

    // primeiro then retorna a promise (converte como json)

    // utilizando arrow function "=>" no callback

    .then((response) => response.json())

    .then((jsonBody) => jsonBody.results)

    // mapeando os detalhes dos pokemons

    .then((pokemons) => pokemons.map(pokeApi.getPokemonsDetails))

    // esperando todas as requisiçoes terminarem

    .then((detailsRequest) => Promise.all(detailsRequest))

    .then((pokemonsDetails)=> pokemonsDetails)


    // quando da erro
    .catch((error) => console.log(error))

}