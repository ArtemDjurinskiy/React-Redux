let rerenderEntireTree = () => {
  console.log('hhhh')
} 
  let store = {
    _state: {
      profilePage: {
        posts: [
          {id: 1, message: 'Hello!', likeCount: '11'},
          {id: 2, message: 'It\'s my first post!', likeCount: '21'},
          {id: 3, message: 'Yo', likeCount: '58'},
          {id: 4, message: 'It', likeCount: '368'}
        ],
        newPostText: 'It-kamasutra'         
      },      
      dialogsPage: {
        dialogs: [
          {id: 1, name: 'Artem'},
          {id: 2, name: 'Lera'},
          {id: 3, name: 'Valera'},
          {id: 4, name: 'Dimich'},
          {id: 5, name: 'Anton'},
          {id: 6, name: 'Kiril'},
          {id: 7, name: 'Pety'},
          {id: 8, name: 'Vany'}
        ],
        messages: [
          {id: 1, message: 'Hi'},
          {id: 2, message: 'How is yor it-kamasutra'},
          {id: 3, message: 'Yo'},
          {id: 4, message: 'Yo'}
        ]
      }
    },
    _callSubsriber()
    {},
    addPost() {
      let newPost = {
        id: 5,
        message: (postMessege),
        likeCount: 0
      }
      this._state.profilePage.posts.push(newPost)
      rerenderEntireTree(this._state)
    }, 
    getState() {
      return this._state
    },
    addMasseg() {
      let newMasseg = {
        id: 5,
        message: (postNewMasseg)
      }
      this._state.dialogsPage.messages.push(newMasseg);
      this._callSubsriber(this._state)
    },
    updateNewPostText(newText) {
      this._state.profilePage.newPostText = newText
      this._callSubsriber(this._state)
    },
    subscribe(observer) {
      this._callSubsriber = observer
    }
    
  }

  window.store = store;

  export default store;