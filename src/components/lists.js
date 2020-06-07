class Lists {
  constructor() {
    this.lists = []
    this.adapter = new ListsAdapter()
    this.initBindingsAndEventListeners()
    this.fetchAndLoadLists()
  }

  initBindingsAndEventListeners() {
    this.listsContainer = document.getElementById('lists-container')
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
    this.listsContainer.innerHTML = this.lists.map(list => `<li>${list.body}</li>`).join('')
  }
}