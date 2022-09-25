import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/navbar";
import MainContent from "./components/MainContent";
//import { commerce } from "./ecommerce";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Login";


function App() {

    return (
        <Router>
            <Navbar />
            <Switch >
                <Route exact path="/">
                    <MainContent />
                </Route>
                <Route path="/Login">
                    <Login />
                </Route>


            </Switch>

        </Router>

    );
}
ReactDOM.render(<App />, document.getElementById("root"));