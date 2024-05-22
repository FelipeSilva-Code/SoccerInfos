import Link from "next/link";
import { useContext, useState } from "react";
import Team from "../interfaces/Team";
import { TeamContext } from "@/app/context/TeamContext";

export default function TeamInfos(props : Team){
    const context = useContext(TeamContext);

    const cardStyle = {
        marginTop: '4rem', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        color: 'black',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        borderRadius: "10px"
    };
    
    const cardHoverStyle = {
        transform: 'scale(1.1)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    };

    const [hover, setHover] = useState(false);
    
    const handleClick = () => {
        context?.setSelectedTeam(props);
      };

    return(
        <Link
            href={"/teamInformation/" + props.id}
            className="mt-16 items-center flex flex-col cursor-pointer text-black p-5"
            style={{ ...cardStyle, ...(hover ? cardHoverStyle : {}) }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={handleClick}>

            <img width="100px"  src={props.logo} alt="foto-club"/>
            <h4>{props.name}</h4>
            <h4>Country: {props.country ?? "Not Informed"}</h4>
            <h4>Founded: {props.founded ?? "Not Informed"}</h4>

        </Link>
    )
}