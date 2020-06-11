// src/Components/ProfileDetails.js

import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '../images/avatar.png'
function ProfileDetails(props) {

    const divStyle = {
        width: '100%',
        margin: "0%",
        height: 126,
        display: 'inline-block',
        marginBottom: 250
    };
    const h1Style = {
        textAlign: "center",
        color: "#2b2b2b",
        fontSize: 20,
        paddingTop: 0,
        marginLeft: 0,
    }
    const h2Style = {
        textAlign: "left",
        color: "#2b2b2b",
        fontSize: 15,
        paddingTop: 0,
        marginLeft: 20,
    }

    const avatarContainerStyle = {
        textAlign: 'center'
    }
    const avatarStyle = {
        width: 100,
        textAlign: 'center',
        margin: "0 auto",
        height: 100,
        display: 'inline-block',
        marginTop: 20,
    }
    const {Name} = props
    const {Course} = props
    const {Level} = props
    const {StudentNum} = props
    return (

        <div style={divStyle}>
            <div style={avatarContainerStyle}><img src={Avatar} style={avatarStyle}/></div>
            <h1 style={h1Style}> {Name} </h1>
            <h2 style={h2Style}> {Course} </h2>
            <h2 style={h2Style}> Level {Level} </h2>
            <h2 style={h2Style}> Student Number: Q{StudentNum} </h2>


        </div>

    )
}
ProfileDetails.propTypes = {
    Name: PropTypes.string.isRequired,
    Course: PropTypes.string.isRequired,
    Level: PropTypes.number.isRequired,
    StudentNum: PropTypes.number.isRequired
}
export default ProfileDetails