class ListsAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/lists'
  }
  //when ListsAdapter is instantiated it will set baseUrl
  //then we have ability to call getLists and render to json
  getLists() {
    return fetch(this.baseUrl).then(res => res.json()
    )
  }
}
// async getLists() {
//   const res = await fetch(this.baseUrl)
//   return await res.json()
// }