import React, {useRef, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {addChat, deleteChat} from "../store/actions/chats";

import {
    useRouteMatch,
    useParams, NavLink,
} from 'react-router-dom';
import ClosePopup from "../img/close.svg";
import {ButtonBase, createStyles, Fab} from "@material-ui/core";
import Messages from "./Messages";
import Form from "./Form";
import Popup from "./Popup";
import {getChatsList} from "../store/selectors/chats";
import classNames from "classnames";


const useStyles = makeStyles((theme) => createStyles({
    primary: {
        background: theme.palette.primary.background
    },
    secondary: {
        background: theme.palette.secondary.background
    },
    root: {
        width: '30%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper
    },
    inline: {
        display: 'inline',
    },

}));

function AllChats() {
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
    }

    React.useEffect(() => {
        inputTextRef.current?.focus();

        if (params.id && !isChatExists)
            addUserShow()
        else  if (params.id && isChatExists)
            setAuthor(chatsList.find(item => item.id === params.id).name)


    }, []);


    return (
        <React.Fragment>
            <div className={(isChangeTheme) ? classes.primary : classes.secondary}>

                <div className="window-chats">
                    <List className={classNames(classes.root, "my-List")}>

                        {chatsList.map(function (item) {
                                return (
                                    <div className="chat-unit"
                                         key={item.id}
                                    >
                                        <div className="chat-item"
                                             onClick={(event) => {
                                                 chooseAuthor(item, event)
                                             }}>

                                            <ButtonBase
                                                style={{width: "20px", alignSelf: "flex-end"}}
                                                onClick={() => {
                                                    deleteUserFromChatList(item.id)
                                                }}>
                                                <img src={ClosePopup} alt="" style={{width: "30px", height: "30px"}}/>
                                            </ButtonBase>

                                            <ListItemAvatar>
                                                <Avatar/>
                                            </ListItemAvatar>


                                            <ListItem alignItems="flex-start" selected={item.id === params.id}
                                                      name={item.name} style={{height: "100%"}}>
                                                <NavLink
                                                    to={match.url === "/chats/" ? `${match.url}${item.id}` : `${match.url}/${item.id}`}
                                                    style={{height: "100%", width: "100%"}}>

                                                    <ListItemText
                                                        primary={
                                                            <Typography
                                                                component="span"
                                                                variant="body2"
                                                                className={classes.inline}
                                                                color="textPrimary">
                                                                {item.name}
                                                            </Typography>
                                                        }
                                                        secondary={
                                                            "I'm online…"
                                                        }
                                                    />
                                                </NavLink>

                                            </ListItem></div>
                                        <Divider variant="inset" component="li"/>
                                    </div>
                                )
                            }
                        )
                        }

                    </List>

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
                        <Form params={params} author={author} inputTextRef={inputTextRef}
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
                        }}>Сменить
                тему</ButtonBase>
        </React.Fragment>
    )

}

export default AllChats;