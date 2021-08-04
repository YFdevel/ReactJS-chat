import {makeStyles} from "@material-ui/core/styles";
import {createStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) => createStyles({
    primary: {
        background: theme.palette.primary.background
    },
    secondary: {
        background: theme.palette.secondary.background
    },
    rootAllChats: {
        width: '30%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper
    },
    rootForm: {
        borderColor: theme.palette.primary.main,
        background: "#ffffff"
    },
    rootMessages: {
        width: "60%",
        borderColor: theme.palette.primary.main
    },
    inline: {
        display: 'inline',
    },
    inlineMessages: {
        color: "red",
        fontSize: "1.2em"
    },
    buttonNews: {
        padding: "5px 30px",
        color: "darkblue",
        borderRadius: "20px",
        background: theme.palette.secondary.background
    }

}));


