export const CHANGE_ID = "CHATS::CHANGE_ID";
export const CHANGE_NAME = "CHATS::CHANGE_NAME";
export const ADD_CHAT = "CHATS::ADD_CHAT";
export const DELETE_CHAT = "CHATS::DELETE_CHAT";

export const changeId = (id) => {
    return {
        type: CHANGE_ID,
        payload: {
            id
        }

    }

}
export const changeName = (name) => {
    return {
        type: CHANGE_NAME,
        payload: {
            name
        }

    }

}
export const addChat = (id, name) => {
    return {
        type: ADD_CHAT,
        payload: {
            id,
            name
        }

    }
}
export const deleteChat = (id, name) => {
    return {
        type: DELETE_CHAT,
        payload: {
            id,
            name
        }

    }
}

