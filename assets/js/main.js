const pokemonList = document.getElementById("pokemonList")
const loadMoreButton = document.getElementById("loadMoreButton")

const limit = 20
let offset = 0



function loadPokemonItems(offset, limit){

    
    pokeApi.getPokemons(offset,limit).then((pokemons = []) => {

        // pega a lista de pokemons, converte para uma lista de Li, junta todos eles sem separador e faça concatenar no HTML que tem
        const newHtml = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}">
                <span class="pokemon-number"> ${pokemon.id}</span>
                <span class="pokemon-name"> ${pokemon.name}</span>
    
                <div class="pokemon-detail">
    
                    <ol class="pokemon-types">
                        ${pokemon.types.map((type) => `<li class="pokemon-type ${type}">${type}</li>`).join('')}
                    </ol>
    
                    <img src="${pokemon.photo}" alt${pokemon.name}>
    
                </div>
            </li>
        `).join('')

        pokemonList.innerHTML += newHtml
    
    })
}

loadPokemonItems(offset,limit)

loadMoreButton.addEventListener("click", () => {
    offset += limit
    loadPokemonItems(offset,limit)
})



