const card = document.querySelector('.card');

// Klik Search Button
const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', async function() {
	const searchInput = document.getElementById('searchInput');
	const pokemon = await fetchPokemon(searchInput.value.toLowerCase());

	displayPokemon(pokemon);
})

// Klik Random Button
const randomButton = document.getElementById('randomButton');

randomButton.addEventListener('click', async function() {
	const randomPokemon = Math.floor(Math.random() * 1025);

	const pokemon = await fetchPokemon(randomPokemon);

	displayPokemon(pokemon);
})

// Klik Next Button
const prevButton = document.getElementById('prevButton');

prevButton.addEventListener('click', async function() {
	const pokePrev = document.getElementById('pokemonPrev');
	
})

// Functions
function fetchPokemon(input) {
	return fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
		.then(response => response.json())
		.then(data => data);
}

function displayPokemon(pokemon) {
	// Display Card Pokemon
	const pokemonSection = document.getElementById('pokemonSection');
	const prevNextSection = document.getElementById('prevNext');
	pokemonSection.classList.remove('d-none');
	prevNextSection.classList.remove('d-none');

	// Update UI
	const pokemonName = document.getElementById('pokemonName');
	const pokemonID = document.getElementById('pokemonID');
	const pokemonImage = document.getElementById('pokemonImage');
	const pokemonHP = document.getElementById('pokemonHP');
	const pokemonExp = document.getElementById('pokemonExp');
	const pokemonHeight = document.getElementById('pokemonHeight');
	const pokemonWeight = document.getElementById('pokemonWeight');
	const pokemonType = document.getElementById('pokemonType');
	const pokemonAbility = document.getElementById('pokemonAbility');
	const pokemonAttack = document.getElementById('pokemonAttack');
	const pokemonDefense = document.getElementById('pokemonDefense');
	const pokemonSpattack = document.getElementById('pokemonSpattack');
	const pokemonSpdefense = document.getElementById('pokemonSpdefense');
	const pokemonSpeed = document.getElementById('pokemonSpeed');

	pokemonName.innerText = pokemon.name;
	pokemonID.innerText = `#${pokemon.id}`;
	pokemonImage.setAttribute('src', `${pokemon.sprites.front_default}`);
	pokemonHP.innerText = pokemon.stats[0].base_stat;
	
	pokemonHeight.innerText = pokemon.height;
	pokemonWeight.innerText = pokemon.weight;
	pokemonType.innerText = pokemon.types[0].type.name;
	pokemonAbility.innerText = pokemon.abilities[0].ability.name;
	pokemonAttack.innerText = pokemon.stats[1].base_stat;
	pokemonDefense.innerText = pokemon.stats[2].base_stat;
	pokemonSpattack.innerText = pokemon.stats[3].base_stat;
	pokemonSpdefense.innerText = pokemon.stats[4].base_stat;
	pokemonSpeed.innerText = pokemon.stats[5].base_stat;

	// Validasi Exp
	if (pokemon.base_experience === null) {
		pokemonExp.innerText = '-';
	} else {
		pokemonExp.innerText = pokemon.base_experience;
	}

	// Pengaturan Prev-Next
	const pokemonPrev = document.getElementById('pokemonPrev');
	const pokemonNext = document.getElementById('pokemonNext');

	pokemonPrev.innerText = `#${pokemon.id - 1}`;
	pokemonNext.innerText = `#${pokemon.id + 1}`;
}
