// src/Components/CampusMap.js

import React, {Component} from 'react'
import menuIcon from "../images/Menu_Icon.png";
import homeIcon from "../images/Home_Icon.png";
import profileIcon from "../images/Profile_Icon.png";
import {withRouter} from "react-router-dom";

const divStyle = {
    boxShadow: "0px 10px 20px rgba(31, 32, 65, 0.05)",
    backgroundColor: "#3d3d3d",
    width: '100%',
    height: 81,
    position: "fixed",
    left: "0",
    bottom: "0",
    display: 'inline-block',
    marginTop: '1%',
};
const imgStyle = {
    textAlign: "center",
    paddingTop: 20,
}

const imgContainer = {
    paddingLeft:'11%',
    paddingRight: '11%',
    margin: '0 auto',
    display: 'inline'
}



class Footer extends Component {
        menuClick = (value) => {
            this.props.history.push("/menu");
        };
        homeClick = (value) => {
            this.props.history.push("/");
        };
        profileClick = (value) => {
            this.props.history.push("/profile");
        };
        render() {
            return (
                <div style={divStyle}>
                    <div style={imgContainer}>
                        <img onClick={this.menuClick} style={imgStyle} src={menuIcon} alt="Menu Icon"/>
                    </div>
                    <div style={imgContainer}>
                        <img onClick={this.homeClick} style={imgStyle} src={homeIcon} alt="Home Icon"/>
                    </div>
                    <div style={imgContainer}>
                        <img onClick={this.profileClick} style={imgStyle} src={profileIcon} alt="Profile Icon"/>
                    </div>





                </div>



            );
        }

    }


export default withRouter(Footer)