"use client";

import TeamInfos from "@/app/components/teamInfos";
import MainContainer from "./components/mainContainer";
import { useEffect } from "react";
import { useTeamContext } from "../app/context/Hooks/UseTeamContext";

export default function Home() {  

  
  const {resultSearch} = useTeamContext();

  useEffect(() => {
    
  }, [resultSearch])
    
  return (   
    <MainContainer>
      {/* USAR O LUCIDE PARA OS ICONS */}
      
      <div className="grid grid-cols-5 w-full pl-4 pr-4">
        {resultSearch?.map(x => (
          <TeamInfos 
            key={x.id}
            name={x.name}
            logo={x.logo}
            founded={x.founded}
            id={x.id}
            country={x.country}
            city={x.city}/>
        ))}
      </div>
      

    </MainContainer>

  );
}


