
const offset = 0
const limit = 10

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`


function convertPokemonToLi(pokemon){

    return `
        <li class="pokemon">
            <span class="pokemon-name"> ${pokemon.name}</span>
        </li>
    `
}

const pokemonList = document.getElementById("pokemonList")


pokeApi.getPokemons().then((pokemons = []) => {

    // pega a lista de pokemons, converte para uma lista de Li, junta todos eles sem separador e faça concatenar no HTML que tenho
    pokemonList.innerHTML = pokemons.map(convertPokemonToLi).join('')

})



