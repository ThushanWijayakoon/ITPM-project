import React from "react";
import "./Rateupdate.css";
import { FaStar } from "react-icons/fa";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
}

function Rateupdate(){

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
            <h2>rate this app</h2>
            <div style = {styles.stars}>
                {stars.map((_, index) => {
                    return(
                        <FaStar key = {index}
                        size={24}
                        style={{
                            marginRight: 10,
                            cursor: "pointer"
                        }}
                        color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                        
                        onClick={()=>handleClick(index+1)}
                        onMouseOver={()=>handleMouseOver(index+1)}
                        onMouseLeave={handleMouseLeave}
                        />
                       
                    )
                })}
            </div>
            

            
            <div>

                <button className="btn btn-success me-3" style={styles.button}>Submit</button>
                <button className="btn btn-success" style={styles.button}>Not now</button>
            </div>
            <div>
            <button type="button" className="btn btn-link">Give feedback</button>
            </div>
            <div>
            <button type="button" className="btn btn-link">My feedback</button>
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
 
}


export default Rateupdate;