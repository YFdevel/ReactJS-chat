import configureStore from "redux-mock-store";
import {shallow} from "enzyme";
import {Provider} from "react-redux";
import FormContainer from "../FormContainer";


const middlewares = [];
const mockStore = configureStore(middlewares);

const initialState = {};
const store = mockStore(initialState);

it("matches snapshot online", () => {
    const component = shallow(<Provider store={store}><FormContainer/></Provider>);
    expect(component).toMatchSnapshot();
})