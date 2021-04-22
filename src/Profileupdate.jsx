import React, { useEffect, useRef, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import SaveIcon from '@material-ui/icons/Save';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import Classlist from './Classlist';

const Profileupdate = () => {
    const [image,setImage] = useState();
    const [name, setName] = useState("Kartik Agrawal");
    const [organ,setOrgan] = useState("GLA University");
    const [password, setPassword] = useState("12345678");
    const [password1, setPassword1] = useState();
    const [preview, setPreview] = useState("https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png");
    const fileInputRef = useRef();

    useEffect(()=> {
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result)
            }
            reader.readAsDataURL(image);
        }
        else{
            setPreview("https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png")
        }
    },[image])

    const imgstyle= {
        display:"block",
        borderRadius : "50%",
        width : "260px",
        height : "auto"
    }
    const btn2style = {
        border: "0",
        outline: "0",
        display : "block",
        backgroundColor : "transparent"
    }
    const rightstyle = {
        paddingLeft : "30px",
        position : "relative"
    }
    return(
        <div className="profileMain" style={{backgroundImage:"url('/1290.jpg')", backgroundSize:"100% 100%", height:"100vh"}}>
        <div className="profilemain1 d-flex justify-content-center align-items-start">
        <div className="mainbodystyle mx-md-0 mx-3">
        <div className="leftstyle">
            <form>
                <img src={preview} style={imgstyle} />
                <button className="mx-auto mt-2" style={btn2style} onClick={(e)=>{
                    e.preventDefault();
                    fileInputRef.current.click();
                }}><ImageSearchIcon /></button>
                <input type="file" style={{display : "none"}} ref={fileInputRef} accept="image/*" onChange={(e)=>{
                    const file = e.target.files[0];
                    if(file && file.type.substr(0,5)==="image"){
                        setImage(file);
                    }
                    else{
                        setImage(null);
                    }
                }} />
            </form>
        </div>
        <div style={rightstyle}>
        <form>
            <input type="text" className="form-control d-block mb-3" placeholder="Enter Your Name" value={name} onChange={(e)=>{
                setName(e.target.value); 
            }} />
            <input type="text" className="form-control d-block mb-3" placeholder="Enter Your Organization" value={organ} onChange={(e)=>{
                setOrgan(e.target.value);
            }} />
            <input type="text" className="form-control d-block mb-3" value="agrawalkartik319@gmail.com" readOnly />
            <input type="password" className="form-control d-block mb-3" placeholder="Enter Your Password" value={password} onChange={(e)=>{
                setPassword(e.target.value);
            }} />
            <input type="password" className="form-control d-block mb-5" placeholder="Enter Your Password" value={password1} onChange={(e)=>{
                setPassword1(e.target.value);
            }} />
            <div className="text-center d-flex justify-content-around">
                <button className="btn btn-success btn-sm">Save <SaveIcon /></button>
                <button type="reset" className="btn btn-danger btn-sm">Clear <ClearAllIcon /></button>
            </div>
            </form>
        </div>
        </div>
        </div>
        </div>
    );
}

export default Profileupdate;