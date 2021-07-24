import {createStyles, makeStyles} from "@material-ui/core";
import React from "react";

import {
    useParams,
} from 'react-router-dom';


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
    const params = useParams();


    return (
        <React.Fragment>

            <div className="message-wrapper" style={{display: "flex", flexDirection: "column"}}>
                {props.chatList.map((item1, index1) => {
                    if (item1.id === params.id)
                        return (
                            <div key={index1}>
                                {
                                    item1.messages.map((item2, index2) => {
                                        return (
                                            <React.Fragment>
                                                <div className="show-block" key={index2}>
                                                    <output className="show-text">
                                                        <span className={classes.inline}>Сообщение:</span>
                                                        {item2.text}
                                                    </output>
                                                    <output className="show-text">
                                                        <span className={classes.inline}>Автор:</span>
                                                        {item2.author}
                                                    </output>

                                                </div>

                                            </React.Fragment>
                                        )


                                    })
                                }
                            </div>)
                })}


            </div>
        </React.Fragment>


    )
}


