import { useState } from "react";
import Player from "../interfaces/Player";


export default function PlayerCard (props : Player) {


    const cardStyle = {
        marginTop: '4rem', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        color: 'black',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        borderRadius: "10px",
        textAlign: "center",
        padding: "10px"
    };
    
    const cardHoverStyle = {
        transform: 'scale(1.1)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    };
    
    const [hover, setHover] = useState(false);

    return (
        <div style={{ ...cardStyle, ...(hover ? cardHoverStyle : {}) }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
            <img width="80px" src={props.photo}/>

            <div> 
                <p>{props.name}</p>
                <p>{props.position}</p>
            </div>

            <div>
                <p>Number: {props.number}</p>
            </div>
            
            <div>
                <p>Age: {props.age}</p>
            </div>
        </div>
    )
}