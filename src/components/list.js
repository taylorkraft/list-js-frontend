class List {
  constructor(listItemJSON) {
    this.id = listItemJSON.id
    this.body = listItemJSON.body
  }

  renderLi() {
    return `<li data-id=${this.id}>${this.body}</li>`
  }
}