import React from 'react'
import PropTypes from 'prop-types'
import NextLecture from "../components/NextLecture";
import Map from "../components/Map";

function CampusMap(props) {
    return (
        <div>
            <NextLecture Lecture={'Web Design for Industry'} Time={'14:00'} Room={'JM401'} />
            <Map/>
        </div>


    )
}


export default CampusMap;