import React, {useRef, useState} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {addChat, deleteChat} from "../store/actions/chats";

import {
    useRouteMatch,
    useParams,
} from 'react-router-dom';
import {ButtonBase, Fab} from "@material-ui/core";
import Messages from "./Messages";
import Popup from "./Popup";
import {getChatsList} from "../store/selectors/chats";
import {deleteMessage} from "../store/actions/messages";
import AllChats from "./AllChats";
import {useStyles} from "../ThemeStyles";
import FormContainer from "./FormContainer";



function AllChatsContainer() {
    const [author, setAuthor] = useState(null);
    const [newUserNickName, setNewUserNickName] = useState();
    const [newUserName, setNewUserName] = useState();
    const [isChangeTheme, setIsChangeTheme] = useState(false);
    const popupRef = useRef(null);
    const inputTextRef = useRef(null);
    const classes = useStyles();
    const params = useParams();
    const match = useRouteMatch("/chats/");


    const {chatsList} = useSelector(getChatsList, shallowEqual);
    const dispatch = useDispatch();

    const isChatExists = chatsList.find(item => item.id === params.id)

    const chooseAuthor = (item) => {
        setAuthor(item.name)
    }

    const closePopup = () => {
        popupRef.current.style.display = "none";
    }
    const addUserShow = () => {
        popupRef.current.style.display = "block";
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
        let isNickName = chatsList.some(item =>
            newUserNickName === item.id);
        if (isNickName === true) {
            alert("Такой никнейм уже существует");
            return null;
        } else {
            dispatch(addChat(newUserNickName, newUserName));
        }
        e.target.reset()

    }
    const deleteUserFromChatList = (chat) => {
        dispatch(deleteChat(chat))
        dispatch(deleteMessage(chat))

    }

    React.useEffect(() => {
        inputTextRef.current?.focus();

        if (params.id && !isChatExists)
            addUserShow()
        else if (params.id && isChatExists)
            setAuthor(chatsList.find(item => item.id === params.id).name)


    }, [params.id,isChatExists,chatsList]);


    return (
        <React.Fragment>
            <div className={(isChangeTheme) ? classes.primary : classes.secondary}>

                <div className="window-chats">
                    <AllChats classes={classes} match={match} params={params}
                              deleteUserFromChatList={deleteUserFromChatList}
                              chooseAuthor={chooseAuthor} chatsList={chatsList}/>

                    <Popup popupRef={popupRef}
                           addNewUserToChatList={addNewUserToChatList}
                           changePopupName={changePopupName}
                           changePopupNickName={changePopupNickName}
                           closePopup={closePopup}
                    />
                    <Fab color="secondary" aria-label="add" style={{
                        fontSize: "20px",
                        position: "fixed", right: "30px", top: "30%"
                    }}
                         onClick={addUserShow}
                    >+
                    </Fab>
                    <div className="messages-form">

                        <Messages params={params} author={author}/>
                        <FormContainer params={params} author={author} inputTextRef={inputTextRef}
                              isChatExists={isChatExists}/>
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