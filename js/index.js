
// Ensure the DOM is always loaded before doing anything
// for re-usability
const BASE_URL = 'http://localhost:3000/characters';

document.addEventListener('DOMContentLoaded', () => {
    getCharacters();
});

// render fetched characters from the json
function renderCharacters(characters) {
    const container = document.querySelector('.characters');

    characters.forEach((character) => {
        console.log(character);
        const characterName =  document.createElement('h1')
        characterName.textContent = character.name;
        characterName.addEventListener('click', ()=>{
            renderCharacters(character)
        })
        container.appendChild(characterName);
});

}
function renderCharacter(character){
    const container=document.querySelector('.character-details');

    const img = document.createElement('img');
    img.src = character.image;
    img

    container.appendChild(img);
}

// fetch all characters from the DOM
function getCharacters() {
    fetch(BASE_URL)
        .then((res) => res.json())
        .then (renderCharacters) 
        .catch((err) => {
                console.error(err); 
        })
        
}
