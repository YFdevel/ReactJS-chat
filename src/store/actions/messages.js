export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const DELETE_MESSAGE = 'MESSAGES::DELETE_MESSAGE';
export const addMessage = (chatId, message, author) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId,
        message:
            {
                id: `Время: ${new Date().toLocaleString()}`,
                text: message,
                author: author
            }
    }

});

export const deleteMessage = (chatId) => ({
    type: DELETE_MESSAGE,
    payload: {
      chatId
    }

});
