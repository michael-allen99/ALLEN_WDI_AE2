import React from 'react'
import PropTypes from 'prop-types'
import Assignment from '../components/Assignment'
import Timetable from '../components/timetable'
import Email from '../components/Email'
import Grades from '../components/Grades'
import CampusMap from '../components/CampusMap'
import Library from '../components/LibraryLoans'
import UniEvents from '../components/UniEvents'
import Support from '../components/Support'
import News from '../components/News'
function Dash(props) {
    return (
        <div>
            <Timetable/>
            <Assignment/>
            <Email/>
            <Grades/>
            <CampusMap/>
            <Library/>
            <UniEvents/>
            <Support/>
            <News/>
        </div>
    )
}

Dash.propTypes = {

}

export default Dash;