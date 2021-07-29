export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const addMessage = (chatId, message,author) => ({
        type: ADD_MESSAGE,
        payload:{

                chatId: chatId,
                text:message,
                author:author
        }

});
