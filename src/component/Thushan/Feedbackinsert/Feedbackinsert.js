import React from "react";
import "./Feedbackinsert.css";
import { FaStar } from "react-icons/fa";
import { getQueriesForElement } from "@testing-library/react";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
}

function Feedbackinsert(){

    const stars = Array(5).fill(0);
    const [currentValue, setCurrentValue] = React.useState(0);
    const [hoverValue, setHoverValue] = React.useState(undefined);
 
    const handleClick = value => {
        setCurrentValue(value)
    };

    const handleMouseOver = value => {
        setHoverValue(value)
    }

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }



    return(
        <div style={styles.container}>
            <h2>Give feedback</h2>
            

            <textarea
                placeholder="what's your feedback"
                style={styles.textarea}/>

                <div>

                    <button className="btn btn-success me-3" style={styles.button}>Submit</button>
                    <button className="btn btn-success" style={styles.button}>Cancel</button>
                </div>        

        </div>
    );
};

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

 
}


export default Feedbackinsert;