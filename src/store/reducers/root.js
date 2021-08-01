import {combineReducers} from "redux";
import profileReducer from "./profile";
import chatsReducer from "./chats";
import messagesReducer from "./messages";

export const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer
});
