import {ADD_CHAT, CHANGE_ID, CHANGE_NAME, DELETE_CHAT} from "../actions/chats";


const initialState = {
    chatsList: [{id: "anonim", name: "Sergey"},
        {id: "hulk", name: "Tom"},
        {id: "digger", name: "Yuriy"},
        {id: "driver", name: "Jim"},
        {id: "chopper", name: "Peter"}]
};

const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_ID:
            return {
                ...state,
                id: action.payload.id

            }
        case CHANGE_NAME:
            return {
                ...state,
                name: action.payload.name

            }
        case ADD_CHAT:
            return {
                ...state, chatsList: [...state.chatsList,
                    {
                        id: action.payload.id,
                        name: action.payload.name


                    }]
            }
        case DELETE_CHAT:

            return{
           chatsList:state.chatsList.filter((item)=>item.id!==action.payload.id)
            }

        default:
            return state
    }
}

export default chatsReducer;

