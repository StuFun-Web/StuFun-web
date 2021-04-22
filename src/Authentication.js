import { Form, Button, Caed, Card, Container } from 'react-bootstrap'
import Signup from './Signup';
import Login from './Login';
import UserSelection from './UserSelection';
import { AuthProvider } from '../context/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function Authentication() {

  const cStyle = {
    minHeight: "100vh",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const bStyle = {
    height: "100vh",
    backgroundImage: "url(/1290.jpg)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    filter: "blur(2px)"
  };

  return (
    <div>
      <div style={bStyle}></div>
      <Container className="d-flex align-item-center justify-content-center" style={cStyle} >
        <div className="w-100" style={{ maxWidth: "450px" }}>
          <Router>
            <AuthProvider>
              <Switch>
                <Route exact path="/" component={UserSelection}></Route>
                <Route path="/signup" component={Signup}></Route>
                <Route path="/login" component={Login}></Route>
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    </div>
  )
}

export default Authentication;
