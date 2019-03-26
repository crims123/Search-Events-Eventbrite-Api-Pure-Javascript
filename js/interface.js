class userInterface {
    constructor(token) {
        this.token = token; 
   }

   loadCategories () {
    const categoriesList = document.querySelector('#listado-categorias');
    const url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=en_EN`;
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        json.categories.forEach((item) => {
            const option = document.createElement('option');
            option.value = item.id;
            option.innerHTML = item.name;
            categoriesList.appendChild(option)
        })
    })
   }
     
}

