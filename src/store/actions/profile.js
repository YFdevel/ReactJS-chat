import {db} from "../../App";

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

export const changeNameWithFirebase = (name) => (dispatch, getState) => {
    const profile = db.ref("profile");

    profile.child("currentUser").child("name").set(name).catch((error) =>error.message)

}
export const changeLastName = (lastName) => {
    return {
        type: CHANGE_LAST_NAME,
        payload: {
            lastName
        }

    }

}
export const changeLastNameWithFirebase = (lastName) => (dispatch, getState) => {
    const profile = db.ref("profile");


    profile.child("currentUser").child("lastName").set(lastName).catch((error) =>error.message)

}
export const changeAge = (age) => {
    return {
        type: CHANGE_AGE,
        payload: {
            age
        }

    }

}

export const changeAgeWithFirebase = (age) => (dispatch, getState) => {
    const profile = db.ref("profile");

    profile.child("currentUser").child("age").set(age).catch((error) =>error.message)
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


export const onSubscribeChangeProfileData = () => (dispatch, getState) => {

    const profile = db.ref("profile");


    profile.child("currentUser").once("child_added", (snapshot) => {
        if (snapshot.key === "age") dispatch(changeAge(snapshot.val()))
        if (snapshot.key === "lastName") dispatch(changeLastName(snapshot.val()))
        if (snapshot.key === "name") dispatch(changeName(snapshot.val()))
    }).catch((error) =>error.message)

    profile.child("currentUser").once("child_changed", (snapshot) => {
        if (snapshot.key === "age") dispatch(changeAge(snapshot.val()))
        if (snapshot.key === "lastName") dispatch(changeLastName(snapshot.val()))
        if (snapshot.key === "name") dispatch(changeName(snapshot.val()))
    }).catch((error) =>error.message)
}

