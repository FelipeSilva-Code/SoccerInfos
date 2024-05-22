"use client";

import React, { createContext, ReactNode, useState } from 'react';
import Team from "../interfaces/Team";
import ApiFootballService from '../services/ApiFootballService';
import { toast } from 'react-toastify';

interface TeamContextType {
    selectedTeam: Team | null;
    setSelectedTeam: (team: Team) => void;
    resultSearch: Team[] | null;
    getTeams: (name: string) => void;
}

export const TeamContext = createContext<TeamContextType | undefined>(undefined);

export const TeamProvider = ({ children }: { children: ReactNode }) => {

    const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
    const [resultSearch, setResultSearch] = useState<Team[] | null>(null);
    
    const getTeams = async (name : string) =>
    {
        var result = await ApiFootballService.getFootballTeamsByNameAsync(name);
        if(result.results > 0)
        {
            var mappedArray = result.response.map((team: any) => mapToTeam(team));
            setResultSearch(mappedArray);
        }else{
          toast.error("No team found. Try again with another name")
        }
    }

    const mapToTeam = (data: any): Team => {
        return {
            id: data.team.id,
            logo: data.team.logo,
            name: data.team.name,
            founded: data.team.founded,
            country: data.team.country,
            city: data.venue.city,
          };
    }


    return (
      <TeamContext.Provider value={{ selectedTeam, setSelectedTeam, getTeams, resultSearch }}>
        {children}
      </TeamContext.Provider>
    );
};