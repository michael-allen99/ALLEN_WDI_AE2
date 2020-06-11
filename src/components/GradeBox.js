// src/Components/DeadlineBox.js

import React from 'react'
import PropTypes from 'prop-types'

function GradeBox(props) {

    const divStyle = {
        background: "linear-gradient(180deg, rgba(72, 72, 72, 0.225) 0%, rgba(255, 255, 255, 0) 100%), #D80000",
        width: '48%',
        margin: "1%",
        height: 170,
        display: 'inline-block'
    };
    const fontStyle = {
        textAlign: "left",
        color: "#ffffff",
        fontSize: 20,
        paddingTop: 0,
        paddingLeft: 5,
        marginBottom: 20,
    }
    const pStyle = {
        textAlign: "left",
        color: "#ffffff",
        fontSize: 15,
        paddingLeft: 5,
        marginTop: -15,
        paddingTop: 0
    }

    const {unitTitle} = props
    const {unitCode} = props
    const {assignmentTitle} = props
    const {gradeStatus} = props


    return (
        <div style={divStyle}>

            <h1 style={fontStyle}> {unitTitle} </h1>
            <p style={pStyle}> {unitCode} </p>
            <p style={pStyle}> {assignmentTitle} </p>
            <p style={pStyle}> Grade: {gradeStatus}</p>


        </div>

    )
}

GradeBox.propTypes = {
    unitTitle: PropTypes.string.isRequired,
    unitCode: PropTypes.string.isRequired,
    assignmentTitle: PropTypes.string.isRequired,
    gradeStatus: PropTypes.string.isRequired,
}


export default GradeBox