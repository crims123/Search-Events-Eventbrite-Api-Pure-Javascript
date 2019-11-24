class request {
  async requestCategories(token) {
    const url = `https://www.eventbriteapi.com/v3/categories/?token=${token}&locale=en_EN`;
    const categoriesResponse = await fetch(url);
    const json = await categoriesResponse.json();
    return json.categories;
  }

  async requestEvents(event, category) {
    let url = `https://www.eventbriteapi.com/v3/events/search/?q=${event}&sort_by=date&categories=${category}&token=WKMJO6CCBVQVPPJPRDT3&locale=es_ES`;
    const eventsResponse = await fetch(url);
    const json = await eventsResponse.json();
    return json.events;
  }
}
