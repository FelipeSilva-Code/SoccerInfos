import { useContext, useState } from "react";
import { TeamContext } from "../TeamContext";


export const useTeamContext = () => {
  const context = useContext(TeamContext);

  if (context === undefined) {
    throw new Error("useTeamContext must be used within a TeamProvider");
}
  return context;
};