import {createStyles, makeStyles} from "@material-ui/core";
import React from "react";

import {
    useParams,
} from 'react-router-dom';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getMessageList} from "../store/selectors/messages";
import {getChatsList} from "../store/selectors/chats";


const useStyles = makeStyles((theme) => createStyles({
    root: {
        width: "60%",
        borderColor: theme.palette.primary.main
    },
    inline: {
        color: "red",
        fontSize: "1.2em"
    },

}));

export default function Messages(props) {
    const classes = useStyles();
    const params = useParams()
    const messageList = useSelector(getMessageList, shallowEqual);
    const chatsList = useSelector(getChatsList, shallowEqual);
    const dispatch = useDispatch();

    React.useEffect(() => {

    }, [chatsList])


    return (
        <React.Fragment>


            <div className="message-wrapper">
                {

                    (params.id && messageList[params.id]) ? messageList[params.id].map((item) => {

                            return (
                                <React.Fragment>
                                    <div className="show-block" key={item.id}>
                                        <output className="show-text">
                                            <span className={classes.inline}>Сообщение:</span>
                                            {item.text}
                                        </output>
                                        <output className="show-text">
                                            <span className={classes.inline}>Автор:</span>
                                            {item.author}
                                        </output>
                                        {item.id}
                                    </div>

                                </React.Fragment>
                            )

                        }
                    ) : null
                }
            </div>


        </React.Fragment>

    )
}


