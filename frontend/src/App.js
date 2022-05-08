
import Login from './components/Auth/login';
import Signin from './components/User/signin';
import Membership from './components/Membership/membership';
import Profile from './components/User/profile';
import Header from './components/header';
import Footer from './components/Footer/Footer';
import Home from './components/home';

import {BrowserRouter as Router,Routes, Route , Navigate} from "react-router-dom"

import Navbar from './components/Navbar/Navbar';
import Homebody from './components/Homepage/Homebody';
import Headr from './components/Headr/headr';


function App() {

   

  return (
    <Router>
     <div>
      <Headr/>
      <Navbar/>
    

     <Routes>
        <Route path='/log'  element={<Login/>} />
        <Route path='/membership'  element={<Membership/>} />
        <Route path='/home'  element={<Homebody/>}/>
        <Route path='/add'  element={<Signin/>} />
        <Route path='/profile'  element={<Profile/>} />

        <Route path="*" element={<Navigate to="/log" replace />} />
      </Routes>
      
      
      <Footer/>
     
     </div>
    </Router>
    
  );
}

export default App;
