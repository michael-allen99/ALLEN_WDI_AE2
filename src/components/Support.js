// src/Components/CampusMap.js

import React from 'react'
import SupportBG from "../images/SupportBG.png";

function Support(props) {

    const divStyle = {
        boxShadow: "0px 10px 20px rgba(31, 32, 65, 0.05)",
        backgroundImage:`url(${SupportBG})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        width: '48%',
        margin: "1%",
        height: 81,
        display: 'inline-block'
    };
    const fontStyle = {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 20,
        paddingTop: 25,
    }

    return (
        <div style={divStyle}>

            <h1 style={fontStyle}> Support </h1>

        </div>

    )
}

export default Support