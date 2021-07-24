import React from "react";
import "./App.css";
import ClosePopup from "./img/close.svg";
import {ButtonBase, createStyles, FormLabel, Input, makeStyles} from "@material-ui/core";

import Button from "@material-ui/core/Button";


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

                <form className="form-popup" style={{display: "flex", flexDirection: "column", padding: "10px"}}
                      onSubmit={props.addNewUserToChatList}

                >

                    <Input
                        style={{width: "100%", color: "darkblue", minHeight: "40px", marginTop: "20px"}}
                        className={classes.root}
                        placeholder="Введите ваше никнейм"
                        required={true}
                        onChange={props.changePopupNickName}


                    />
                    <Input
                        style={{width: "100%", color: "darkblue", minHeight: "40px", marginTop: "20px"}}
                        className={classes.root}
                        placeholder="Введите ваше имя"
                        required={true}
                        onChange={props.changePopupName}


                    />
                    <Button
                        type="submit"
                        style={{margin: '20px 0', color: "darkblue"}}
                        variant="contained"
                        color="primary"
                        className={classes.root}
                    >
                        Отправить
                    </Button>
                    <Button
                        type="reset"
                        style={{margin: '20px 0', color: "indianred"}}
                        variant="contained"
                        color="secondary"
                        className={classes.root}
                    >
                        Очистить
                    </Button>
                </form>
            </div>

        </React.Fragment>

    );
}

