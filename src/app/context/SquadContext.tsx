"use client";

import React, { createContext, ReactNode, useState } from 'react';
import ApiFootballService from '../services/ApiFootballService';
import { toast } from 'react-toastify';
import Player from '../interfaces/Player';
import Squad from '../interfaces/Squad';

interface TeamContextType {
    squadSelected: Squad | null;
    getSquadAsync: (teamId: number) => void;
    setSquad: () => void;
}

export const SquadContext = createContext<TeamContextType | undefined>(undefined);

export const SquadProvider = ({ children }: { children: ReactNode }) => {

    const [squadSelected, setSquadSelected] = useState<Squad | null>(null);
    
    const getSquadAsync = async (teamId : number) =>
    {
        var result = await ApiFootballService.getSquadAsync(teamId);
        
        if(result.results > 0)
        {
            var mappedArray : Player[] = result.response[0].players.map((response: any) => mapToPlayer(response));
            
            const squad: Squad = {
                Players: mappedArray
            };
            setSquadSelected(squad);
        }else{
            toast.error("No squad available for this team. Try again with another team")
        }
    }

    const setSquad = () => setSquadSelected(null);

    const mapToPlayer = (data: any): Player => {
        return {
            id: data.id,
            age: data.age,
            name: data.name,
            number: data.number,
            position: data.position,
            photo: data.photo,
          };
    }


    return (
      <SquadContext.Provider value={{getSquadAsync, squadSelected, setSquad }}>
        {children}
      </SquadContext.Provider>
    );
};