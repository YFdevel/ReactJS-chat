import React from "react";
import {
    ThemeProvider, createTheme
} from "@material-ui/core/styles";
import './App.css';
import Router from "./Components/Router";
import {Provider} from "react-redux";
import {store} from "./store/store";
import {persistor} from "./store/store"
import {PersistGate} from "redux-persist/integration/react";


function App() {


    const theme = createTheme({
        palette: {
            primary: {
                main: "#db3e1a",
                backgroundColor: 'rgb(238,174,202)',
                background: 'radial-gradient(circle, rgba(174,238,236,1) 44%, rgba(148,187,233,1) 100%)'
            },
            secondary: {
                main: "#0098FF",
                backgroundColor: 'rgb(174,238,196)',
                background: 'radial-gradient(circle, rgba(174,238,196,1) 44%, rgba(148,187,233,1) 100%)'
            },
        },
    });


    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={<div>Loading....</div>}>

                <ThemeProvider theme={theme}>
                    <div className="App">
                        <div className="block-info">
                            <Router/>
                        </div>
                    </div>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
}

export default App;

