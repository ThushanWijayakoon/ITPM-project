import React from "react";
import "./FeedbackView.css";
import { FaStar } from "react-icons/fa";
import axios from 'axios';


function FeedbackView(){
    return(
        <div style={styles.container}>
        <h2>Give feedback</h2>
        

        <textarea
            placeholder="what's your feedback"
            style={styles.textarea}/>

            <div>
                <button className="btn btn-success me-3" style={styles.button}>Update</button>
                <button className="btn btn-success" style={styles.button}>Delete</button>
            </div>        

    </div>

    )

}
const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    textarea: {
        border:"1px solid #a9a9a9",
        borderRadius: 5,
        width: 300,
        margin:"20px 0",
        minHeight:100,
        padding:10
    },
};    

export default FeedbackView;