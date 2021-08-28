import React, {useRef, useState} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {addChatsWithThunk, deleteChat} from "../store/actions/chats";

import {ButtonBase, Fab} from "@material-ui/core";
import Messages from "./Messages";
import Popup from "./Popup";
import {getChatsList} from "../store/selectors/chats";
import {deleteMessage} from "../store/actions/messages";
import AllChats from "./AllChats";
import {useStyles} from "../ThemeStyles";
import FormContainer from "./FormContainer";
import firebase from "firebase";
import {useParams, useRouteMatch} from "react-router-dom/cjs/react-router-dom";


function AllChatsContainer() {
    const [author, setAuthor] = useState(null);
    const [newUserNickName, setNewUserNickName] = useState();
    const [newUserName, setNewUserName] = useState();
    const [isChangeTheme, setIsChangeTheme] = useState(false);
    const [isShowPopup, setIsShowPopup] = useState(false);
    const popupRef = useRef(null);
    const inputTextRef = useRef(null);
    const classes = useStyles();
    const params = useParams();
    const match = useRouteMatch("/chats/");


    const {chatsList} = useSelector(getChatsList, shallowEqual);
    const dispatch = useDispatch();


    const chooseAuthor = (item) => {
        setAuthor(item.name)

    }

    const closePopup = () => {
        setIsShowPopup(false)

    }
    const addUserShow = () => {
        setIsShowPopup(true)

    }
    const changePopupNickName = (e) => {
        setNewUserNickName(e.target.value);

    }
    const changePopupName = (e) => {
        setNewUserName(e.target.value);

    }
    const changeTheme = () => {
        setIsChangeTheme(!isChangeTheme);
    }
    const addNewUserToChatList = (e) => {
        e.preventDefault();

        const db = firebase.database();
        const newChat = db.ref("chatList");

        newChat.orderByKey().equalTo(newUserNickName).limitToFirst(1).once("value", snapshot => {
                if (snapshot.exists()) {
                    alert("Такой никнейм уже существует");
                    return;
                }
                dispatch(addChatsWithThunk(newUserNickName, newUserName))
            }
        ).catch((error) => error.message)

        e.target.reset()
        setIsShowPopup(false)
    }

    const deleteUserFromChatList = (chat) => {
        const db = firebase.database();
        const chatDelete = db.ref("chatList");
        const messagesDelete = db.ref("messages");

        chatDelete.child(chat).remove().catch((error) => error.message);
        messagesDelete.child(chat).remove().catch((error) => error.message);
        dispatch(deleteChat(chat))
        dispatch(deleteMessage(chat))
    }



    return (
        <React.Fragment>
            <div className={(isChangeTheme) ? classes.primary : classes.secondary}>

                <div className="window-chats">
                    <AllChats classes={classes} match={match} params={params}
                              deleteUserFromChatList={deleteUserFromChatList}
                              chooseAuthor={chooseAuthor} chatsList={chatsList}
                    />

                    <Popup popupRef={popupRef}
                           addNewUserToChatList={addNewUserToChatList}
                           changePopupName={changePopupName}
                           changePopupNickName={changePopupNickName}
                           closePopup={closePopup} isShowPopup={isShowPopup}
                    />
                    <Fab color="secondary" aria-label="add" style={{
                        fontSize: "20px",
                        position: "fixed", right: "10%", top: "40%"
                    }}
                         onClick={addUserShow}
                    >+
                    </Fab>
                    <div className="messages-form">

                        <Messages params={params} author={author}/>
                        <FormContainer params={params} author={author} inputTextRef={inputTextRef}

                        />
                    </div>
                </div>
            </div>
            <ButtonBase onClick={changeTheme}
                        style={{
                            width: "100px",
                            padding: "5px",
                            background: "lemonchiffon",
                            position: "sticky",
                            bottom: 0,
                            left: 0
                        }}>
                Сменить тему
            </ButtonBase>
        </React.Fragment>
    )

}

export default AllChatsContainer;