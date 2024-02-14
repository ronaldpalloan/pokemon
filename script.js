fetch('https://pokeapi.co/api/v2/pokemon/6')
	.then(response => response.json())
	.then(data => console.log(data));
