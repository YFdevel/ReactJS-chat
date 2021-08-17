import {TextareaAutosize} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React from "react";
import classNames from "classnames";

export default function Form(props) {


    return (



            <form className="form"
                  onSubmit={props.handleOnSubmitForm}

            >
                <div className="form-pair">
                    <TextareaAutosize
                        ref={props.inputTextRef}
                        className={classNames(props.classes.rootForm, "my-textarea")}
                        aria-label="minimum height"
                        minRows={3}
                        placeholder="Введите ваше сообщение"
                        required={true}
                        onChange={props.changeText}
                        autoFocus={true}
                    />


                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classNames(props.classes.inline, "my-Button")}

                    >
                        Отправить
                    </Button></div>

            </form>



    );
}
