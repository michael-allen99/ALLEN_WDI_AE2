// src/Components/CampusMap.js

import React from 'react'
import SonarNews from "../images/SonarNews.png";

function News(props) {

    const divStyle = {
        boxShadow: "0px 10px 20px rgba(31, 32, 65, 0.05)",
        backgroundImage:`url(${SonarNews})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        width: '98%',
        margin: "1%",
        height: 126,
        display: 'inline-block'
    };
    const fontStyle = {
        textAlign: "left",
        color: "#ffffff",
        fontSize: 16,
        padding: 5,
        marginTop:70,
        fontWeight: 'bold'
    }
    const pStyle = {
        fontSize: 15,
        color: '#ffffff',
        paddingLeft: 5,
        marginTop: -15,
    }
    const newsStyle = {
        background: 'rgba(0,0,0,0.6)',
        height: 56,
    }

    return (
        <div style={divStyle}>
           <div style={newsStyle}>
               <p style={fontStyle}> Radio Sonar </p>
               <p style={pStyle}>Solent's Student Radio Grabs Awards</p>
           </div>


        </div>

    )
}

export default News