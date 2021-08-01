import {ADD_MESSAGE} from "../actions/messages";
import {DELETE_MESSAGE} from "../actions/messages";

const initialState = {
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

