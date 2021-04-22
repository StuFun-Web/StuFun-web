import React from 'react';
import { useHistory } from 'react-router-dom'

function Class(props) {

    const history = useHistory()

    function handleClick(){
        global.config.classid = props.cls.cid
        global.config.classname = props.cls.name
        global.config.classorg = props.cls.org
        global.config.cemail = props.cls.email

        history.push("/classview")
    }

    return (
        <div className="col-md-4" onClick={handleClick}>
            <div className="card m-3">
                <div className="card-header" style={{ backgroundColor: 'black' }}>
                    <h4 className="card-title text-white">{props.cls.name}</h4>
                    <p className="card-subtitle text-white lead">{props.cls.org}</p>
                </div>
                <div className="card-body">
                    <p className="text-muted">Class ID : {props.cls.cid}</p>
                </div>
            </div>
        </div>
    )
}
export default Class;