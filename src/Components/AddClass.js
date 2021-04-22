import { Form, Button } from 'react-bootstrap'
import { useRef} from 'react';
import app from "../firebase"
import Navbar1 from '../Navbar1';

function AddClass() {
  const nameref = useRef()
  const orgref = useRef()

  function handleSubmit(e) {
    e.preventDefault();
    savedata(nameref.current.value, orgref.current.value);
  }

  function savedata(name, org) {
    const dataref = app.database().ref("Class").child(global.config.email.substring(0, 5));
    const cid = Math.floor(Math.random()*(9999-1000+1)+1000)
    const data = {
      name, 
      org,
      cid,
    }
    dataref.push(data)
  }

  return (<>
    <Navbar1 />
    <Form onSubmit={handleSubmit}>
      <Form.Group id="Name">
        <Form.Label>Class Name</Form.Label>
        <Form.Control type="name" ref={nameref} required></Form.Control>
      </Form.Group>
      <Form.Group id="Subject">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="name" ref={orgref} required></Form.Control>
      </Form.Group>
      <Button className="w-100" type="Submit">Sign Up</Button>
    </Form>
  </>

  )
}

export default AddClass;