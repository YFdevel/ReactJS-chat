export const CHANGE_NAME = "PROFILE::CHANGE_NAME";
export const CHANGE_LAST_NAME = "PROFILE::CHANGE_LAST_NAME";
export const CHANGE_AGE = "PROFILE::CHANGE_AGE";
export const CHANGED_DATA_MESSAGE = "PROFILE::CHANGED_DATA_MESSAGE";
export const SHOW_FIELD_NAME = "PROFILE::SHOW_FIELD_NAME";

export const changeName = (name) => {
    return {
        type: CHANGE_NAME,
        payload: {
            name
        }

    }

}
export const changeLastName = (lastName) => {
    return {
        type: CHANGE_LAST_NAME,
        payload: {
            lastName
        }

    }

}
export const changeAge = (age) => {
    return {
        type: CHANGE_AGE,
        payload: {
            age
        }

    }

}
export const showChangeDataMessage = () => {

    return {
        type: CHANGED_DATA_MESSAGE,


    }

}
export const showFieldName = () => {

    return {
        type: SHOW_FIELD_NAME,


    }

}