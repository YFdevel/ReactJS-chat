import {shallow} from "enzyme";
import {Provider} from "react-redux";
import AllChats from "../AllChats";
import configureStore from "redux-mock-store";


const middlewares = [];
const mockStore = configureStore(middlewares);

     const initialState = {};
     const store = mockStore(initialState);


it("matches snapshot online", () => {
    const component = shallow(<Provider store={store}><AllChats /></Provider>);
    expect(component).toMatchSnapshot();
})