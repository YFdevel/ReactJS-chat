import {TextareaAutosize} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React, {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {addMessageWithThunk} from "../store/actions/messages";
import classNames from "classnames";
import {useStyles} from "../ThemeStyles";



export default function Form(props) {
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
    }, [props.params.id, dispatch,messageText]);

    return (

        <React.Fragment>

            <form className="form"
                  onSubmit={handleOnSubmitForm}

            >
                <div className="form-pair">
                    <TextareaAutosize
                        ref={props.inputTextRef}
                        className={classNames(classes.rootForm, "my-textarea")}
                        aria-label="minimum height"
                        minRows={3}
                        placeholder="Введите ваше сообщение"
                        required={true}
                        onChange={changeText}
                        autoFocus={true}
                    />


                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classNames(classes.inline, "my-Button")}

                    >
                        Отправить
                    </Button></div>

            </form>

        </React.Fragment>

    );
}
