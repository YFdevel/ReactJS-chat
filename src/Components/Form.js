import {createStyles, makeStyles, TextareaAutosize} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React, {useState} from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {addMessage} from "../store/actions/messages";
import {getMessageList} from "../store/selectors/messages";
import classNames from "classnames";


const useStyles = makeStyles((theme) => createStyles({
    root: {
        borderColor: theme.palette.primary.main,
        background: "#ffffff"
    },
    inline: {
        display: 'inline',
    },
}));

export default function Form(props) {
    const [messageText, setMessageText] = useState();
    const {messageList} = useSelector(getMessageList, shallowEqual);
    const dispatch = useDispatch();
    const classes = useStyles();
    console.log(props.author)
    const changeText = (event) => {
        setMessageText(event.target.value)
    }
    const handleOnSubmitForm = (event) => {
        event.preventDefault()
        props.inputTextRef.current?.focus();
         if (props.author && props.isChatExists) {
            dispatch(addMessage(props.params.id, messageText, props.author))
            event.target.reset()
         }

        if (props.author && props.author !== "Бот" && props.isChatExists) {
            setTimeout(() => {
                dispatch(addMessage(props.params.id, `Привет, ${props.author}`, "Бот"))
                event.target.reset()
            }, 1500)

        }


    }

    return (

        <React.Fragment>

            <form className="form"
                  onSubmit={handleOnSubmitForm}

            >
                <div className="form-pair">
                    <TextareaAutosize
                        ref={props.inputTextRef}
                        className={classNames(classes.root,"my-textarea")}
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
                        className={classNames(classes.inline,"my-Button")}

                    >
                        Отправить
                    </Button></div>

            </form>

        </React.Fragment>

    );
}
