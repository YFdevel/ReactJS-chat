import {ADD_CHAT, DELETE_CHAT, INITIAL_LOAD_CHATS} from "../actions/chats";


const initialState = {};

const chatsReducer = (state = initialState, action) => {
    switch (action.type) {


        case ADD_CHAT:
            return {
                ...state,
                chatsList: [...(state.chatsList||[]), action.payload.chat]
            }


        case DELETE_CHAT:

           let arr= state.chatsList.map((item) =>
                Object.values(item).filter((item2) => item2.id !== action.payload.chatId))
            return {
                chatsList: arr.filter(item=>item.length!==0)

}


case
    INITIAL_LOAD_CHATS:
        return {
            ...state,
            chatsList: action.payload.chatsList
        }

default:
    return state
}
}

export default chatsReducer;

