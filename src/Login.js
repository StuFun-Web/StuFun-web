import { useRef, useState } from 'react';
import { Form, Button, Card, Alert, Container} from 'react-bootstrap'
import useAuth from '../context/AuthContext';
import { Link, useHistory } from 'react-router-dom'
import { AuthProvider} from '../context/AuthContext';
import Navbar1 from '../Navbar1';

function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const cpassRef = useRef()
  const { signup, currentUser } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const cStyle = {
    paddingTop : "100px"
  };

  const bStyle = {
    height: "92vh",
    backgroundImage: "url(/1290.jpg)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  };

  function handleSubmit(e) {
    e.preventDefault()

    try {
      setError('')
      setLoading(true)
      signup(emailRef.current.value, passwordRef.current.value)
      global.config.email = emailRef.current.value;
      history.push("/dashboardteacher")
    }
    catch {
      setError("Failed to create account")
    }
    setLoading(false)

  }

  return (
    <AuthProvider>
     
      <div>
      <Navbar1/>
        <div style={bStyle}>
          <div style={{height:"92vh", width:"100%", backgroundColor:"rgba(255,255,255,0.3 )" }}>
        
        <Container className="d-flex align-item-center justify-content-center " style={cStyle} >
          <div className="w-100" style={{ maxWidth: "450px" }}>
            <Card>
              <Card.Body>
                <h2 className="text-center mb-4">Login Teacher</h2>
                {/* {currentUser && currentUser.email} */}
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required></Form.Control>
                  </Form.Group>
                  <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required></Form.Control>
                  </Form.Group>
                  <Button disabled={loading} className="w-100" type="Submit">Sign Up</Button>
                </Form>
                <div className="w-100 text-center mt-2">
                  Need an account? <Link to="/teachersignup">Sign Up</Link>
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

export default Login;
