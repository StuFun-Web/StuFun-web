import ChatUser from '../ChatUser';
import app from "../firebase"
import React, { useEffect, useState } from 'react';
import ChatWindow from '../ChatWindow';


function ChatRoom() {

    const [classlist, setclasslist] = useState();
    const idd = global.config.cemail.substring(0, 5);
    const cid = global.config.classid

    useEffect(() => {
        const list = app.database().ref("Users");
        list.on('value', (snapshot) => {
            const classses = snapshot.val();
            const classlist = []
            for (let id in classses) {
                classlist.push({id,...classses[id]});
            }
            setclasslist(classlist);
        });
    }, []);

    return (
        <div className="container-fluid" style={{ padding: "16px", marginTop: "10px" }}>

            <div className="row">
                <div className="col-md-3 side" style={{ position: "fixed", top: "80px", height: "80vh" }}>
                    {
                        classlist ? classlist.map((value,index) =>
                            <ChatUser value={value}/>
                        ): ""
                    }
                </div>
                <div className="col-md-9 ml-auto" >
                    <ChatWindow/>
                </div>
            </div>
        </div>
    )
}

export default ChatRoom;