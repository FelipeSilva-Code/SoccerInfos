import { useState } from "react";
import { useTeamContext } from "../context/Hooks/UseTeamContext";


export default function SearchTeam () {
    const [name, setName] = useState("");


    const { getTeams } = useTeamContext();

    const procurarTime = () => 
    {
        getTeams(name);
    }
    
    return (
        <div className="flex items-center w-full justify-center mt-7">
            <input  className="rounded border-2 border-zinc-400 w-96 pl-1 h-8 text-black" type="text" placeholder="Time"
                onChange={(e) => setName(e.target.value)}/>
            <button className="bg-black text-white w-24 ml-2 h-8 rounded hover:bg-zinc-600" onClick={() => procurarTime()}>Search</button>
        </div>
    )
}