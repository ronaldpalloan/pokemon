const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', async function() {
	const searchInput = document.getElementById('searchInput');
	const pokemon = await fetchPokemon(searchInput.value);

	console.log(pokemon);
	displayPokemon(pokemon);

})

function fetchPokemon(input) {
	return fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
		.then(response => response.json())
		.then(data => data);
}

function displayPokemon(pokemon) {
	// Display Card Pokemon
	const pokemonSection = document.getElementById('pokemonSection');
	pokemonSection.classList.remove('d-none');

	// Update UI
	const pokemonName = document.getElementById('pokemonName');
	const pokemonID = document.getElementById('pokemonID');

	pokemonName.innerText = pokemon.name;
	pokemonID.innerText = `#${pokemon.id}`;

}


