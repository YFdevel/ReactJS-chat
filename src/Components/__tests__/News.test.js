import {getAllNews} from "../../store/actions/news";
import {STATUSES} from "../../constants/api";
import newsReducer from "../../store/reducers/news";

it("returns state with status loading after getAllNews action",
    () => {
        const expected = {
                news: [],
                isResponse: STATUSES.IDLE,
                isLoading:true,
                isError:false
        };
        const received = newsReducer(undefined, getAllNews());
        expect(received).toEqual(expected);
    });
