const seachButton = document.querySelector('#buscarBtn');
const event = document.querySelector('#evento');
const category = document.querySelector('#listado-categorias');
const interface = new userInterface('WKMJO6CCBVQVPPJPRDT3');
const requestApi = new request();

document.addEventListener('DOMContentLoaded', loadInitialState);
seachButton.addEventListener('click', handleSearch)

function loadInitialState () {
    interface.loadCategories();
}

function handleSearch (e) {
    e.preventDefault();
    interface.loadEvents(event, category);
}