import React,{useEffect, useRef, useState} from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SendIcon from '@material-ui/icons/Send';
import app from './firebase';



function ChatWindow() {

    const [rid,setrid] = useState();
    const inputref = useRef();
    const [classlist, setclasslist] = useState();

    useEffect(() => {
        const interval = setInterval(() => {
          setrid(global.config.chatrname);
          const list = app.database().ref("Chat");
          list.on('value', (snapshot) => {
              const classses = snapshot.val();
              const classlist = []
              for (let id in classses) {
                  if (((classses[id].rid == global.config.chatrid ) && (classses[id].sid == global.config.email) ) 
                  ||((classses[id].rid == global.config.email ) && (classses[id].sid == global.config.chatrid))){
                    classlist.push({id,...classses[id]});
                  }           
              }
              setclasslist(classlist);
          });
        }, 100);
        return () => clearInterval(interval);

      }, []);

    function handlesubmit(){
        const dataref = app.database().ref("Chat");
        const data = {
            message: inputref.current.value,
            rid : global.config.chatrid,
            sid : global.config.email,
        }
        dataref.push(data);
    }

    return (
        <div className="container-fluid" style={{width:"100%",height:"85vh", border:"2px solid skyblue", borderRadius:"7px"}}>
            <div className="display-flex" style={{padding:"2px"}}>
                <AccountCircleIcon style={{width:"35px", height: "35px"}} />
                <span style={{fontSize:"18px", marginLeft:"20px",fontWeight:"bold"}}>{rid}</span>
            </div>
            <hr/>
            <div style={{height:"65vh",overflowY:"scroll"}}>
                {
                    classlist ? classlist.map((value,index) => 
                        
                            global.config.email == value.sid ? 
                            <div style={{width:"fit-content",textAlign:"right"}} >
                            <p style={{border:"2px solid skyblue",padding:"4px",borderRadius:"20px"}}>{value.message}</p>
                        </div> 
                            : 
                            <div style={{width:"fit-content"}} >
                                <p style={{border:"2px solid skyblue",padding:"4px",borderRadius:"20px"}}>{value.message}</p>
                            </div>
                            
                        
                        
                    ) : ""
                }

            </div>
            <div className="d-flex justify-content-between align-items-center">
                <input placeholder="Type Message...." className="form-control mt-4" style={{width:"95%"}} ref={inputref}></input>
                <button className="btn-info rounded-circle p-1 mt-4" onClick={handlesubmit}> <SendIcon></SendIcon></button>

            </div>
        </div>
    )
}

export default ChatWindow;