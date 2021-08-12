import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addMessageWithThunk, onSubscribeChangeUser} from "../store/actions/messages";
import {useStyles} from "../ThemeStyles";
import Form from "./Form";
import {getProfile} from "../store/selectors/profile";


export default function FormContainer(props) {

    const [messageText, setMessageText] = useState();
    const dispatch = useDispatch();
    const {name, lastName} = useSelector(getProfile)
    const classes = useStyles();


    const changeText = (event) => {
        setMessageText(event.target.value)
    }


    const handleOnSubmitForm = (event) => {
        event.preventDefault()
        props.inputTextRef.current?.focus();
        if (props.author && props.params.id) {
            dispatch(addMessageWithThunk(props.params.id, messageText, `${name} ${lastName}`, props.author))
            dispatch(onSubscribeChangeUser(props.params.id))
        }
        event.target.reset()

    }

    return (
        <Form
            handleOnSubmitForm={handleOnSubmitForm}
            classes={classes} changeText={changeText}/>
    );
}
