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
      lists.forEach(list => this.lists.push(new List(list)))
    })
    .then(() => {
      this.render()
    })
  }


  render() {
    const listsArray = this.lists.map(list => `<li>${list.body}</li>`)
    console.log(listsArray)
    const listsContainer = document.getElementById('lists-container')
    //listsContainer.innerHTML = `${}`
  }
}