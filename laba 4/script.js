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

title = await check(animeID + 100);
const name2 = document.getElementById('name2');
name2.innerText = title.data.title_english

const year2 = document.getElementById('year2');
year2.innerText = title.data.aired.string

const score2 = document.getElementById('score2');
score2.innerText = title.data.score

const ID2 = document.getElementById('ID2');
ID2.innerText = animeID
}