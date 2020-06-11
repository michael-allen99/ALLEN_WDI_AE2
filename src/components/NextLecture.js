// src/Components/NextLecture.js

import React from 'react'
import PropTypes from 'prop-types'
function NextLecture(props) {

    const divStyle = {
        boxShadow: "0px 10px 20px rgba(31, 32, 65, 0.05)",
        backgroundColor: "#cc0000",
        width: '100%',
        marginTop: "2%",
        height: 126,
        display: 'inline-block'
    };
    const h1Style = {
        textAlign: "left",
        color: "#ffffff",
        fontSize: 20,
        paddingTop: 0,
        marginLeft: 20,
    }
    const h2Style = {
        textAlign: "left",
        color: "#ffffff",
        fontSize: 15,
        paddingTop: 0,
        marginLeft: 20,
    }
    const {Lecture} = props
    const {Time} = props
    const {Room} = props
    return (
        <div style={divStyle}>

            <h1 style={h1Style}> Next Lecture: </h1>
            <h2 style={h2Style}> {Lecture} at {Time} </h2>
            <h2 style={h2Style}> Room: {Room} </h2>

        </div>

    )
}
NextLecture.propTypes = {
    Lecture: PropTypes.string.isRequired,
    Time: PropTypes.string.isRequired,
    Room: PropTypes.string.isRequired
}
export default NextLecture