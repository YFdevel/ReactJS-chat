import React from "react";
import {
    ThemeProvider, createTheme
} from "@material-ui/core/styles";
import './App.css';
import Router from "./Components/Router";




export function App() {

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

                <ThemeProvider theme={theme}>
                    <div className="App">
                        <div className="block-info">
                            <Router/>
                        </div>
                    </div>
                </ThemeProvider>

    );
}

export default App;

