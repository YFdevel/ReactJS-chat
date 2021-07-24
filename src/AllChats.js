import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import {
    BrowserRouter,
    Switch, Route,
    useRouteMatch,
    useParams, NavLink,
} from 'react-router-dom';
import ClosePopup from "./img/close.svg";
import {ButtonBase} from "@material-ui/core";
import Messages from "./Messages";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '30%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper
    },
    inline: {
        display: 'inline',
    },
}));

function AllChats(props) {

    const classes = useStyles();
    const params = useParams();
    const match = useRouteMatch("/chats/");


    return (
        <BrowserRouter>
            <React.Fragment>
                <List className={classes.root} style={{marginBottom: "40px"}}>

                    {props.chatList.map(function (item) {
                            return (

                                <div className="chat-unit"
                                     key={item.id} style={{width: "100%"}}
                                >
                                    <div className="chat-item" style={{display: "flex", flexDirection: "column"}}
                                         onClick={(event) => {
                                             props.chooseAuthor(item, event)
                                             props.changeChatList(item.id)
                                         }}>

                                        <ButtonBase
                                            style={{width: "20px", alignSelf: "flex-end"}}
                                            onClick={(event) => {
                                                props.deleteUserFromChatList(item.id)
                                            }}>
                                            <img src={ClosePopup} style={{width: "30px", height: "30px"}}/>
                                        </ButtonBase>

                                        <ListItemAvatar>
                                            <Avatar/>
                                        </ListItemAvatar>


                                        <ListItem alignItems="flex-start" selected={item.id === props.currentChat}
                                                  style={{height: "100%"}}>
                                            <NavLink to={`${match.url}/${item.id}`}
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

                <Switch>
                    <Route exact path={`${match.url}/:id`}>
                        <Messages messageList={props.messageList} chatList={props.chatList}
                                  currentChat={props.currentChat}
                                  changeChatList={props.changeChatList} author={props.author}/>
                    </Route>

                </Switch>


            </React.Fragment>
        </BrowserRouter>
    )
}

export default AllChats;