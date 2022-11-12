import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/navbar";
import MainContent from "./components/MainContent";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Login";
import Footer from "./components/Footer";

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
            <Footer />
        </Router>

    );
}
ReactDOM.render(<App />, document.getElementById("root"));