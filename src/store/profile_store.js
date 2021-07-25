import {combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profile";


export const rootReducer = combineReducers({
    profile: profileReducer
});
export const profile_store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
