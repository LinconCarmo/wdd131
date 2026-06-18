const games = [

{
id:1,
title:"The Witcher 3",
genre:"RPG",
rating:9.8,
image:"images/witcher3.jpg"
},

{
id:2,
title:"Elden Ring",
genre:"Action RPG",
rating:9.7,
image:"images/eldenring.jpg"
},

{
id:3,
title:"Minecraft",
genre:"Sandbox",
rating:9.5,
image:"images/minecraft.jpg"
},

{
id:4,
title:"God of War",
genre:"Action",
rating:9.6,
image:"images/gow.jpg"
},

{
id:5,
title:"Cyberpunk 2077",
genre:"RPG",
rating:9.0,
image:"images/cyberpunk.jpg"
}

];

const container =
document.querySelector("#gamesContainer");

const search =
document.querySelector("#search");

function displayGames(list){

if(!container) return;

container.innerHTML = "";

list.forEach(game => {

container.innerHTML += `

<div class="card">

<img
src="${game.image}"
alt="${game.title}"
loading="lazy">

<h3>${game.title}</h3>

<p>Genre: ${game.genre}</p>

<p>Rating: ${game.rating}</p>

<button data-id="${game.id}">
Save Favorite
</button>

</div>
`;

});

attachEvents();

}

function attachEvents(){

const buttons =
document.querySelectorAll("button[data-id]");

buttons.forEach(button => {

button.addEventListener("click", () => {

const id =
Number(button.dataset.id);

const game =
games.find(game => game.id === id);

saveFavorite(game);

});

});

}

function saveFavorite(game){

let favorites =
JSON.parse(
localStorage.getItem("favorites")
) || [];

const exists =
favorites.some(
item => item.id === game.id
);

if(exists){

alert("Game already saved.");

}else{

favorites.push(game);

localStorage.setItem(
"favorites",
JSON.stringify(favorites)
);

alert(`${game.title} saved!`);

}

}

if(search){

search.addEventListener("input", () => {

const filtered =
games.filter(game =>
game.title
.toLowerCase()
.includes(
search.value.toLowerCase()
)
);

displayGames(filtered);

});

}

displayGames(games);
