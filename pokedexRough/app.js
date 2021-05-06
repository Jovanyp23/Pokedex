// PARALLEL REQUESTS!
async function get3Pokemon(pokedexNum) {
	const prom1 = await axios.get('https://pokeapi.co/api/v2/pokemon/' + pokedexNum);
	//const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
	//const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
	//const results = await Promise.all([ prom1, prom2, prom3 ]);
	printPokemon(prom1);
}
document.body.style.backgroundColor = 'teal';
const test= document.querySelector(".name");
const pic = document.querySelector(".sprite");
const num = document.querySelector(".number");
const btn = document.querySelector(".sub");
const imp = document.querySelector(".inp"); 
const typ = document.querySelector(".tp"); 
let totalTypes="filler";

btn.addEventListener('submit', function(e){
	e.preventDefault();
	//alert("Sub button works");
	get3Pokemon(imp.value)
})

function printPokemon(results) {
	//console.log(results.data.name);
	const capital = results.data.name.charAt(0).toUpperCase() + results.data.name.slice(1);
	//capital = `${ capital + results.data.id}` ; 
	test.innerHTML= capital; 
	num.innerHTML="#" + results.data.id; 
	pic.src =results.data.sprites.front_default;
	console.dir(results);
	console.log(results.data.types[0].type.name);
	totalTypes= results.data.types[0].type.name;
	if(results.data.types[1]){
		console.log(results.data.types[1].type.name);
		totalTypes= totalTypes + "/" + results.data.types[1].type.name;
	}
	typ.innerHTML = totalTypes; 
}

console.dir(test); 
//test.innerHTML= "CHANGED"; 
//get3Pokemon(1);
