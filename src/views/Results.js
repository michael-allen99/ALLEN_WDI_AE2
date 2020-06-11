import React from 'react'
import PropTypes from 'prop-types'
import GradeBox from '../components/GradeBox'

function Assignments(props) {
    return (
        <div>
            <GradeBox unitTitle={'Web Design For Industry'} unitCode={'SWD600'} assignmentTitle={'Report 1'} gradeStatus={'B3'}/>
            <GradeBox unitTitle={'Web Design For Industry'} unitCode={'SWD600'} assignmentTitle={'Portfolio 1'} gradeStatus={'Not yet submitted'}/>
            <GradeBox unitTitle={'Project'} unitCode={'CDA600'} assignmentTitle={'Report 1'} gradeStatus={'B3'}/>
            <GradeBox unitTitle={'Project'} unitCode={'CDA600'} assignmentTitle={'Report 2'} gradeStatus={'N/a'}/>
            <GradeBox unitTitle={'Project'} unitCode={'CDA600'} assignmentTitle={'Poster 1'} gradeStatus={'N/a'}/>
        </div>
    )
}



export default Assignments;