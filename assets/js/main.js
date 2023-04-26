
function convertPokemonToLi(pokemon){

    return `
        <li class="pokemon ${pokemon.type}">
            <span class="pokemon-number"> ${pokemon.order}</span>
            <span class="pokemon-name"> ${pokemon.name}</span>

            <div class="pokemon-detail">

                <ol class="pokemon-types">
                    ${pokemon.types.map((type) => `<li class="pokemon-type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}" alt${pokemon.name}>

            </div>
        </li>
    `
}

const pokemonList = document.getElementById("pokemonList")


pokeApi.getPokemons().then((pokemons = []) => {

    // pega a lista de pokemons, converte para uma lista de Li, junta todos eles sem separador e faça concatenar no HTML que tenho
    pokemonList.innerHTML = pokemons.map(convertPokemonToLi).join('')

})



