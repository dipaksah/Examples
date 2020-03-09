import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch}from 'react-router-dom';
// import Users from './Components/Admin/Users';
import Home from './Components/Home';
import AdminDashboard from './Components/Admin/AdminDashbord';
import Login from './Components/Login';

 
function App() {
  return (
    <Router>    
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Login' component={Login}/>

        <Route path='/users' component={AdminDashboard}/>
        <Route path='/Donors' component={AdminDashboard}/>
        <Route path='/AdminProfile' component={AdminDashboard}/>
        <Route path='/AdminDashboard' component={AdminDashboard}/>


      </Switch>
    </Router>
  );
}
export default App;
