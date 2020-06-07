class List {
  constructor(listItemJSON) {
    this.id = listItemJSON.id
    this.body = listItemJSON.body
  }

  renderLi() {
    return `<li>${this.body}</li>`
  }
}