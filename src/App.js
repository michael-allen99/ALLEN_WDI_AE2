import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Dash from './views/Dash'
import Assignments from './views/Assignments'
import CampusMap from "./views/CampusMap"
import Results from "./views/Results"
import Profile from "./views/Profile"
import Menu from "./views/Menu"
import {
    Switch,
    Route,
    useLocation
} from "react-router-dom";

function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Dash/>
                </Route>
                <Route path="/assignments">
                    <Assignments />
                </Route>
                <Route path="/results">
                    <Results />
                </Route>
                <Route path="/map">
                    <CampusMap />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/menu">
                    <Menu />
                </Route>
            </Switch>
            <Footer/>

        </div>
    );

}

export default App;
