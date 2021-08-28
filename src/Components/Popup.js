import React from "react";
import "../App.css";
import ClosePopup from "../img/close.svg";
import {ButtonBase, createStyles, FormLabel, Input, makeStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import classNames from "classnames";


const useStyles = makeStyles((theme) => createStyles({
    root: {
        background: theme.palette.primary.background
    },
    secondary: {
        background: theme.palette.secondary.background
    }

}));


export default function Popup(props) {


    const classes = useStyles();
    return (

        <React.Fragment>


            <div className="popup" ref={props.popupRef}>

                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <FormLabel style={{color: "darkblue", fontVariant: "small-caps"}}>Новый пользователь</FormLabel>
                    <ButtonBase onClick={props.closePopup} style={{width: "20px", alignSelf: "flex-end"}}>
                        <img src={ClosePopup} style={{width: "30px", height: "30px"}}/>
                    </ButtonBase></div>

                <form style={{display: "flex", flexDirection: "column", padding: "10px"}}
                      onSubmit={props.addNewUserToChatList}

                >

                    <Input
                        className={classNames(classes.root, "my-Input")}
                        placeholder="Введите ваше никнейм"
                        required={true}
                        onChange={props.changePopupNickName}


                    />
                    <Input
                        className={classNames(classes.root, "my-Input")}
                        placeholder="Введите ваше имя"
                        required={true}
                        onChange={props.changePopupName}


                    />
                    <Button
                        type="submit"
                        variant="contained"
                        className={classNames(classes.root, "my-Button-popup")}
                    >
                        Отправить
                    </Button>

                </form>
            </div>

        </React.Fragment>

    );
}

