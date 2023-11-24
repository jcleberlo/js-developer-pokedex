const aboutPokemon = document.getElementById('aboutPokemon')
const backButton = document.getElementById('backButton')

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <h1 class="name">${pokemon.name}</h1>
            <span class="number">#${pokemon.number}</span>
            <div class="firsPart">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
            </div>
            <img src="${pokemon.image}"
                alt="${pokemon.name}">
            <div class="secondPart">
                <h2 class="about">About</h2>
                <div class="characteristics">
                    <ol class="left">
                        <li>Height:</li>
                        <li>Weight:</li>
                        <li>Base experience:</li>
                        <li>Ordem:</li>
                    </ol>
                    <ol class="right">
                        <li>${pokemon.height / 10}m</li>
                        <li>${pokemon.weight / 10}kg</li>
                        <li>${pokemon.base_experience}</li>
                        <li>${pokemon.order}</li>
                    </ol>
                </div>
            </div>
        </li>
    `
}

let params = new URLSearchParams(window.location.search);
let id = params.get('id');

pokeApi.getPokemonDetail({ url: `https://pokeapi.co/api/v2/pokemon/${id}` }).then((pokemon) => {
    const newHtml = convertPokemonToLi(pokemon)
    aboutPokemon.innerHTML += newHtml
})

backButton.addEventListener('click', () => {
    window.history.back()
})
