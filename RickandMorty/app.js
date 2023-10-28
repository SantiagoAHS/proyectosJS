import { createCard,createCardModal, createPag} from './ui.js';

const URL = 'https://rickandmortyapi.com/api';
const containerChar = document.querySelector('.characters');
const pagination = document.querySelector('.pagination');
const modalTitle = document.querySelector('.modal-title');
const modalBody = document.querySelector('.modal-body');

const fetchApi = url => fetch(url).then(response => response.json())

pagination.innerHTML = createPag();

function getCharacters(page=1){
  fetchApi(`${ URL }/character/?page=${ page}`)
  .then(data => {
    const characters = data.results;
    showCaracters(characters);
  })
}

function getCharacterById(id){
  fetchApi(`${ URL }/character/${ id }`)
  .then(data => {
    const character = data;
    modalTitle.innerHTML = character.name;
    modalBody.innerHTML = '';
    modalBody.appendChild(createCardModal(character));
  })
}

function showCaracters(characters){
  containerChar.innerHTML = '';
  characters.forEach(character => {
    containerChar.appendChild(createCard(character));
  });
}

function getButton(e){
  e.preventDefault();
  if(e.target.classList.contains('page-link')){
    const id = e.target.getAttribute('data-id');
    getCharacters(id);
  }
}

function getButtonCard(e){
  e.preventDefault();
  if(e.target.classList.contains('btn')){
    const id = e.target.getAttribute('data-id');
    getCharacterById(id);
  }
}

getCharacters();
createPag();
pagination.addEventListener('click', getButton);
containerChar.addEventListener('click', getButtonCard);