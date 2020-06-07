class Lists {
  constructor() {
    this.lists = []
    this.adapter = new ListsAdapter()
    this.initBindingsAndEventListeners()
    this.fetchAndLoadLists()
  }

  initBindingsAndEventListeners() {
    this.listsContainer = document.getElementById('lists-container')
    this.newListItemBody = document.getElementById('new-list-item-body')
    this.listItemForm = document.getElementById('new-list-item-form')
    this.listItemForm.addEventListener('submit', this.createListItem.bind(this))
  }

  createListItem(e) {
    e.preventDefault()
    const value = this.newListItemBody.value

    this.adapter.createListItem(value)
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
    this.listsContainer.innerHTML = this.lists.map(list => list.renderLi()).join('')
  }
}