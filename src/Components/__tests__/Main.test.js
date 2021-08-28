import { screen,render} from '@testing-library/react';
import Main from "../Main";


describe("Main tests", () => {
    it("matches snapshot online", () => {
        const component = render(<Main/>);
        expect(component).toMatchSnapshot();
    })

    it("should contain ReactJs", () => {
       render(<Main/>);
        const title=screen.getByText(/reactjs/i)
        expect(title).toBeInTheDocument();
    })
})