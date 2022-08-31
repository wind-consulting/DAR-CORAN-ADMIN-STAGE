
import './App.css';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { Reports, ReportsOne, ReportsTwo, ReportsThree, ReportsFour,ReportsFive,ReportsSix ,ReportsSeven, ReportsHeight} from './pages/Reports';

import React from 'react';
import {ToastContainer}from 'react-toastify';
import { Link } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Login from './pages/Login'
import Register from './pages/Register'
import AddEdit from './pages/AddEdit'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
class App extends React.Component {

  render(){

  return ( 
    
    <BrowserRouter>
         <Sidebar/>
         <hr/>
         <Route path="/Login" render={(props) => <Login {...props} />} />
         <Redirect from="/" to="Login" />
         
    <Switch>
      <Route path='/Home' exact component={Home} />
      <Route path='/reports' exact component={Reports} />
      <Route path='/reports/reports1' exact component={ReportsOne} />
      <Route path='/reports/reports2' exact component={ReportsTwo} />
      <Route path='/reports/reports3' exact component={ReportsThree} />
      <Route path='/reports/reports4' exact component={ReportsFour} />
      <Route path='/reports/reports5' exact component={ReportsFive} />
      <Route path='/reports/reports6' exact component={ReportsSix} />
      <Route path='/reports/reports7' exact component={ReportsSeven} /> 
      <Route path='/reports/reports8' exact component={ReportsHeight} />
 
    </Switch>
    <Route path='/registre' exact component={Register} />
    <Route path='/reports/Login' exact component={AddEdit} />
<Footer/>
  </BrowserRouter>

);
  }
}
export default App;