import {STATUSES} from "../../constants/api";
import {GET_NEWS_FAILURE, GET_NEWS_LOADING, GET_NEWS_REQUEST, GET_NEWS_SUCCESS} from "../actions/news";

const initialState = {
    news: [],
    isResponse: STATUSES.IDLE,
    isError: false,
    isLoading: true
}


const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NEWS_LOADING:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                isError: false
            };

        case GET_NEWS_REQUEST:
            return {
                ...state,
                isResponse: STATUSES.REQUEST,
                isError: false,
                isLoading: false
            };
        case GET_NEWS_SUCCESS:
            return {
                ...state,
                news: [...action.payload.news],
                isResponse: STATUSES.SUCCESS,
                isError: false,
                isLoading: false
            }


        case GET_NEWS_FAILURE:
            return {
                ...state,
                isResponse: STATUSES.FAILURE,
                isError: action.payload.isError,
                isLoading: false
            };

        default:
            return state;
    }
};
export default newsReducer;
