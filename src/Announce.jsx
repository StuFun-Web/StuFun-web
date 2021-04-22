import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import app from './firebase';

function Announce(props){

    const cid = global.config.email.substring(0,5);
    const pid = global.config.classid

    function deleteannounce(){
        var adaRef =  app.database().ref('Announcement').child(cid).child(pid).child(props.text.id);
        adaRef.remove();
    }
    return(
        <div className="row announcement mx-3 my-4 p-3">
        <p className="text-justify">{props.text.input}</p>
        {global.config.cemail == global.config.email ?         <div className="mt-1 w-100 text-right">
            <button className="btn btn-outline-info" onClick={deleteannounce}><DeleteIcon /></button>
        </div> : ""}

    </div>
    )
}

export default Announce;