import Signup from './Components/Signup';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './Landing';
import AddClass from './Components/AddClass';
import ChatRoom from './Chat/ChatHome';
import ClassView from './ClassVIew';
import LoginStu from './Student/LoginStu';
import StuSignup from './Student/StuSignup';
import DashboardStu from './Student/DashboardStu';
import Profile from './Profile';
import Profileupdate from './Profileupdate';


function App() {

  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing}></Route>
          <Route path="/teachersignup" component={Signup}></Route>
          <Route path="/stusignup" component={StuSignup}></Route>
          <Route path="/loginteacher" component={Login}></Route>
          <Route path="/loginstu" component={LoginStu}></Route>
          <Route path="/dashboardteacher" component={Dashboard}></Route>
          <Route path="/dashboardstu" component={DashboardStu}></Route>
          <Route path="/addclass" component={AddClass}></Route>
          <Route path="/classview" component={ClassView}></Route>
          <Route path="/Chat" component={ChatRoom}></Route>
          <Route path="/profile" component={Profile}></Route>
          <Route path="/profileupdate" component={Profileupdate}></Route>
        </Switch>
      </Router>

    </AuthProvider>

  )
}

export default App;
