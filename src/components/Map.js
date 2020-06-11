// src/Components/CampusMap.js

import React from 'react'
import MapImage from '../images/Map.png'

function Map(props) {

    const divStyle = {
        width: '100%',
        marginTop: "2%",
        height: 400,
        display: 'inline-block'
    };


    const imgStyle = {
        width: '100%'
    }

    return (
        <div style={divStyle}>
            <img style={imgStyle} src={MapImage}/>


        </div>

    )
}

export default Map