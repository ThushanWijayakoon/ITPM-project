import React from 'react';
import './App.css';
import Navbar from './component/Thushan/Navbar/Navbar';
import Homebody from './component/Thushan/Homepage/Homebody';
import Footer from './component/Thushan/Homepage/Footer/Footer';
import Rateinsert from './component/Thushan/Rateinsert/Rateinsert';
import Rateupdate from './component/Thushan/Rateupdate/Rateupdate';
import Feedbackinsert from './component/Thushan/Feedbackinsert/Feedbackinsert';


function App() {
  return (
     <div>
       <Navbar/>
       <Homebody/>
       <Footer/>
       <Rateinsert/>
       <Rateupdate/>
       <Feedbackinsert/>
       
       
     </div>
  );
}

export default App;
