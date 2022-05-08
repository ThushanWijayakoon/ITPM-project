import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbaar from './components/Navbaar';
import Home from './components/Home';
import Register from './components/Register';
import Edit from './components/Edit';
import Details from './components/Details';

import {Switch,Route} from "react-router-dom"

import workH from './components/workH';
import workD from './components/workD';
import workE from './components/workE';
import workR from './components/workR';

import Salarycal from './components/Salarycal';
import Dashboard from './components/Dashboard';




function App() {
  return (
    <>
      <Navbaar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/edit/:id" component={Edit} />
        <Route exact path="/view/:id" component={Details} />

        <Route exact path="/workH" component={workH} />
        <Route exact path="/register1" component={workR} />
        <Route exact path="/edit1/:id" component={workE} />
        <Route exact path="/view1/:id" component={workD} />

        <Route exact path="/Salarycal" component={Salarycal} />


        <Route Dashboard path="/Dashbord" component={Dashboard} />

        
        
        


      </Switch>
    </>
       
  );
}

export default App;
