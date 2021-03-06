
import {db} from "../../App";


export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const DELETE_MESSAGE = 'MESSAGES::DELETE_MESSAGE';
export const INITIAL_DOWNLOAD_MESSAGES = 'MESSAGES::INITIAL_DOWNLOAD_MESSAGES';



export const addMessage = (chatId, message) => {
    return {
        type: ADD_MESSAGE,
        payload: {
            chatId,
            message
        }
    }

}
export const initialDownloadMessages = (chatId,messages) => {

    return {
        type: INITIAL_DOWNLOAD_MESSAGES,
        payload: {
            chatId,
            messages
        }
    }
}
export const preloadMessages = (chat) => (dispatch) => {
    let messages = []
    const chatId = chat

    db.ref("messages").child(`${chat}`).get().then(
        (snapshot) => {

            snapshot.forEach((snap) => {
                    messages.push(snap.val());
                }
            )
            if(messages.length!==0){
                dispatch(initialDownloadMessages(chatId,messages))}
        }
    ).catch(error=>error.message)
}



export const deleteMessage = (chatId) => ({
    type: DELETE_MESSAGE,
    payload: {
        chatId
    }

});

export const addMessageWithThunk = ((chatId, message, authorMe, authorBot) => (dispatch) => {

        const mes = db.ref("messages");
        mes.child(chatId).push({
            id: `${chatId}-${new Date().getMilliseconds()}`,
            text: message, author: authorMe, date: `Время: ${new Date().toLocaleString()}`
        });



        const botMessage = `Привет, ${authorMe}`;
        const timer = setTimeout(() => {
                mes.child(chatId).push({
                    id: `${chatId}-${new Date().getMilliseconds()}`,
                    text: botMessage, author: authorBot, date: `Время: ${new Date().toLocaleString()}`
                });
                dispatch(onSubscribeChangeUser(chatId))
                clearTimeout(timer)
            },
            2000);

    }

);

export const onSubscribeChangeUser = (chatId) => (dispatch) => {
const chat=chatId;

    const messages = db.ref("messages");


    messages.child(`${chat}`).once("child_added", (snapshot) => {
         dispatch(addMessage(chat, snapshot.val()))
    }).catch((error)=> error.message)

}

