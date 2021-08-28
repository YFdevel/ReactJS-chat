import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeAge, changeLastName, changeName, showChangeDataMessage, showFieldName} from "./store/actions/profile";
import {createStyles, Input, makeStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => createStyles({
    root: {
        borderColor: theme.palette.primary.main,
        background: "#ffffff"
    },
    inline: {
        display: 'inline',
    },
}));

function Profile() {
    const {showName, name, lastName, age, changedDataMessage} = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const classes = useStyles();


    const setShowName = () => {
        dispatch(showFieldName());
    }

    const handleChangeData = (event) => {
        event.preventDefault()
        dispatch(showChangeDataMessage())
        event.target.reset()
        setTimeout(() => {
            dispatch(showChangeDataMessage())
        }, 1500)
    }

    const handleChangeName = (e) => {
        dispatch(changeName(e.target.value))
    }

    const handleChangeLastName = (e) => {
        dispatch(changeLastName(e.target.value))
    }

    const handleChangeAge = (e) => {
        dispatch(changeAge(e.target.value))
    }

    return (

        <div className="profile">

            <h2>Профиль</h2>
            <input className=".input"
                   type="checkbox" onChange={setShowName}
            />

            <span className="profile-user-title-data">Ваши данные</span>

            {showName &&
            <div className="profile-user-data">
                <p>Имя: {name}</p>
                <p>Фамилия: {lastName}</p>
                <p>Возраст: {age}</p>
            </div>
            }
            {changedDataMessage && <div className="changed-data-message">Ваши данные успешно изменены</div>}

            <div className="profile-form-block">
                <form className="form"
                      onSubmit={handleChangeData} style={{position: "sticky", bottom: "20px"}}
                >

                    <Input
                        type="text"
                        style={{width: "100%", height: "100%", marginBottom: "20px"}}
                        className={classes.root}
                        placeholder="Введите ваше имя"
                        required={true}
                        onChange={handleChangeName}
                    />
                    <Input
                        type="text"
                        style={{width: "100%", height: "100%", marginBottom: "20px"}}
                        className={classes.root}
                        placeholder="Введите вашу фамилию"
                        required={true}
                        onChange={handleChangeLastName}
                    />
                    <Input
                        type="number"
                        style={{width: "100%", height: "100%", marginBottom: "20px"}}
                        className={classes.root}
                        placeholder="Введите ваш возраст"
                        required={true}
                        onChange={handleChangeAge}
                    />
                    <Button
                        type="submit"
                        style={{margin: '10px 0', minHeight: "50px"}}
                        variant="contained"
                        color="primary"
                        className={classes.inline}
                    >
                        Отправить
                    </Button>

                </form>
            </div>

        </div>

    );
}

export default Profile;
