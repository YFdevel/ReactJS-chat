import {render} from '@testing-library/react';
import Profile from "../Profile";
import {shallow} from "enzyme";


describe("Profile tests", () => {

    const myProps = {
        name: "Yuriy",
        age: 42
    }


    it("matches snapshot online", () => {
        const component = render(<Profile/>);
        expect(component).toMatchSnapshot();
    })


    it('has an element', () => {
        const component = shallow(<Profile myProps={myProps} showName={true}/>);
        let node = component.find('.profile-user-name');
        expect(node.length).toEqual(1)

    });

    it('should Profile displays  name when props are passed', () => {
        const component = shallow(<Profile name="Yuriy" showName={true}/>);
        let node = component.find('.profile-user-name');
        expect(node.text()).toContain(myProps.name);

    });
})