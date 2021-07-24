import {createStyles, makeStyles, TextareaAutosize} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React from "react";


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

    const classes = useStyles();


    return (

        <React.Fragment>

            <form className="form"
                  onSubmit={props.showAllMessages} style={{position: "sticky", bottom: "20px"}}
            >
                <div className="form-pair">
                    <TextareaAutosize
                        style={{width: "100%", height: "100%"}}
                        ref={props.inputTextRef}
                        className={classes.root}
                        aria-label="minimum height"
                        minRows={3}

                        placeholder="Введите ваше сообщение"
                        required={true}
                        onChange={props.changeText}
                        autoFocus={true}
                    />


                    <Button
                        type="submit"
                        style={{margin: '10px 0', minHeight: "50px"}}
                        variant="contained"
                        color="primary"
                        className={classes.inline}
                    >
                        Отправить
                    </Button></div>

            </form>

        </React.Fragment>

    );
}
