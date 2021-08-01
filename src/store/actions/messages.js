
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


export const addMessageWithThunk = ((chatId, message, author) => (dispatch, getState) => {
    dispatch(addMessage(chatId, message, author));
    if (author !== "Бот") {
        const botMessage = `Привет, ${author}`;
        setTimeout(() => dispatch(addMessage(chatId, botMessage, "Бот")), 2000);
    }
}
)

