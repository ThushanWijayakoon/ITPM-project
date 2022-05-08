import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';
import { Link } from 'react-router-dom';
import background from "./Supply.jpg";

const Main = () => {
  
return (
    <div style={{ backgroundImage: `url(${background})` }}>
    <center>
    <br/>
    <br/>
    <div className='Box'>
        <br/><center><h2>Item Management System</h2></center><br/><br/><br/>
        <Link to="/additem" className="btn btn-primary1"><h5>Add Item Details</h5></Link><br/><br/>
        <Link to="/ViewDetails" className="btn btn-primary1"><h5>View Item Details</h5></Link><br/><br/>
        <Link to="/EditDetails" className="btn btn-primary1"><h5>Edit Item Details</h5></Link>
    </div>
    <br/>
    <br/>
    </center>  
    </div>
  );
};

export default Main;