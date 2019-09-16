let state = {
    profilePage: {
        posts: [
            {id: 1, post: "First post", likesCount: 2},
            {id: 2, post: "Second post", likesCount: 22},
        ]

    },
    messagesPage: {
        dialogs: [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Petr"},
            {id: 3, name: "Aleksey"},
            {id: 4, name: "Fedor"},
        ],
        messages: [
            {id: 1, message: "Hi", likesCount: 12},
            {id: 2, message: "How are you", likesCount: 33},
            {id: 3, message: "Yo", likesCount: 6},
        ]
    }


}

export default state;