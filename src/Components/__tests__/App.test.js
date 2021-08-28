import {render, screen, waitFor} from '@testing-library/react';
import App from '../../App';
import {ADD_CHAT, addChat} from "../../store/actions/chats";
import configureStore from "redux-mock-store";


const middlewares = [];
const mockStore = configureStore(middlewares);



describe("component App", () => {

    test.skip('renders learn react link', () => {
        render(<App/>);
        const linkElement = screen.getByText(/learn react/i);
        expect(linkElement).toBeInTheDocument();
    });

    it('should dispatch actions', () => {
        const initialState = {};
        const store = mockStore(initialState);

        const chat = "anonim";
        store.dispatch(addChat(chat));

        const actions = store.getActions();

        const expectedPayload = {
            type: ADD_CHAT,
            payload: {
                chat
            }
        }
        expect(actions).toEqual([expectedPayload])

    });



})
