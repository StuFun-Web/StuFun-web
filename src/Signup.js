import { useRef, useState } from 'react';
import { AuthProvider} from '../context/AuthContext';
import useAuth from '../context/AuthContext';
import { Link, useHistory } from 'react-router-dom'
import { Form, Button, Card, Container, Alert } from 'react-bootstrap'
import app from "../firebase"
import Navbar1 from '../Navbar1';

function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const cpassRef = useRef()
  const nameref = useRef()
  const orgref = useRef()
  const { signup, currentUser } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const cStyle = {
    paddingTop : "50px"
  };

  const bStyle = {
    height: "92vh",
    backgroundImage: "url(/1290.jpg)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  };

  const history = useHistory()


  function handleSubmit(e) {
    e.preventDefault()

    savedata(nameref.current.value, orgref.current.value,emailRef.current.value)

  
    if (passwordRef.current.value !== cpassRef.current.value) {
      return setError("Password Not Match")
    }
    try {
      setError('')
      setLoading(true)
      signup(emailRef.current.value, passwordRef.current.value)
      history.push('/loginteacher')

    }
    catch {
      setError("Failed to create account")
    }
    setLoading(false)

  }
function savedata(name,org,email){
  const dataref = app.database().ref("Teacher");
  const data = {
    name,email,org
  };
  dataref.push(data);
  const dataref2 = app.database().ref("Users");
  dataref2.push(data);
}

  return (
    <AuthProvider>
      <div>
        <Navbar1/>
        <div style={bStyle}>
          <div style={{height:"92vh", width:"100%", backgroundColor:"rgba(255,255,255,0.3 )" }}>
        <Container className="d-flex align-item-center justify-content-center" style={cStyle} >
          <div className="w-100" style={{ maxWidth: "450px" }}>
            <Card>
              <Card.Body>
                <h2 className="text-center mb-4">Sign Up</h2>
                {/* {currentUser && currentUser.email} */}
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                <Form.Group id="Name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" ref={nameref} required></Form.Control>
                  </Form.Group>
                  <Form.Group id="Organization">
                    <Form.Label>Organization</Form.Label>
                    <Form.Control type="name" ref={orgref} required></Form.Control>
                  </Form.Group>
                  <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required></Form.Control>
                  </Form.Group>
                  <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required></Form.Control>
                  </Form.Group>
                  <Form.Group id="c-password">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" ref={cpassRef} required></Form.Control>
                  </Form.Group>
                  <Button disabled={loading} className="w-100" type="Submit">Sign Up</Button>
                </Form>
                <div className="w-100 text-center mt-2">
                  Already have a account? <Link to="/login">Log In</Link>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Container>
        </div>
        </div>
      </div>
    </AuthProvider>


  )
}

export default Signup;
