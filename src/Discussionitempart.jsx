import React,{useState} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import * as ReactBootstrap from 'react-bootstrap';

const Discussionitempart = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [input1,setInput1] = useState("");
    const [answer, setAnswer] = useState("");
    const [isdisplay, setDisplay] = useState(false);

    const setInput = (e) => {
        setInput1(e.target.value);
    }

    const answer1 = ()=>{
        if(input1!==""){
            setAnswer(input1);
            setDisplay(true);
        }
        else{
            setAnswer("");
            setDisplay(false);
        }
    }
    
    return(
        <div className="row announcement mx-3 my-4 p-3">
                <p className="text-justify"><span  style={{display:"block",fontWeight:"bold",fontSize:"1.3em"}}>Question :</span>{props.text}</p>
                <p className="lead"><span style={{fontWeight: "bold", display: isdisplay?"block":"none"}}>Answer :</span>{answer}</p>
                <div className="mt-1 w-100 text-center">
                    <button className="btn btn-outline-info"><DeleteIcon /></button>
                    <button className="btn btn-outline-info ml-2 py-2" onClick={handleShow}>Answer</button>
                </div>
                <ReactBootstrap.Modal show={show} onHide={handleClose} className="mt-5 w-100">
                    <ReactBootstrap.Modal.Header closeButton>
                        <ReactBootstrap.Modal.Title>Add Announcement</ReactBootstrap.Modal.Title>
                    </ReactBootstrap.Modal.Header>
                    <ReactBootstrap.Modal.Body>
                        <textarea rows="10" style={{width:"100%",padding:"10px",outline:"0px"}} value={input1} onChange={setInput}></textarea>
                    </ReactBootstrap.Modal.Body>
                    <ReactBootstrap.Modal.Footer>
                        <ReactBootstrap.Button variant="primary" onClick={()=>{
                            handleClose();
                            answer1();
                        }}>
                        Add
                        </ReactBootstrap.Button>
                    </ReactBootstrap.Modal.Footer>
                </ReactBootstrap.Modal>
            </div>
    )
}

export default Discussionitempart;