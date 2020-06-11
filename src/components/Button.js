// src/Components/CampusMap.js

import React from 'react'

function Button(props) {

    const divStyle = {
        background: "linear-gradient(180deg, rgba(72, 72, 72, 0.225) 0%, rgba(255, 255, 255, 0) 100%), #D80000",
        width: '70%',
        marginLeft: "15%",
        marginRight: "15%",
        marginBottom: "5%",
        height: 61,
        display: 'inline-block'
    };
    const fontStyle = {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 20,
        paddingTop: 5,
    }

    const {ButtonText} = props
    return (
        <div style={divStyle}>

            <h1 style={fontStyle}> {ButtonText} </h1>

        </div>

    )
}

export default Button