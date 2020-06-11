import React from 'react'
import PropTypes from 'prop-types'
import ProfileDetails from '../components/ProfileDetails'
import Button from "../components/Button";

function Assignments(props) {
    return (
        <div>
            <ProfileDetails Name={'John Smith'} Course={'Web Design and Development'} Level={6} StudentNum={123456789}/>
            <Button ButtonText={'Get Support'}/>
            <Button ButtonText={'Sign Out'}/>
        </div>
    )
}



export default Assignments;