const base_url = 'https://api.jikan.moe/v4/anime/'


async function check(animeID) {
let url = base_url + animeID + '/full';
let response = await fetch(url).then(response => response.json());
return response;
}


async function fullTable(animeID) {
let title = await check(animeID);
const name = document.getElementById('name');
name.innerText = title.data.title_english

const year = document.getElementById('year');
year.innerText = title.data.aired.string

const score = document.getElementById('score');
score.innerText = title.data.score

const ID = document.getElementById('ID');
ID.innerText = animeID
}
