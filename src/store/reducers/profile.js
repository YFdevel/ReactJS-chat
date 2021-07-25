import {CHANGE_NAME, CHANGE_LAST_NAME, CHANGE_AGE, SHOW_FIELD_NAME, CHANGED_DATA_MESSAGE} from "../actions/profile";


const initialState = {
    name: "Yuriy",
    lastName: "Petrov",
    age: 42,
    showName: false,
    changedDataMessage: false
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_NAME:
            return {
                ...state,
                name: action.payload.name

            }
        case CHANGE_LAST_NAME:
            return {
                ...state,
                lastName: action.payload.lastName

            }

        case CHANGE_AGE:
            return {
                ...state,
                age: action.payload.age

            }

        case SHOW_FIELD_NAME:
            return {
                ...state,
                showName: !state.showName

            }
        case CHANGED_DATA_MESSAGE:
            return {
                ...state,
                changedDataMessage: !state.changedDataMessage

            }
        default:
            return state
    }
}

export default profileReducer;

