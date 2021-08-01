import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


import {NavLink} from 'react-router-dom';
import ClosePopup from "../img/close.svg";
import {ButtonBase} from "@material-ui/core";
import classNames from "classnames";


function AllChats(props) {

    return (

        <List className=
                  {
                      classNames(props.classes.rootAllChats, "my-List")}
        >

            {props.chatsList.map(function (item) {
                    return (
                        <div className="chat-unit"
                             key={item.id}
                        >
                            <div className="chat-item"
                                 onClick={(event) => {
                                     props.chooseAuthor(item, event)
                                 }}>

                                <ButtonBase
                                    style={{width: "20px", alignSelf: "flex-end"}}
                                    onClick={() => {
                                        props.deleteUserFromChatList(item.id)

                                    }}>
                                    <img src={ClosePopup} alt="" style={{width: "30px", height: "30px"}}/>
                                </ButtonBase>

                                <ListItemAvatar>
                                    <Avatar/>
                                </ListItemAvatar>


                                <ListItem alignItems="flex-start" selected={item.id === props.params.id}
                                          name={item.name} style={{height: "100%"}}>
                                    <NavLink
                                        to={props.match.url === "/chats/" ? `${props.match.url}${item.id}` : `${props.match.url}/${item.id}`}
                                        style={{height: "100%", width: "100%"}}>

                                        <ListItemText
                                            primary={
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    className={props.classes.inline}
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
    )

}

export default AllChats;