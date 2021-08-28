import React, {useState} from "react";
import firebase from "firebase";
import {Input} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {useStyles} from "../ThemeStyles";

 const Login=()=>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const classes = useStyles();



    const handlePassChange = (e) => {
        setPassword(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <React.Fragment>
        <div className="registration-block">
            <p>Чтобы войти, заполните поля формы</p>
            <form className="form" onSubmit={handleSubmit}>


                <Input
                    placeholder="Email" name="email" type="email"
                    onChange={handleEmailChange} value={email}
                />


                <Input
                    placeholder="Введите пароль" name="password" onChange={handlePassChange}
                    value={password} type="password"/>


                {error && <p>{error}</p>}
                <Button className={classes.buttonNews} type="submit">Войти</Button>


            </form>
            <p>
                Ещё нет аккаунта? <NavLink to="/registration">Регистрация</NavLink>
            </p>
        </div>
        </React.Fragment>
    );
}
export default Login;