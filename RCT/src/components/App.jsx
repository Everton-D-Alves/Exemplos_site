import React from "react";
import { BrowserRouter } from "react-router-dom";
import Principal from "./Principal";
import Segundo from "./Segundo";
export default function App(){
    return(
        <div className = "app">
            <BrowserRouter>
                <Segundo />
                <Principal />
            </BrowserRouter>
        </div>
    )
};