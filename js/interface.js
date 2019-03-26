class userInterface {
    constructor(token) {
        this.token = token; 
    }

    loadCategories () {
        const categoriesList = document.querySelector('#listado-categorias');
        const categories = requestApi.requestCategories(this.token)
            .then(categories => {
                categories.forEach((category) => {
                    const option = document.createElement('option');
                    option.value = category.id;
                    option.innerHTML = category.name;
                    categoriesList.appendChild(option)
                })
            })
    }

    loadEvents (event, category) {
        const eventResults = document.querySelector('#resultado-eventos');
        if (eventResults.textContent != '') {
            eventResults.innerHTML = '';
        }
        const events= requestApi.requestEvents(event.value, category.value)
            .then(events => {
                events.forEach(event => {
                    eventResults.innerHTML += `
                         <div class="col-md-4 mb-4">
                              <div class="card">
                                   <img class="img-fluid mb-2" src="${event.logo !== null ? event.logo.url : ''}"> 
                                   <div class="card-body">
                                        <div class="card-text">
                                             <h2 class="text-center">${event.name.text}</h2>
                                             <p class="lead text-info">Event Information</p>
                                             <p>${event.description.text.substring(0,280)}...</p>
                                             <span class="badge badge-secondary">Date: ${event.start.local}</span>
                                             <a href="${event.url}" target="_blank" class="btn btn-primary btn-block mt-4">Buy Tickets</a>  
                                        </div>
                                   </div>
     
                              </div>
                         </div>
                    `;
               })
            })
    }

}

