import React, { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AddIcon from '@material-ui/icons/Add';
import * as ReactBootstrap from 'react-bootstrap';
import app from "./firebase"
import Announce from './Announce'

const Announcement = () => {
    
    const [input,setinput] = useState("");

    function setinput1(e){
        setinput(e.target.value);
    }

    const [classlist, setclasslist] = useState();
    const idd = global.config.cemail.substring(0, 5);
    const cid = global.config.classid

    useEffect(() => {
        const list = app.database().ref("Announcement").child(idd).child(cid);
        list.on('value', (snapshot) => {
            const classses = snapshot.val();
            const classlist = []
            for (let id in classses) {
                classlist.push({id,...classses[id]});
            }
            setclasslist(classlist);
        });
    }, []);

    const [show, setShow] = useState(false);
    function handleClose(){
        setShow(false);
        submitannounce();
    }
    
    function submitannounce(){
        const dataref = app.database().ref("Announcement").child(global.config.email.substring(0,5)).child(cid);
        const data = {
          input
        }
        dataref.push(data)
        setinput("")
    }
    const handleShow = () => setShow(true);
    return (
        <div className="container-fluid" style={{padding:"16px", marginTop:"80px"}}>
            
            <div className="row">
                <div className="col-md-3 side" style={{ position: "fixed", top: "80px", height: "80vh" }}>
                    {/* <img src={} className="d-block mx-5 mt-5 mb-3" /> */}
                    <p className="display-4 ml-4">{global.config.classname}</p>
                    <p className="lead" style={{ marginLeft: "30px" }}>{global.config.classorg}</p>
                    <p className="text-muted lead" style={{ marginLeft: "30px" }}><span>Number of Students : </span><span>20</span></p>
                </div>
                <div className="col-md-9 ml-auto" >
                    {
                        classlist ? classlist.map((val, index) => 
                            <Announce text={val} idd={index} />
                         ) :""
                    }
                </div>
            </div>

            {global.config.cemail == global.config.email ? <div className="row" style={{ position: "fixed", bottom: "30px", right: "40px" }}>
                <button className="add" onClick={handleShow}><AddIcon /></button>
            </div> : ""}

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

export default Announcement;