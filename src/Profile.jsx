import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EditIcon from '@material-ui/icons/Edit';
import {useHistory } from 'react-router-dom';

const Profile = () => {

    const history = useHistory()

    function editprofile(){
        history.push("./profileupdate")
    }

    const imgstyle= {
        borderRadius : "50%",
        width : "100%",
        height : "auto"
    }
    const rightstyle = {
        paddingLeft : "30px",
        position : "relative"
    }

    return(
        <div className="profileMain" style={{backgroundImage:"url(/1290.jpg)", backgroundSize:"100% 100%", height:"93vh"}}>
            <div className="profilemain1 d-flex justify-content-center align-items-start">
                <div className="mainbodystyle mx-md-0 mx-3">
                    <div className="leftstyle">
                        <AccountCircleIcon style={imgstyle} />
                    </div>
                    <div style={rightstyle}>
                            <p className="mb-3 mt-md-0 mt-3"><span className="d-block lead">Name :</span><span>Kartik Agrawal</span></p>
                            <p className="mb-3"><span className="d-block lead">Organization :</span><span>GLA University</span></p>
                            <p className="mb-3"><span className="d-block lead">Email :</span><span>agrawalkartik3192gmail.com</span></p>
                            <p className="mb-3"><span className="d-block lead">Password :</span><span>**********</span></p>
                            <button className="editbtn" onClick={editprofile}><EditIcon /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;