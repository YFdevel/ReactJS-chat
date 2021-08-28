import React from "react";

import {
    useParams,
} from 'react-router-dom';
import {shallowEqual, useSelector} from "react-redux";
import {getMessageList} from "../store/selectors/messages";
import {getChatsList} from "../store/selectors/chats";
import {useStyles} from "../ThemeStyles";




export default function Messages(props) {
    const classes = useStyles();
    const params = useParams()
    const messageList = useSelector(getMessageList, shallowEqual);
    const chatsList = useSelector(getChatsList, shallowEqual);

    React.useEffect(() => {

    }, [chatsList])


    return (
        <React.Fragment>


            <div className="message-wrapper">
                {

                    (params.id && messageList[params.id]) ? messageList[params.id].map((item) => {

                            return (
                                <React.Fragment key={item.id}>
                                    <div className="show-block" >
                                        <output className="show-text">
                                            <span className={classes.inlineMessages}>Сообщение:</span>
                                            {item.text}
                                        </output>
                                        <output className="show-text">
                                            <span className={classes.inlineMessages}>Автор:</span>
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


