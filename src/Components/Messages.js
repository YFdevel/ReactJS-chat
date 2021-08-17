import React from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getMessageList} from "../store/selectors/messages";
import {useStyles} from "../ThemeStyles";
import {preloadMessages} from "../store/actions/messages";


export default function Messages(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const messageList = useSelector(getMessageList, shallowEqual);


    React.useEffect(() => {
            dispatch(preloadMessages(props.params.id));
    }, [dispatch, props.params.id])


    return (
        <div className="message-wrapper">

            <div className="previous-messages">{props.params.id &&
            <span className="archive-label">Архив сообщений:</span>}

                {
                    (props.params.id && messageList[props.params.id]) ?
                        Object.values(messageList[props.params.id][0]).map((item2, index2) => {
                                return (

                                    <div className="show-block" key={index2}>
                                        <output className="show-text">
                                            <span className={classes.inlineMessages}>Сообщение:</span>
                                            {item2.text}
                                        </output>
                                        <output className="show-text">
                                            <span className={classes.inlineMessages}>Автор:</span>
                                            {item2.author}
                                        </output>
                                        {item2.date}
                                    </div>
                                )
                            }
                        )

                        : null
                }
            </div>
            <div className="new-messages">
                {
                    (props.params.id && messageList[props.params.id] != null) ?

                        messageList[props.params.id].map((item2, index2) => {
                                if (index2 >= 1) {
                                    return (
                                        <div className="show-block" key={index2}>
                                            <output className="show-text">
                                                <span className={classes.inlineMessages}>Сообщение:</span>
                                                {item2.text}
                                            </output>
                                            <output className="show-text">
                                                <span className={classes.inlineMessages}>Автор:</span>
                                                {item2.author}
                                            </output>
                                            {item2.date}
                                        </div>
                                    )
                                }
                                return null;
                            }
                        )
                        : null
                }
            </div>
        </div>
    )

}


