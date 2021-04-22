import React, { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import app from "./firebase"
import ClassListView from './ClassListView';

 function Classlist (){

        const [classlist, setclasslist] = useState();

    useEffect(() => {
        
        const list = app.database().ref('Class').child(global.config.email.substring(0,5));
        list.on('value', (snapshot) => {
            const classses = snapshot.val();
            const classlist = []
            for (let id in classses ){
                classlist.push(classses[id]);
            }
            setclasslist(classlist);
        });
    }, []);
    const arr = [
        {
            name: "Mini-Project 1",
            Teachername: "Pankaj Kapoor",
            students: "20"
        },
        {
            name: "Data Structure",
            Teachername: "Neeraj Khanna",
            students: "20"
        },
        {
            name: "OOPS",
            Teachername: "DBC",
            students: "20"
        },
        {
            name: "Operating System",
            Teachername: "XYZ",
            students: "20"
        },
        {
            name: "Full Stack using NodeJS",
            Teachername: "Pankaj",
            students: "20"
        },
        {
            name: "Machine Learning",
            Teachername: "Neeraj",
            students: "20"
        }
    ];
    const item = arr.map(function (num) {
        const color = ["#000000", "#111111", "#222222", "#333333", "#555555", "#666666"];
        const item1 = color.map(function (val) {
            return (val);
        })
        return (
            <>
                <div className="col-md-4">
                    <div className="card m-3">
                        <div className="card-header" style={{ backgroundColor: color[0] }}>
                            <h4 className="card-title text-white">{num.name}</h4>
                            <p className="card-subtitle text-white lead">{num.Teachername}</p>
                        </div>
                        <div className="card-body">
                            <p className="text-muted">Total Students : {num.students}</p>
                        </div>
                    </div>
                </div>
            </>
        );
    })
    return (
        <div>
            <ClassListView/>
        </div >

    );
}

export default Classlist;