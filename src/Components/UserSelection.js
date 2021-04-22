import { Card } from "react-bootstrap";

function UserSelection() {

    return (
        <>
        <Navbar1/>
        <div style={{display:"flex"}}>
            
            <Card>
                <Card.Body style={{padding:"50px"}}>
                    <h2>Teacher</h2>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body style={{padding:"50px"}}>
                    <h2>Student</h2>
                </Card.Body>
            </Card>
        </div>  
        </>

    )
  }
  
  export default UserSelection;