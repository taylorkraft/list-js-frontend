class Lists {
  constructor() {
    this.lists = []
    this.adapter = new ListsAdapter()
    //this.bindEventListeners()
    this.fetchAndLoadLists()
  }

  fetchAndLoadLists() {
    this.adapter.getLists().then(lists => {
      console.log(lists)
    })
  }
}