// src/Components/timetable.js

import React from 'react'
import PropTypes from 'prop-types'
import TimetableBG from "../images/TimetableBG.png";

function Timetable(props) {

    const divStyle = {
        boxShadow: "0px 10px 20px rgba(31, 32, 65, 0.05)",
        backgroundImage:`url(${TimetableBG})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        width: '60%',
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

    return (
        <div style={divStyle}>

            <h1 style={fontStyle}> Timetable </h1>

        </div>

    )
}

export default Timetable