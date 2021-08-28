import {API_URL_NEWS} from "../../constants/api";

export const GET_NEWS_REQUEST = "NEWS::GET_NEWS_REQUEST";
export const GET_NEWS_SUCCESS = "NEWS::GET_NEWS_SUCCESS";
export const GET_NEWS_FAILURE = "NEWS::GET_NEWS_FAILURE";
export const GET_NEWS_LOADING = "NEWS::GET_NEWS_LOADING";


export const getNewsLoading = (isLoading) => ({
    type: GET_NEWS_LOADING,
    payload:{
      isLoading
    }
});
export const getNewsRequest = () => ({
    type: GET_NEWS_REQUEST,
});
export const getNewsSuccess = (news) => (
    {
        type: GET_NEWS_SUCCESS,
        payload: {
            news: news,

        }

    });

export const getNewsFailure = (isError) => ({
    type: GET_NEWS_FAILURE,
    payload: {
        isError
    },
});

export const getAllNews = () => async (dispatch, getState) => {

    dispatch(getNewsRequest());
     dispatch(getNewsLoading(true));
    try {
        const response = await fetch(API_URL_NEWS);

        if (!response.ok&&response.status!==200)
            throw new Error(`Request failed with status ${response.status}`);

        const result = await response.json();
        dispatch(getNewsSuccess(result));

    } catch (err) {
        console.error(err)
        dispatch(getNewsFailure(err.message));

    }

};

