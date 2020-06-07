class Lists {
  constructor() {
    this.lists = []
    this.adapter = new ListsAdapter()
    //this.bindEventListeners()
    this.fetchAndLoadLists()
  }

  fetchAndLoadLists() {
    this.adapter
    .getLists()
    .then(lists => {
      lists.forEach(list => this.lists.push(list))
      //as we iterate over that array of objects(lists) we're going 
      //to push that individual object(list) into this.lists = []
      //now we have access to the array of lists in other methods
      //by calling this.notes
    })
    .then(() => {
      this.render()
      //once we get lists we call render()
    })
  }


  render() {
    const listsContainer = document.getElementById('lists-container')
    //grab our div from index.html 
    listsContainer.innerHTML = "my lists"
  }
}