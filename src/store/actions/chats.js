
import {db} from "../../App";

export const ADD_CHAT = "CHATS::ADD_CHAT";
export const DELETE_CHAT = "CHATS::DELETE_CHAT";
export const INITIAL_LOAD_CHATS = "CHATS::INITIAL_LOAD_CHATS";



export const initialLoadChats = (chatsList) => {

    return {
        type: INITIAL_LOAD_CHATS,
        payload: {
            chatsList
        }
    }
}



export const addChat = (chat) => {
    return {
        type: ADD_CHAT,
        payload: {
           chat
        }
    }


}
export const deleteChat = (chatId) => {
    return {
        type: DELETE_CHAT,
        payload: {
            chatId
        }

    }
}

export const addChatsWithThunk = ((chatId, name) => (dispatch, getState) => {

        const chat = db.ref("chatList");

        chat.child(chatId).push({
            id: chatId,
            name: name
        });

    }

);
export const preloadChatsWithThunk = () => (dispatch, getState) => {
    const chats = [];
    const chatsDatabase = db.ref("chatList");
    chatsDatabase.get().then(
        (snapshot) => {
            snapshot.forEach((snap) => {
                    chats.push(snap.val());

                }
            )
            dispatch(initialLoadChats(chats))
        }
    )

}

export const onSubscribeToChatsChanges = () => (dispatch, getState) => {

    const chat = db.ref("chatList");


    chat.on("child_added", (snapshot) => {
        dispatch(addChat(snapshot.val()))
    })

}
