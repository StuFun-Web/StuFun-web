import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';


const Discussionitem1 = (props) => {
    return( 
    <div className=" announcement mx-3 my-4 p-3">
    <p className="text-justify"><span  style={{display:"block",fontWeight:"bold",fontSize:"1.3em"}}>Question :</span>{props.text.que}</p>
    <p className="lead"><span style={{fontWeight: "bold", display:"block"}}>Answer :</span>{props.text.ans}</p>
    {
        global.config.email == global.config.cemail ?     <div className="mt-1 w-100 text-right">
        <button className="btn btn-outline-info"><DeleteIcon /></button>
    </div> : ""
    }

    </div>
    )
}

export default Discussionitem1;