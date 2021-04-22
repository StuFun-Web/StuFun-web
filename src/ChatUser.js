import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


function ChatUser(props) {

    function handleclick(){
        global.config.chatrid = props.value.email;
        global.config.chatrname = props.value.name;
    }

    return (
        <div>
            {
                global.config.email == props.value.email ? "" : 
                <div className="container-fluid border-bottom" onClick={handleclick}>
            <div className="row">
                <div className="col-md-3">
                    <AccountCircleIcon style={{width:"70px", height:"auto"}} />  
                </div>
                <hr/>   
                <div className="col-md-7" style={{marginTop:"20px"}}>
                    <h5>{props.value.name}</h5> 
                </div>
            </div>
        </div>
            }
        </div>
    )
}

export default ChatUser;