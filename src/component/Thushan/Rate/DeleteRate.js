import React, { useEffect, useState } from 'react';
import axios from "axios";

const DeleteRate=(rate)=> {

    console.log("DeleteRate load =");
    console.log(rate);
    const [feed_back, setfeed_back] = useState("");
    const [rating, setrating] = useState("");

    const status =true;
    const spID = "1211e232";
    const date = Date();
    const rating_id ="122232";
    const ad_id = "2329443";
    const feedback_id ="99999";    
    const rrid = window.localStorage.getItem('rid')||'';
    console.log("thid this this"+rrid);


    function sendData(e){
    
        e.preventDefault();


    
    }
    console.log(rate.ad_id);
    return(
        <div class="container">
            <h1>{}</h1>
            <form class="row gy-2 gx-3 align-items-center" onSubmit={sendData}>

            <div>
            <label for="customRange2" class="form-label">Example range</label>
            <input type="range" class="form-range" min="0" max="5" id="customRange2"
             onChange={(e)=>{setrating(e.target.value);}}
            />

            </div>

            <div class="mb-3">
            
        <label for="formGroupExampleInput" class="form-label" >Example label</label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" 
        onChange={(e)=>{setfeed_back(e.target.value);}}
                                />
      </div>
      
      <div>
          <button type="submit" class="btn btn-primary">Delete</button>
      </div>
      </form>
      </div>
    )

}



export default DeleteRate;