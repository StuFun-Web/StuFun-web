import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import * as ReactBootstrap from 'react-bootstrap';
import ClassListView from '../ClassListView';
import { useRef} from 'react';
import app from "../firebase"
    

function SClassRoom() {



    const [show, setShow] = useState(false);
    function handleClose(){
        setShow(false);
        search(nameref.current.value);
    }
    const handleShow = () => setShow(true);

    const istyle = {
        padding : "10px",
        display : "block",
        width : "80%",
        marginBottom : "20px"
    }

    const nameref = useRef();

    const [found,isfound] = useState([]);
    const [flag,setflag] = useState(0);

    function search(cidd){
        const list = app.database().ref('AllClass');
        list.on('value', (snapshot) => {
            const classses = snapshot.val();
            for (let id in classses) {
                if(classses[id].cid == cidd){
                    isfound(classses[id]);
                    setflag(1);
                    savedata();
                }
            }
        });
    }

    function savedata() {
        const name = found.name;
        const email = found.email;
        const org = found.org;
        const cid = found.cid;
        if (flag == 1){
            const dataref = app.database().ref("SClass").child(global.config.email.substring(0, 5));
            const data = {
                name,
                email,
                org,
                cid
            };
            dataref.push(data);
        }
        else{
            alert("Invalid Class ID")
        }
    }

    return (
        <>
            <ClassListView typee={"SClass"}/>

            <div className="row" style={{ position: "fixed", bottom: "30px", right: "40px" }}>
                <button className="add" onClick={handleShow}><AddIcon /></button>
            </div>
            <ReactBootstrap.Modal show={show} onHide={handleClose} className="mt-5 w-100">
                <ReactBootstrap.Modal.Header closeButton>
                    <ReactBootstrap.Modal.Title>Add Class</ReactBootstrap.Modal.Title>
                </ReactBootstrap.Modal.Header>
                <ReactBootstrap.Modal.Body>
                    <input type="name" placeholder="Classname" className="clsinput" style={istyle} ref={nameref}></input>
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
export default SClassRoom;