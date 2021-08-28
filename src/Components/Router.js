import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
    NavLink
} from 'react-router-dom';
import Main from "./Main";
import ProfileContainer from "./ProfileContainer";
import AllChatsContainer from "./AllChatsContainer";




function Router() {


    return (
        <BrowserRouter>
            <header className="header">
                <ul className="header__links">
                    <li className="header__links-item">
                        <NavLink exact to="/" activeStyle={{color: "red", fontSize: "24px", fontWeight: "700"}}
                                 className="link">Главная</NavLink>
                    </li>
                    <li className="header__links-item">
                        <NavLink to="/profile" activeStyle={{color: "red", fontSize: "24px", fontWeight: "700"}}
                                 className="link">Профиль</NavLink>
                    </li>
                    <li className="header__list-item">
                        <NavLink to="/chats" activeStyle={{color: "red", fontSize: "24px", fontWeight: "700"}}
                                 className="link">Чаты</NavLink>
                    </li>
                </ul>
            </header>
            <Switch>
                <Route exact path="/profile">
                    <ProfileContainer/>
                </Route>
                <Route exact path="/chats">
                    <AllChatsContainer/>
                </Route>
                <Route exact path="/chats/:id">
                   <AllChatsContainer/>
                </Route>

                <Route exact path="/">
                    <Main/>
                </Route>
                <Route>
                    <h2 style={{textAlign: "center", fontSize: "40px"}}>404: Page not found</h2>
                </Route>


            </Switch>
        </BrowserRouter>
    )
}

export default Router;