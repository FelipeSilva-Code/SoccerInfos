import { useContext, useState } from "react";
import { SquadContext } from "../SquadContext";

export const useSquadContext = () => {
  const context = useContext(SquadContext);

  if (context === undefined) {
    throw new Error("useSquadContext must be used within a SquadProvider");
}
  return context;
};