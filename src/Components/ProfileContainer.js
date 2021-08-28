import React from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {changeAge, changeLastName, changeName, showChangeDataMessage, showFieldName} from "../store/actions/profile";
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
        dispatch(showChangeDataMessage())
        event.target.reset()
        setTimeout(() => {
            dispatch(showChangeDataMessage())
        }, 1500)
    }

    const handleChangeName = (e) => {
        dispatch(changeName(e.target.value))
    }

    const handleChangeLastName = (e) => {
        dispatch(changeLastName(e.target.value))
    }

    const handleChangeAge = (e) => {
        dispatch(changeAge(e.target.value))
    }

    return (
        <Profile setShowName={setShowName} showName={showName}  lastName={lastName} name={name} age={age}
                 changedDataMessage={changedDataMessage} handleChangeData={handleChangeData}
                 handleChangeName={handleChangeName} handleChangeLastName={handleChangeLastName}
                 handleChangeAge={handleChangeAge}
        />
    );
}

export default ProfileContainer;
