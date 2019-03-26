class userInterface {
    constructor(token) {
        this.token = token; 
    }

    loadCategories () {
        const categoriesList = document.querySelector('#listado-categorias');
        const categories = requestApi.requestCategories(this.token)
            .then(response => {
                response.forEach((item) => {
                    const option = document.createElement('option');
                    option.value = item.id;
                    option.innerHTML = item.name;
                    categoriesList.appendChild(option)
                })
            })
    }

    loadEvents (event, category) {
        const events= requestApi.requestEvents(event.value, category.value)
            .then(response => {
                console.log(response)
            })
    }

}

