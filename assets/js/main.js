
const offset = 0
const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10'

// requisição
fetch(url)

    // faça alguma coisa => then

    // primeiro then retorna a promise (converte como json)

    // utilizando arrow function "=>" no callback

    .then((response) => response.json())

    .then((jsonBody) => console.log(jsonBody))

    // quando da erro
    .catch((error) => console.log(error))


