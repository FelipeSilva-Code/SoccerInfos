"use client";

import MainContainer from "@/app/components/mainContainer";
import PlayerCard from "@/app/components/playerCard";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { useTeamContext } from "@/app/context/Hooks/UseTeamContext";
import { useSquadContext } from "@/app/context/Hooks/UseSquadContext";

interface Props {
    params: {id: number}
}

export default function TeamInformation ({ params } : Props) {

    const {selectedTeam} = useTeamContext();
    const {getSquadAsync, setSquad, squadSelected} = useSquadContext();

    const router = useRouter();
    
    useEffect(() => {
        setSquad();
    
        if (!selectedTeam)
            router.push('/');
    
        getSquadAsync(params.id);
    }, [selectedTeam]);
      
    return(
        <MainContainer>
            <div className="mt-12 p-4"> 
                <h1 className="text-black text-2xl uppercase font-bold text-center">{selectedTeam?.name}</h1>

                <div className="w-full flex items-center mt-4">
                    <img src={selectedTeam?.logo}/>

                    <div className="text-black ml-2">
                        <h4>Founded: {selectedTeam?.founded}</h4>
                        <h4>Country: {selectedTeam?.country}</h4>
                        <h4>City: {selectedTeam?.city}</h4>
                    </div>
                </div>


            </div>

            <div className="flex flex-col w-full text-black p-12">
                <h3 className="text-2xl uppercase ml-12 text-center">Squad</h3>
                
                {squadSelected?.Players && 
                    <div className="grid grid-cols-6 ">
                        {squadSelected.Players.map(x => (
                            <PlayerCard 
                                id = {x.id}
                                name= {x.name}
                                age= {x.age}
                                number={x.number} 
                                position= {x.position}
                                photo={x.photo}/>  
                        ))} 
                    </div>    
                }      
            </div>   

        </MainContainer>
    )
}