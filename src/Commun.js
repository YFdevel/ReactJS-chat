import React, {useState, useRef} from "react";
import "./App.css";
import AllChats from "./AllChats";
import {ButtonBase, createStyles, Fab, makeStyles} from "@material-ui/core";
import Popup from "./Popup";
import Form from "./Form";

const useStyles = makeStyles((theme) => createStyles({
    root: {
        background: theme.palette.primary.background
    },
    secondary: {
        background: theme.palette.secondary.background
    }

}));

export default function Commun(props) {

    const [chatList, setChatList] = useState(
        [{id: "anonim", name: "Sergey", messages: []},
            {id: "hulk", name: "Tom", messages: []},
            {id: "digger", name: "Yuriy", messages: []},
            {id: "driver", name: "Jim", messages: []}]
    );
    const [messageText, setMessageText] = useState();
    const [isChangeTheme, setIsChangeTheme] = useState(false);
    let [author, setAuthor] = useState(null);
    const [currentChat, setCurrentChat] = useState();
    const [messageList, setMessageList] = useState([]);
    const [newUserNickName, setNewUserNickName] = useState();
    const [newUserName, setNewUserName] = useState();
    const [isInputSubmit, setIsInputSubmit] = useState(false);
    const inputTextRef = useRef(null);
    const popupRef = useRef(null);

    const classes = useStyles();


    const changeText = (event) => {
        setMessageText(event.target.value)
    }


    const showAllMessages = (event) => {

        inputTextRef.current?.focus();
        event.preventDefault();


        setChatList((preChatList) => {
            if (messageText && author) {
                setMessageList([...messageList, {text: messageText, author: author}]);
            }

            preChatList.forEach((item) => {
                if (item.id === currentChat) {
                    item['messages'] = [...item['messages'], {text: messageText, author: author}]
                }
            });

            return preChatList
        });

        inputTextRef.current.value = "";
        setIsInputSubmit(true);

    }
    const closePopup = () => {
        popupRef.current.style.display = "none";
    }
    const addUserShow = () => {
        popupRef.current.style.display = "block";
    }

    const changeChatList = (item) => {
        setCurrentChat(item);
    }
    const changePopupNickName = (e) => {
        setNewUserNickName(e.target.value);

    }
    const changePopupName = (e) => {
        setNewUserName(e.target.value);

    }
    const addNewUserToChatList = (e) => {
        e.preventDefault();
        let isNickName = chatList.some(item =>
            newUserNickName === item.id);
        if (isNickName === true) {
            alert("Такой никнейм уже существует");
            return null;
        } else {
            setChatList([...chatList, {id: newUserNickName, name: newUserName, messages: []}]);
        }


    }
    const deleteUserFromChatList = (chat) => {

        chatList.forEach((item, index, chatList) => {
            if (chat === item.id) {
                chatList.splice(index, 1)
            }
        })

    }

    React.useEffect(
        () => {

            const timer = setTimeout(() => {
                if (isInputSubmit === true) {
                    setChatList((preChatList) => {

                        preChatList.forEach((item) => {
                            if (item.id === currentChat && item.messages['author'] !== "Бот") {
                                item['messages'] = [...item['messages'], {text: `Привет, ${author}`, author: "Бот"}];
                            }
                        });

                        return preChatList
                    });
                }
                setIsInputSubmit(false);
            }, 1500);

            return () => {
                clearTimeout(timer);

            }

        }, [isInputSubmit]
    )

    React.useEffect(() => {
        inputTextRef.current.focus();
    }, [messageList]);


    const changeTheme = () => {
        setIsChangeTheme(!isChangeTheme);
    }
    const chooseAuthor = (item, event) => {
        setAuthor(item.name)
    }

    return (

        <React.Fragment>

            <div className={(isChangeTheme) ? classes.root : classes.secondary}
                 style={{minHeight: "900px", position: "relative", display: "flex", flexDirection: "column"}}>

                <Popup popupRef={popupRef} addNewUserToChatList={addNewUserToChatList} changePopupName={changePopupName}
                       changePopupNickName={changePopupNickName} closePopup={closePopup}
                />


                <div className="message-block">
                    <AllChats messageList={messageList} chatList={chatList} chooseAuthor={chooseAuthor}
                              currentChat={currentChat} author={author}
                              changeChatList={changeChatList} deleteUserFromChatList={deleteUserFromChatList}
                    />
                </div>


                <div className="form-block">
                    <Form showAllMessages={showAllMessages}
                          changeText={changeText}
                          inputTextRef={inputTextRef}/>

                </div>

                <ButtonBase onClick={changeTheme}
                            style={{
                                width: "100px",
                                padding: "5px",
                                background: "lemonchiffon",
                                position: "sticky",
                                bottom: 0,
                                left: 0
                            }}>Сменить
                    тему</ButtonBase>
                <Fab color="secondary" className="btn-add" aria-label="add" style={{
                    fontSize: "20px", position: "absolute", right: "30px", top: "40px"
                }} onClick={addUserShow}>+
                </Fab>
            </div>

        </React.Fragment>

    );
}

