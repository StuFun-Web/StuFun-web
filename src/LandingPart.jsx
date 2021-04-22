import React from 'react';
import { Link } from 'react-router-dom'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const LandingPart = (props) => {
    return(
        <>
        <div className="col-md-6">
                <div className="parts card d-flex justify-content-center align-items-center p-5">
                
                    <p>{props.icon}</p>
                    <p className="lead">{props.name}</p>
                </div>
            </div>
            
        </>
    );
}

export default LandingPart;