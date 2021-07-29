import {ADD_MESSAGE} from "../actions/messages";

const initialState = {
    messageList: [{id: "anonim", author: "Sergey", text: "Hello from Sergey"},
        {id: "hulk", author: "Tom", text: "Hello from Tom"},
        {id: "digger", author: "Yuriy", text: "Hello from Yuriy"},
        {id: "driver", author: "Jim", text: "Hello from Jim"},
        {id: "chopper", author: "Peter", text: "Hello from Peter"}
    ]

}
const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:

            return {
                ...state, messageList: [...state.messageList,
                    {
                        id: action.payload.chatId,
                        author: action.payload.author,
                        text: action.payload.text

                    }]
            }
        default:
            return state;
    }
};

export default messagesReducer;

