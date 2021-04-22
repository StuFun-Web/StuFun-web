import React, { useState } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';
import app from "./firebase"
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';



const PendingQuestion = (props) => {
    const [input,setinput] = useState("");

    function setinput1(e){
        setinput(e.target.value);
    }

const [show, setShow] = useState(false);
function handleClose(){
    setShow(false);
    submitannounce();
}

function submitannounce(){
    const dataref = app.database().ref("Discussion").child(global.config.classid);
    const data = {
        que : props.cls.input,
        ans : input
    };
    dataref.push(data);
    deletepending();
}

function deletepending(){
    var adaRef =  app.database().ref('Pending discussion').child(global.config.classid).child(props.cls.id);
    adaRef.remove();

}

const handleShow = () => setShow(true);
    return (
        <div className="row discussion">
        <p className="text-justify"><span  style={{display:"block",fontWeight:"bold",fontSize:"1.3em"}}>Question :</span>{props.cls.input}</p>
        {/* <p className="lead"><span style={{fontWeight: "bold", display:"block"}}>Answer :</span>{props.text.Answer}</p> */}
        <div className="mt-1 w-100 text-right">
            <button className="btn btn-outline-info" style={{marginRight:"10px"}} onClick={deletepending}><DeleteIcon /></button>
            <button className="btn btn-outline-info" onClick={handleShow}><CreateIcon /></button>
        </div>
        <ReactBootstrap.Modal show={show} onHide={handleClose} className="mt-5 w-100">
                <ReactBootstrap.Modal.Header closeButton>
                    <ReactBootstrap.Modal.Title>Add Announcement</ReactBootstrap.Modal.Title>
                </ReactBootstrap.Modal.Header>
                <ReactBootstrap.Modal.Body>
                    <textarea rows="10" style={{ width: "100%", padding: "10px", outline: "0px" }} value={input} onChange={setinput1}></textarea>
                </ReactBootstrap.Modal.Body>
                <ReactBootstrap.Modal.Footer>
                    <ReactBootstrap.Button variant="primary" onClick={handleClose}>
                        Add
          </ReactBootstrap.Button>
                </ReactBootstrap.Modal.Footer>
            </ReactBootstrap.Modal>
        </div>
    );
}

export default PendingQuestion;