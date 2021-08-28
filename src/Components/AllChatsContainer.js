import React, {useCallback, useRef, useState} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {addChatsWithThunk, deleteChat} from "../store/actions/chats";
import {Fab} from "@material-ui/core";
import Messages from "./Messages";
import Popup from "./Popup";
import {getChatsList} from "../store/selectors/chats";
import {deleteMessage} from "../store/actions/messages";
import AllChats from "./AllChats";
import {useStyles} from "../ThemeStyles";
import FormContainer from "./FormContainer";
import {useParams, useRouteMatch} from "react-router-dom/cjs/react-router-dom";
import {db} from "../App";


const PopupPure = React.memo(Popup);
const AllChatsPure = React.memo(AllChats);
const FormContainerPure = React.memo(FormContainer);

function AllChatsContainer() {
    const [author, setAuthor] = useState(null);
    const [newUserNickName, setNewUserNickName] = useState();
    const [newUserName, setNewUserName] = useState();
    const [isChangeTheme, setIsChangeTheme] = useState(false);
    const [isShowPopup, setIsShowPopup] = useState(false);
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

    const deleteUserFromChatList = useCallback((chat) => {
        const chatDelete = db.ref("chatList");
        const messagesDelete = db.ref("messages");

        chatDelete.child(chat).remove().catch((error) => error.message);
        messagesDelete.child(chat).remove().catch((error) => error.message);
        dispatch(deleteChat(chat))
        dispatch(deleteMessage(chat))
    },[dispatch])



    return (
        <React.Fragment>
            <p>Список чатов</p>
            <div className={(isChangeTheme) ? classes.primary : classes.secondary}>

                <div className="window-chats">
                    <AllChatsPure classes={classes} match={match} params={params}
                              deleteUserFromChatList={deleteUserFromChatList}
                               chooseAuthor={chooseAuthor}
                                  chatsList={chatsList}
                    />

                    <PopupPure
                           addNewUserToChatList={addNewUserToChatList}
                           changePopupName={changePopupName}
                           changePopupNickName={changePopupNickName}
                           closePopup={closePopup} isShowPopup={isShowPopup}
                    />

                    <div className="messages-form">
                        <Fab color="secondary" aria-label="add"
                             onClick={addUserShow} className="my-fab-btn"
                        >+
                        </Fab>
                        <Messages params={params} author={author}/>

                        <FormContainerPure params={params} author={author}
                                           inputTextRef={inputTextRef}/>
                    </div>
                </div>
            </div>
            <button  onClick={changeTheme} className="my-button-theme">
                Сменить тему
            </button>
        </React.Fragment>
    )

}

export default AllChatsContainer;