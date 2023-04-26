
const pokeApi = {}

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


    // quando da erro
    .catch((error) => console.log(error))

}