import React, { useState } from 'react';
import Navbar from '../Navbar';
import AddIcon from '@material-ui/icons/Add';
import * as ReactBootstrap from 'react-bootstrap';
import ClassListView from '../ClassListView';
import { useRef} from 'react';
import app from "../firebase"
    

function ClassRoom() {



    const [show, setShow] = useState(false);
    function handleClose(){
        setShow(false);
        savedata(nameref.current.value, orgref.current.value);
    }
    const handleShow = () => setShow(true);

    const istyle = {
        padding : "10px",
        display : "block",
        width : "80%",
        marginBottom : "20px"
    }

    const nameref = useRef()
    const orgref = useRef()
    
    function savedata(name, org) {
      const dataref = app.database().ref("Class").child(global.config.email.substring(0, 5));
      const data = {
        name, org,
        cid : Math.floor(Math.random()*(9999-1000+1)+1000),
        email : global.config.email
      };
      dataref.push(data);
      const dref = app.database().ref("AllClass");
      dref.push(data);

    }

    return (
        <>
            <ClassListView  typee={"Class"}/>
            <div className="row" style={{ position: "fixed", bottom: "30px", right: "40px" }}>
                <button className="add" onClick={handleShow}><AddIcon /></button>
            </div>
            <ReactBootstrap.Modal show={show} onHide={handleClose} className="mt-5 w-100">
                <ReactBootstrap.Modal.Header closeButton>
                    <ReactBootstrap.Modal.Title>Add Class</ReactBootstrap.Modal.Title>
                </ReactBootstrap.Modal.Header>
                <ReactBootstrap.Modal.Body>
                    <input type="name" placeholder="Classname" className="clsinput" style={istyle} ref={nameref}></input>
                    <input type="name" placeholder="Class Subject" className="clssubinput" style={istyle} ref={orgref}></input>
                </ReactBootstrap.Modal.Body>
                <ReactBootstrap.Modal.Footer>
                    <ReactBootstrap.Button variant="primary" onClick={handleClose}>
                        Add
          </ReactBootstrap.Button>
                </ReactBootstrap.Modal.Footer>
            </ReactBootstrap.Modal>
        </>
    )
}
export default ClassRoom;