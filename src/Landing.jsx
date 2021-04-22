import { SupervisorAccountOutlined, PeopleAltOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom'
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LandingPart from './LandingPart';
import Navbar1 from './Navbar1'

const Landing = () => {
    return (
        <>
            <Navbar1 />
            <div className="main container-fluid">

                <div className="row w-75 mx-auto">
                    <Link to='/loginteacher'> <LandingPart icon={<SupervisorAccountOutlined className="teacher" />} name="Teacher" /></Link>
                    <Link to='/loginstu'><LandingPart icon={<PeopleAltOutlined className="student" />} name="Student" /></Link>
                </div>
            </div></>

    );
}

export default Landing;