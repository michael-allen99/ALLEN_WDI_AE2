import React from "react"
import PropTypes from "prop-types"

function Tile(props) {
    const { children } = props;
    const divStyle = {
        boxShadow: "0px 10px 20px rgba(31, 32, 65, 0.05)",
        backgroundColor: "#cc0000",
        width: '50%',
        margin: "1%",
        height: 200,
    };


    return <div style={divStyle}>{children}</div>;


}

export default Tile;