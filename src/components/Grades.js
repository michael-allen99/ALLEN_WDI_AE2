// src/Components/Grades.js

import React, {Component} from 'react'
import ResultsBG from "../images/ResultsBG.png";
import {withRouter} from "react-router-dom";
const divStyle = {
    boxShadow: "0px 10px 20px rgba(31, 32, 65, 0.05)",
    backgroundImage:`url(${ResultsBG})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    width: '66%',
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




class Grades extends Component {
    handleClick = (value) => {
        this.props.history.push("/results");
    };
    render() {
        return (
            <div onClick={this.handleClick} style={divStyle}>
                <h1 style={fontStyle}>Results</h1>


            </div>

        );
    }

}

export default withRouter(Grades)


