// src/Components/DeadlineBox.js

import React from 'react'
import PropTypes from 'prop-types'

function DeadlineBox(props) {

    const divStyle = {
        boxShadow: "0px 10px 20px rgba(31, 32, 65, 0.05)",
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
    const {daysDue} = props
    const {dateDue} = props
    const {assignmentTitle} = props
    const {submissionStatus} = props
    const {unitCode} = props

    return (
        <div style={divStyle}>

            <h1 style={fontStyle}> {unitTitle} </h1>
            <p style={pStyle}> {unitCode} </p>
            <p style={pStyle}> {assignmentTitle} </p>
            <p style={pStyle}> Due in {daysDue} day(s) </p>
            <p style={pStyle}> {submissionStatus} </p>
            <p style={pStyle}> Due: {dateDue} </p>


        </div>

    )
}

DeadlineBox.propTypes = {
    unitTitle: PropTypes.string.isRequired,
    daysDue: PropTypes.number.isRequired,
    unitCode: PropTypes.string.isRequired,
    assignmentTitle: PropTypes.string.isRequired,
    submissionStatus: PropTypes.string.isRequired,
    dateDue: PropTypes.string.isRequired
}


export default DeadlineBox