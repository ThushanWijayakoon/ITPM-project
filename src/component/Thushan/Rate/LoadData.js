import React, { useEffect, useState } from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';

function LoadData(){

    const id ="99999";
    const[rate, setrate] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8989/rate/get/'+id)
        .then(res=> setrate(res.data.Rate))
        .catch(error=> console.log(error));
    },[]);
    console.log("load page");
    console.log(rate);
    
    console.log("load page");
    console.log(rate);

    function deleteRate(rid){
        axios.delete('http://localhost:8989/rate/delete/'+rid).then((res)=>{
            alert("Feedback is deleted");
            window.location="http://localhost:3000/feedback/rate";
        }).catch((err)=>{
            alert("Not deleted! "+err)
        });
    }
    
    
    return(
            
        
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-4">
                        Feed back
                    </div>
                    <div class="col-1">
                      Rate
                    </div>
                    <div class="col-3">
                      <Link to="/feedback"><button className="btn btn-primary">Add FeedBack</button> </Link>
                    
                    </div>
                </div>
             </div>

            { rate.map((no,key)=>(


               // <div><h1>{no.feed_back}</h1></div>
               
                <div class="container">
                <div class="row border border-dark">
                    <div class="col-4">
                        {no.feed_back}
                    </div>
                    <div class="col-1">
                    {no.rating}
                    </div>
                    <div class="col-3">
                        <div class="row">
                        <Link to ="/feedback/edit" onClick ={window.localStorage.setItem('rid',no._id)} >edit</Link>
                        
                        <Link  onClick ={()=>deleteRate(no._id)}>Delete</Link>
            
                        </div>
                    </div>
                </div>
                </div>

            ))}
        </div>
    )
}
export default LoadData;