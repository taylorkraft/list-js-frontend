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
    this.listsContainer.addEventListener('dblclick', this.handleItemClick.bind(this))
    this.listsContainer.addEventListener('blur', this.updateList.bind(this), true)
    }

  createListItem(e) {
    e.preventDefault()
    const value = this.newListItemBody.value

    this.adapter.createListItem(value).then(list => {
      this.lists.push(new List(list))
      this.newListItemBody.value = ''
      this.render()
    })
  }

  handleItemClick(e) {
    const li = e.target
    li.contentEditable = true
    li.classList.add('editable')
  }

  updateList(e) {
    const li = e.target
    li.contentEditable = false
    li.classList.remove('editable')
    const newValue = li.innerHTML
    const id = li.dataset.id
    this.adapter.updateList(newValue, id)
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