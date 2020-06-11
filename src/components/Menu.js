import React, {Component} from "react";
import {withRouter} from "react-router-dom";

const wrapper = {
    margin: "0 auto",
    textAlign: 'center',
}
const divStyle = {
    borderBottom: '2px solid red',
    width: '80%',
    height: 50,
    display: 'inline-block',
    textAlign: 'left'
}
const lastDivStyle = {
    width: '80%',
    height: 50,
    display: 'inline-block',
    textAlign: 'left'
}

class Menu extends Component {
    assignmentClick = (value) => {
        this.props.history.push("/assignments");
    };
    resultClick = (value) => {
        this.props.history.push("/results");
    };
    mapClick = (value) => {
        this.props.history.push("/map");
    };


    render() {
        return (
            <div style={wrapper}>

                <div style={divStyle} onClick={this.resultClick}>
                    <p>Results</p>
                </div>
                <div style={divStyle} onClick={this.assignmentClick}>
                    <p>Assignments</p>
                </div>
                <div style={divStyle}>
                    <p>Timetable</p>
                </div>
                <div style={divStyle} onClick={this.mapClick}>
                    <p>Campus Map</p>
                </div>
                <div style={divStyle}>
                    <p>Email</p>
                </div>
                <div style={divStyle}>
                    <p>News</p>
                </div>
                <div style={divStyle}>
                    <p>Uni Events</p>
                </div>
                <div style={lastDivStyle}>
                    <p>Support</p>
                </div>
            </div>




        );
    }

}


export default withRouter(Menu)