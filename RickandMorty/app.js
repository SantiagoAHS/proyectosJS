const URL = 'https://rickandmortyapi.com/api';
const containerChar = document.querySelector('.characters');
const pagination = document.querySelector('.pagination');

function createPage(){
  let buttons = ``;
  for(let i = 1; i<=42; i++){
    buttons += `
    <li class="page-item">
    <a class="page-link" href="#" data-id="${i}">${i}</a>
    </li>
    `
  }
  pagination.innerHTML = buttons;
}

//const page = prompt('Cual página? ')
createPage();

function getCharacter(page=1){
fetch(`${ URL }/character/?page=${page}`)
.then(Response => Response.json())
.then(data => {
    console.log(data.info);
    const characters = data.results;
    /*characters.forEach(character => {
        const p = document.createElement('p');
        p.innerHTML = character.name;
        containerChar.appendChild(p);
    })*/
    showCharacters(characters);
})
}

getCharacter();



/*
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
*/
function createCard(character){
    const card = document.createElement('div');
    card.classList.add('card', 'mt-3', 'bg-secondary-subtitle');
    card.style.width = '18rem';
    const htmlCard = `
    <img src="${ character.image }" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${ character.name }</h5>
      <p class="card-text">${ character.status }</p>
      <p class="card-text">${ character.origin.name }</p>
      <a href="#" class="btn btn-success" data-id="${ character.id }">  Ver mas</a>
      </div>
      `
      card.innerHTML = htmlCard;
      return card;
    
}
function showCharacters(characters){
    containerChar.innerHTML = '';
    characters.forEach(character => {
        containerChar.appendChild(createCard(character));
    });
}

function getButton(e){
  e.preventDefault();
  if(e.target.classList.contains('page-link')){
    id = e.target.getAttribute('data-id');
    getCharacter(id);
  }
}
pagination.addEventListener('click', getButton);