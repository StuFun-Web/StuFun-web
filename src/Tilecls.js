import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Tilecls (props){
    function Savedata(){
        global.config.navcls = props.data;
      }
    return(
        <NavLink className="nav-link" to="/classview" exact onClick={Savedata}>
            <i 
                className="far fa-address-book">
            </i>{props.data}
      </NavLink> 
    )
}

export default Tilecls;