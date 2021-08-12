import React from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {
    changeAgeWithFirebase,
    changeLastNameWithFirebase, changeNameWithFirebase,
    onSubscribeChangeProfileData,
    showChangeDataMessage,
    showFieldName
} from "../store/actions/profile";
import {getProfile} from "../store/selectors/profile";
import Profile from "./Profile";


function ProfileContainer() {
    const {showName, name, lastName, age, changedDataMessage} = useSelector(getProfile, shallowEqual);
    const dispatch = useDispatch();


    const setShowName = () => {
        dispatch(showFieldName());
    }

    const handleChangeData = (event) => {
        event.preventDefault()
         dispatch(onSubscribeChangeProfileData())
        dispatch(showChangeDataMessage())
        event.target.reset()
        setTimeout(() => {
            dispatch(showChangeDataMessage())
        }, 1500)
    }

    const handleChangeName = (e) => {
         dispatch(changeNameWithFirebase(e.target.value));
    }

    const handleChangeLastName = (e) => {
        dispatch(changeLastNameWithFirebase(e.target.value));
    }

    const handleChangeAge = (e) => {
        dispatch(changeAgeWithFirebase(e.target.value));
    }

    return (
        <Profile setShowName={setShowName} showName={showName} lastName={lastName} name={name} age={age}
                 changedDataMessage={changedDataMessage} handleChangeData={handleChangeData}
                 handleChangeName={handleChangeName} handleChangeLastName={handleChangeLastName}
                 handleChangeAge={handleChangeAge}
        />
    );
}

export default ProfileContainer;
