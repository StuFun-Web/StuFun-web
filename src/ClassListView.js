import React, { useEffect, useState } from 'react';
import app from './firebase';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Class from './Class';




export default function ClassListView(props) {

    const [classlist, setclasslist] = useState();
    const [idd] = useState(global.config.email.substring(0, 5));

    useEffect(() => {
        const list = app.database().ref(props.typee).child(idd);
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
            <div className="container" style={{ marginTop: "30px" }}>
                <div className="row">
                    {classlist ? classlist.map((cls,index) =>
                    <Class cls={cls} cid={index} />
                    ) : ''}
                </div>
            </div>
    );

}