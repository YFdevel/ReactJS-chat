import {ADD_MESSAGE} from "../actions/messages";
import {DELETE_MESSAGE} from "../actions/messages";

const initialState = {

    anonim: [{id: "", author: "Sergey", text: "Hello from Sergey"}],
    hulk: [{id: "", author: "Tom", text: "Hello from Tom"}],
    digger: [{id: "", author: "Yuriy", text: "Hello from Yuriy"}],
    driver: [{id: "", author: "Jim", text: "Hello from Jim"}],
    chopper: [{id: "", author: "Peter", text: "Hello from Peter"}]

}
const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:

            return {
                ...state,
                [action.payload.chatId]:
                    [...(state[action.payload.chatId] || []), action.payload.message]
            }
        case DELETE_MESSAGE:
            delete state[action.payload.chatId]
            return {
                ...state

            }

        default:
            return state;
    }
};

export default messagesReducer;

