import React, {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {addMessageWithThunk} from "../store/actions/messages";
import {useStyles} from "../ThemeStyles";
import Form from "./Form";




export default function FormContainer(props) {
    const [messageText, setMessageText] = useState();
    const dispatch = useDispatch();
    const classes = useStyles();

    const changeText = (event) => {
        setMessageText(event.target.value)
    }

    const handleOnSubmitForm = useCallback((event) => {
        event.preventDefault()
        props.inputTextRef.current?.focus();
        if (props.author && props.isChatExists) {
            dispatch(addMessageWithThunk(props.params.id, messageText, props.author))
            event.target.reset()
        }
    }, [props, dispatch,messageText]);

    return (
        <Form handleOnSubmitForm={handleOnSubmitForm} classes={classes} changeText={changeText}/>

    );
}
