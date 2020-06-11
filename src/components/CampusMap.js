// src/Components/CampusMap.js

import React from 'react'
import CampusMapBG from "../images/CampusMapBG.png";
import {Component} from 'react'
import { withRouter } from "react-router-dom";

const divStyle = {
    boxShadow: "0px 10px 20px rgba(31, 32, 65, 0.05)",
    backgroundImage:`url(${CampusMapBG})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    width: '48%',
    margin: "1%",
    height: 126,
    display: 'inline-block'
};
const fontStyle = {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 20,
    paddingTop: 70,
}


class CampusMap extends Component {
    handleClick = (value) => {
        this.props.history.push("/map");
    };
    render() {
        return (
            <div onClick={this.handleClick} style={divStyle}>
                <h1 style={fontStyle}>Campus Map</h1>


            </div>

        );
    }

}

export default withRouter(CampusMap)