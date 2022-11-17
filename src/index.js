import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/navbar";
import MainContent from "./components/MainContent";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Login";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import { createStore } from 'redux'
import reducers from "./reducers";
import Chart from "./components/Chart";


function App() {
    const store = createStore(reducers);
    return (
        <Provider store={store}>
            <Router>
                <Navbar />
                <Switch >
                    <Route exact path="/">
                        <MainContent />
                    </Route>
                    <Route path="/Login">
                        <Login />
                    </Route>
                    <Route path='/Chart'>
                        <Chart />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </Provider>

    );
}
ReactDOM.render(<App />, document.getElementById("root"));