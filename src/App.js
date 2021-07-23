import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Signup from './components/login/Signup';
import Subject from './components/desktop-37/Signsubject';
import Preference from './components/desktop-41/Signsubpref';
import Login from './components/login/login.js'

import { Route,Link } from "react-router-dom"

function App() {
  return (
    <>
    <Route exact path='/' component={Dashboard} />
    <Route exact path='/signup' component={Signup} />
    <Route exact path='/signup/subject' component={Subject} />
    <Route exact path='/signup/subject/preference' component={Preference} />
    <Route exact path='/login' component={Login} />
    </>
  );
}

export default App;
