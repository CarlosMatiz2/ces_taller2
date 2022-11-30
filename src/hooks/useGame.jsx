import { useContext } from "react";
import GameContext from "../context/GameContext";

function useGame() {
  return useContext(GameContext);
}

export default useGame;
