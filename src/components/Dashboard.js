import React from "react";
import "./dashboard-style.css";


import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Dashboard = () => {
  return (
      
    <div className="sub-container">
       
       
       <h1 ><br></br></h1>
       <h1 ><br></br></h1>

       <h1 className="heading">ORDER MANAGEMENT SYSTEM</h1> 
        
       
       
    
      <NavLink to="/">
        <Button className="m-4 " class="btn btn-warning" size="lg" style={{ height:"180px", width:"700px",padding:"520"}} >ADD ORDER DETAILS</Button>
      </NavLink>

      <NavLink to="/workH">
        <Button className="m-4" class="btn btn-warning" size="lg" style={{ height:"180px", width:"700px",padding:"520"}}>ADD PAYMENT DETAILS</Button>
      </NavLink>

      <NavLink to="/Salarycal">
        <Button className="m-4" class="btn btn-warning" size="lg" style={{ height:"180px", width:"700px",padding:"520"}}>PAYMENT Calculator</Button>
      </NavLink>

      

      




      </div>
      
  
    
  );
};
export default Dashboard;