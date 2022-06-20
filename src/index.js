import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {ThemeProvider, createTheme} from "@mui/material/styles";


const theme = createTheme({
    palette: {
        primary: {
            main: "rgb(228, 102, 67)",
            lightGray: "#35393f",
            gray: "#2b2d31",
            lightBlack: "#1d1f22",
            black: "#151619",
            grayText: "rgb(124, 129, 135)",
            white: "#fff",
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ThemeProvider theme={theme}>
        <App/>
    </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
