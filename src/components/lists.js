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
      return console.log(lists)
    })
    .then(() => {
      this.render()
    })
  }
//once we get lists we call render()

  render() {
    const listsContainer = document.getElementById('lists-container')
    listsContainer.innerHTML = "my lists"
  }
}