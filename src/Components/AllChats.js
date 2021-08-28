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
import {useDispatch} from "react-redux";
import {onSubscribeToChatsChanges, preloadChatsWithThunk} from "../store/actions/chats";


function AllChats(props) {

    const dispatch = useDispatch();


    React.useEffect(() => {
        dispatch(preloadChatsWithThunk())
        dispatch(onSubscribeToChatsChanges())

    }, [dispatch])


    return (

        <List className={classNames(props.classes.rootAllChats, "my-List")}>

            {

                (props.chatsList)?
                        props.chatsList.map(function (item1,index) {
                        return <React.Fragment key={index}>

                            {Object.values(item1).map((item2) => {
                                return (
                                    <div className="chat-unit"

                                         key={item2.id}>

                                        <div className="chat-item"
                                             onClick={(event) => {
                                                 props.chooseAuthor(item2, event)

                                             }}
                                        >

                                            <ButtonBase className="btn-close"
                                                onClick={() => {
                                                    props.deleteUserFromChatList(item2.id)
                                                }}>
                                                <img className="img-close" src={ClosePopup} alt="close" />
                                            </ButtonBase>

                                            <ListItemAvatar>
                                                <Avatar/>
                                            </ListItemAvatar>


                                            <ListItem alignItems="flex-start" selected={item2.id === props.params.id}
                                                      name={item2.name} className="my-list-item">
                                                <NavLink
                                                    to={props.match.url === "/chats/" ? `${props.match.url}${item2.id}` : `${props.match.url}/${item2.id}`}
                                                    style={{height: "100%", width: "100%"}}>

                                                    <ListItemText
                                                        primary={
                                                            <Typography
                                                                component="span"
                                                                variant="body2"
                                                                className={props.classes.inline}
                                                                color="textPrimary">
                                                                {item2.name}
                                                            </Typography>
                                                        }
                                                        secondary={
                                                            "I'm online…"
                                                        }
                                                    />
                                                </NavLink>

                                            </ListItem>
                                        </div>
                                        <Divider variant="inset" component="li"/>
                                    </div>
                                )
                            })
                            }

                        </React.Fragment>
                    }
                ):null

            }

        </List>
    )

}

export default AllChats;