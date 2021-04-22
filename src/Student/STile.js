import React from 'react';
import '../Navbar.css';
import { NavLink } from 'react-router-dom';

function STile (props){
    function Savedata(){
        global.config.nav = props.data;
      }
    return(
        <NavLink className="nav-link" to="/dashboardstu" exact onClick={Savedata}>
            <i 
                className="far fa-address-book">
            </i>{props.data}
      </NavLink> 
    )
}

export default STile;
