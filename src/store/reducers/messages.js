import {ADD_MESSAGE, INITIAL_DOWNLOAD_MESSAGES} from "../actions/messages";
import {DELETE_MESSAGE} from "../actions/messages";


const initialState = {}
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
        case INITIAL_DOWNLOAD_MESSAGES:

            return {
                ...state,
                [action.payload.chatId]:
                    [action.payload.messages]

            }

        default:
            return state;
    }
};

export default messagesReducer;

