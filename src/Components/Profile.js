import React from "react";
import {Input} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import classNames from "classnames";
import {useStyles} from "../ThemeStyles";




function Profile(props) {

    const classes = useStyles();

    return (

        <div className="profile">

            <h2>Профиль</h2>
            <input className=".input"
                   type="checkbox" onChange={props.setShowName}
            />

            <span className="profile-user-title-data">Ваши данные</span>

            {props.showName &&
            <div className="profile-user-data">
                <p className="profile-user-name">Имя: {props.name}</p>
                <p>Фамилия: {props.lastName}</p>
                <p>Возраст: {props.age}</p>
            </div>
            }
            {props.changedDataMessage && <div className="changed-data-message">Ваши данные успешно изменены</div>}

            <div className="profile-form-block">
                <form className="form"
                      onSubmit={props.handleChangeData}
                >

                    <Input
                        type="text"
                        className={classNames(classes.rootForm, "my-Input")}
                        placeholder="Введите ваше имя"
                        required={true}
                        onChange={props.handleChangeName}
                    />
                    <Input
                        type="text"
                        className={classNames(classes.rootForm, "my-Input")}
                        placeholder="Введите вашу фамилию"
                        required={true}
                        onChange={props.handleChangeLastName}
                    />
                    <Input
                        type="number"
                        className={classNames(classes.rootForm, "my-Input")}
                        placeholder="Введите ваш возраст"
                        required={true}
                        onChange={props.handleChangeAge}
                    />
                    <Button
                        type="submit"
                        className={classNames(classes.inline, "my-Button-profile")}
                        variant="contained"
                        color="primary"

                    >
                        Отправить
                    </Button>

                </form>
            </div>

        </div>

    );
}

export default Profile;
