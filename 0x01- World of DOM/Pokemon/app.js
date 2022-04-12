// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

/**
 * HIS OWN
 */
// const container = document.querySelector('#container');
// const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


// for (let i = 1; i <= 151; i++) {
//     const pokemon = document.createElement('div');
//     pokemon.classList.add('pokemon');
//     const label = document.createElement('span');
//     label.innerText = `#${i}`;
//     const newImg = document.createElement('img');
//     newImg.src = `${baseURL}${i}.png`


//     pokemon.appendChild(newImg);
//     pokemon.appendChild(label);
//     container.appendChild(pokemon)
// }

/**
 * MY OWN
 */
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for (let i = 1; i <= 150; i++) {
    const pokemon = document.createElement('div');
    const label = document.createElement('span');
    label.innerText = ` pokemon ${i}`;
    const newImg = document.createElement('img');
    newImg.src = `${baseUrl}${i}.png`;
    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    container.appendChild(pokemon);
}
// container.classList.add('pokemon')
