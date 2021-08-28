import React from "react";
import "../App.css";
import ClosePopup from "../img/close.svg";
import {ButtonBase, FormLabel, Input} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import classNames from "classnames";
import {useStyles} from "../ThemeStyles";


export default function Popup(props) {


    const classes = useStyles();
    return (


            <div className="popup"  style={{display:props.isShowPopup?"block":"none"}}>

                <div className="popup-wrapper">
                    <FormLabel>Новый пользователь</FormLabel>
                    <ButtonBase onClick={props.closePopup} className="btn-close">
                        <img src={ClosePopup} alt="close" className="img-close"/>
                    </ButtonBase></div>

                <form className="form-popup"
                      onSubmit={props.addNewUserToChatList}

                >

                    <Input
                        className={classNames(classes.primary, "my-Input")}
                        placeholder="Введите ваше никнейм"
                        required={true}
                        onChange={props.changePopupNickName}


                    />
                    <Input
                        className={classNames(classes.primary, "my-Input")}
                        placeholder="Введите ваше имя"
                        required={true}
                        onChange={props.changePopupName}


                    />
                    <Button
                        type="submit"
                        variant="contained"
                        className={classNames(classes.primary, "my-Button-popup")}
                    >
                        Отправить
                    </Button>

                </form>
            </div>



    );
}

