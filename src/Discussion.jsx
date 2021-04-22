import React, { useState , useEffect} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Grp from './images/grp.png';
import Discussionitem1 from './Discussionitem1';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import * as ReactBootstrap from 'react-bootstrap';
import app from "./firebase"
import PendingQuestion from './PendingQuestion';


const Discussion = () => {

    const [classlist, setclasslist] = useState();
    const [classlist2, setclasslist2] = useState();

    useEffect(() => {
        const list = app.database().ref("Pending discussion").child(global.config.classid);
        list.on('value', (snapshot) => {
            const classses = snapshot.val();
            const classlist = []
            for (let id in classses) {
                classlist.push({id,...classses[id]});
            }
            setclasslist(classlist);
        });
        const list2 = app.database().ref("Discussion").child(global.config.classid);
        list2.on('value', (snapshot) => {
            const discuss = snapshot.val();
            const dislist = []
            for (let id in discuss) {
                dislist.push({id,...discuss[id]});
            }
            setclasslist2(dislist);
        });
    }, []);

    const [show, setShow] = useState(false);
    function handleClose() {
        setShow(false);
        submitannounce();
    }
    const handleShow = () => setShow(true);

    const [input, setinput] = useState("");

    function setinput1(e) {
        setinput(e.target.value);
    }

    function submitannounce() {
        const dataref = app.database().ref("Pending discussion").child(global.config.classid);
        const data = {
            input
        };
        dataref.push(data);
    }


    const arr = [
        {
            Question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
            Answer: "dgdtg"
        },
        {
            Question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
            Answer: "dgdtg"
        },
        {
            Question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
            Answer: "dgdtg"
        },
        {
            Question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
            Answer: "dgdtg"
        },
        {
            Question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
            Answer: "dgdtg"
        }
    ]
    return (
        <div className="container-fluid" style={{ padding: "16px", marginTop: "80px" }}>
            <div className="row">

                <div className="col-md-8 side">
                    {classlist2 ? 
                        classlist2.map((val, index) => {
                            return (
                                <Discussionitem1 text={val} id={index} />
                            );
                        }) : " "
                    }
                </div>
                {global.config.email == global.config.cemail ?
                                <div className="col-md-3 float-right" style={{marginLeft:"100px"}}>
                                <div className="row">
                                    <h4 style={{marginLeft:"-15px",marginBottom:"10px"}}>Pending Questions</h4>
                                    {classlist ? classlist.map((cls, index) =>
                                        <PendingQuestion cls={cls} />
                                    ) : ''}
                                </div>
                            </div> : "" }

            </div>
            {global.config.email == global.config.cemail ? "" : <div className="row" style={{ position: "fixed", bottom: "30px", right: "40px" }}>
                <button className="add" onClick={handleShow}><HelpOutlineIcon /></button>
            </div>}

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

export default Discussion;