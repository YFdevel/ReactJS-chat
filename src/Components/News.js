import {useCallback, useEffect} from "react";
import {CircularProgress, Link, ListItem} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {getAllNews} from "../store/actions/news";
import {getNews} from "../store/selectors/news";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import {useStyles} from "../ThemeStyles";


export const News = () => {

    const dispatch = useDispatch()
    const {news, isError, isLoading, isResponse} = useSelector(getNews);
    const classes = useStyles();

    const requestNews = useCallback(() => {
        dispatch(getAllNews())
    },[dispatch])

    useEffect(() => {
       requestNews()
    }, [requestNews])


    if (isLoading) {
        return <CircularProgress/>;
    }

    if (isError) {
        return <div className="news-error-block">
                <h2 style={{color:"red"}}>Error: {isResponse}</h2>
                <Button onClick={requestNews} className={classes.buttonNews}>
                    Загрузить данные повторно</Button> </div>
    }

  return <div className="list-data">
        <h2>Статус ответа: {isResponse}</h2>
        <List className="news-list">{
            news.map((item) =>
            <ListItem key={item.id} className="news-list-item">
            <h3 className="item-news">{item.title || 'No title'}</h3>
                <div className="item-news"><img src={item.imageUrl} alt="loading" style={{width:"100%"}}/></div>
                <Link href={item.url} className="item-news">Перейти</Link>
        </ListItem>
        )}
        </List>
    </div>;
};

