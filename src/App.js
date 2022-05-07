import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Thushan/Navbar/Navbar';
import Homebody from './component/Thushan/Homepage/Homebody';
import Footer from './component/Thushan/Homepage/Footer/Footer';
import Rateinsert from './component/Thushan/Rateinsert/Rateinsert';
import Rateupdate from './component/Thushan/Rateupdate/Rateupdate';
import Feedbackinsert from './component/Thushan/Feedbackinsert/Feedbackinsert';
import FeedbackView from './component/Thushan/FeedbackView/FeedbackView';
import RateReport from './component/Thushan/RateReport/RateReoprt';




function App() {
  return (
    <>
    <Navbar/>
     <Router>
       <Routes>
           
           <Route path='/' element={<Homebody/>}/>
           <Route path='/Rateupdate' element={<Rateupdate/>}/>
           <Route path='/Feedbackinsert' element={<Feedbackinsert/>}/>
           <Route path='/Rateinsert' element={<Rateinsert/>}/>
           <Route path='/FeedbackView' element={<FeedbackView/>}/>
           <Route path='/RateReport' element={<RateReport/>}/>
           
           
         
       </Routes>
     </Router>
    <Footer/> 
     </> 
  );
}


export default App;

{/* <Navbar/>
       <Homebody/>
       <Footer/>
       <Rateinsert/>
       <Rateupdate/>
       <Feedbackinsert/> */}