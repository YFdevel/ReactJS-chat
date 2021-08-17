import React, {useEffect, useState} from "react";
import {
    BrowserRouter,
    Switch,
    Route,
    NavLink
} from 'react-router-dom';
import Main from "./Main";
import ProfileContainer from "./ProfileContainer";
import AllChatsContainer from "./AllChatsContainer";
import {News} from "./News";
import Login from "./Login";
import Registration from "./Registration";
import firebase from "firebase";
import PublicRoute from "../hocs/PublicRoute";
import PrivateRoute from "../hocs/PrivateRoute";
import firebaseConfig from "../services/firebase";

firebase.initializeApp(firebaseConfig);

const logout = async () => {
    await firebase.auth().signOut();
}

function Router() {

    const [authed, setAuthed] = useState(false);
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setAuthed(true);
            } else {
                setAuthed(false);

            }
        })

    }, []);


    return (
        <BrowserRouter>
            <header className="header">
                <ul className="header__links">
                    <li className="header__links-item">
                        <NavLink exact to="/" activeStyle={{color: "red", fontSize: "18px", fontWeight: "700"}}
                                 className="link">Главная</NavLink>

                        <NavLink to="/profile" activeStyle={{color: "red", fontSize: "18px", fontWeight: "700"}}
                                 className="link">Профиль</NavLink>

                        <NavLink to="/chats" activeStyle={{color: "red", fontSize: "18px", fontWeight: "700"}}
                                 className="link">Чаты</NavLink>

                        <NavLink to="/news" activeStyle={{color: "red", fontSize: "18px", fontWeight: "700"}}
                                 className="link">Новости</NavLink>
                    </li>
                    <li className="header__list-item sign-in">
                        {!authed &&
                        <NavLink to="/registration" activeStyle={{color: "red", fontSize: "18px", fontWeight: "700"}}
                                 className="link">Регистрация</NavLink>}
                        {!authed &&
                        <NavLink to="/login" activeStyle={{color: "red", fontSize: "18px", fontWeight: "700"}}
                                 className="link">Вход</NavLink>}
                        {authed && <button className="logout-btn" onClick={logout}>Выйти</button>}
                    </li>

                </ul>
            </header>
            <Switch>
                <Route exact path="/news">
                    <News/>
                </Route>
                <PublicRoute authenticated={authed} exact path="/login">
                    <Login/>
                </PublicRoute>
                <PublicRoute authenticated={authed} exact path="/registration">
                    <Registration/>
                </PublicRoute>
                <Route exact path="/">
                    <Main/>
                </Route>

                <PrivateRoute authenticated={authed} exact path="/profile">
                    <ProfileContainer/>
                </PrivateRoute>

                <PrivateRoute authenticated={authed} exact path="/chats/:id?">
                    <AllChatsContainer/>
                </PrivateRoute>

                <Route>
                    <h2 className="page-not-found">404: Page not found</h2>
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Router;