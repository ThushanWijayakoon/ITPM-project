import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
 
 // Our all component files
import AddItem from './components/AddItem';
import EditItem from './components/EditItem';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './Pages/Main';
import ViewDetails from './Pages/ViewDetails';
import EditDetails from './Pages/EditDetails';
import Home from './Pages/Home';
 

class App extends Component {
  render() {
    return (
    <div>
      <Header />
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/Home' component={Home} />  
        <Route path='/additem' component={AddItem} />
        <Route path='/ViewDetails' component={ViewDetails} />
        <Route path='/EditDetails' component={EditDetails} />
        <Route path='/edititem/:id' component={EditItem} />
      </Switch>
      <Footer/>
    </div>
  );
  }
}
 
 export default App;
