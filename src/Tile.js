import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Tile (props){
    function Savedata(){
        global.config.nav = props.data;
      }
    return(
        <NavLink className="nav-link" to="/dashboardteacher" exact onClick={Savedata}>
            <i 
                className="far fa-address-book">
            </i>{props.data}
      </NavLink> 
    )
}

export default Tile;