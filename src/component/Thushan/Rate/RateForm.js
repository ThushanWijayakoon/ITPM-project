import React,{useState} from "react";
import axios from "axios";

function RateForm(){
   // const [rating_id, setrating_id] = useState("");   
   // const [ad_id, setad_id] = useState("");
   // const [date, setDate] = useState("");
    //const [feedback_id, setfeedback_id] = useState("");
    const [feed_back, setfeed_back] = useState("");
    const [rating, setrating] = useState("");

    const status =true;
    const spID = window.localStorage.getItem("UserId")||'';
    const date = Date();
    const rating_id ="122232";
    const ad_id = "2329443";
    const feedback_id ="99999";     
    function sendData(e){
    
        e.preventDefault();

        const newRate = {
            rating_id,
            feedback_id,
            date,
            rating,
            ad_id,
            feed_back
        }

        axios.post("http://localhost:8989/rate/add",newRate).then(()=>{
            alert("Rate Added")
            //window.location="http://localhost:3000/bmsps/calendar";
        }).catch((err)=>{
            alert("sorry we can't add Rate! "+err)
        });
        

    }
    function sendNotification(txt,senderId,receverId){
        const notification_id=txt;
        const sp_id = receverId;
        const client_id = senderId;

        const status = 1;
        const admin_id ="112";
        const ad_id = "144";
        const type_id = "22";

        const newNotification = {
            notification_id,
            status,   
            sp_id,
            client_id,
            admin_id,
            ad_id,
            type_id
        }

        axios.post("http://localhost:8989/notification/add",newNotification).then(()=>{
            alert("notification Added")
    
        }).catch((err)=>{
            alert("sorry we can't add notifition! "+err)
        });
    }

    return(
        <div class="container">
            <form class="row gy-2 gx-3 align-items-center" onSubmit={sendData}>

            <div>
            <label for="customRange2" class="form-label">RATE OUR SERVICE</label>
            <input type="range" class="form-range" min="0" max="5" id="customRange2"
             onChange={(e)=>{setrating(e.target.value);}}
            />

            </div>

            <div class="mb-3">
            
        <label for="formGroupExampleInput" class="form-label" >FEEDBACK</label>
        <input type="text" class="form-control" id="formGroupExampleInput" min="0" max="50" placeholder="Give your feedback" 
        onChange={(e)=>{setfeed_back(e.target.value);}}
                                />
      </div>
      
      <div>
          <button type="submit" class="btn btn-primary" onClick={()=>{sendNotification("You have a new Rate",spID,);}}>submit</button>
      </div>
      </form>
      </div>
    )
}
export default RateForm;