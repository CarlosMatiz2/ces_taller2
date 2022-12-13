import { useState } from "react";
import {
  getDeckId,
  getDrawCards,
  getDrawCardsByCount,
} from "../service/DeckOfCardsAPI";
import { assignANumberToChart, orderArray, validateWhoWon } from "../common/Functions";
import GameContext from "./GameContext";

const GameProvider = ({ children }) => {
  const [idGame, setIdGame] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [winName, setWinName] = useState("");

  const [playerOne, setPlayerOne] = useState({
    name: "",
    cards: [],
  });
  const [playerTwo, setPlayerTwo] = useState({
    name: "",
    cards: [],
  });

  const [playerOneCardToDelete, setPlayerOneCardToDelete] = useState("");

  const [playerTwoCardToDelete, setPlayerTwoCardToDelete] = useState("");

  const playGame = async () => {
    setIdGame(await getDeckId());
  };

  const requestCards = async () => {
    const cards = await getDrawCards(idGame);

    if(!cards.length){
      setShowToast(true);
      setWinName(validateWhoWon(playerOne, playerTwo));
      setTimeout(function(){
        setShowToast(false);
        setWinName("")
      }, 5000)
      return true
    }

    const filterCardsPlayerOne = [...playerOne.cards].filter(
      (obj) => obj?.code !== playerOneCardToDelete
    );
    setPlayerOneCardToDelete("");
    setPlayerOne({
      ...playerOne,
      cards: orderArray([...filterCardsPlayerOne, cards[0]], "number"),
    });

    const filterCardsPlayerTwo = [...playerTwo.cards].filter(
      (obj) => obj?.code !== playerTwoCardToDelete
    );
    setPlayerTwoCardToDelete("");
    setPlayerTwo({
      ...playerTwo,
      cards: orderArray([...filterCardsPlayerTwo, cards[1]], "number"),
    });

    return false;
  };

  const requestCardsContinental = async () => {
    const cardsPlayerOne = await getDrawCardsByCount(idGame, 10);
    const cardsWithNumberPlayerOne = cardsPlayerOne.map(card => ({
      ...card,
      number: assignANumberToChart(card?.code[0])
    }));
    setPlayerOne({
      ...playerOne,
      cards: orderArray([...playerOne.cards, ...cardsWithNumberPlayerOne], "number"),
    });

    const cardsPlayerTwo = await getDrawCardsByCount(idGame, 10);
    const cardsWithNumberPlayerTwo = cardsPlayerTwo.map(card => ({
      ...card,
      number: assignANumberToChart(card?.code[0])
    }));
    setPlayerTwo({
      ...playerTwo,
      cards: orderArray([...playerTwo.cards, ...cardsWithNumberPlayerTwo], "number")
    });
  };

  return (
    <GameContext.Provider
      value={{
        playGame,
        requestCards,
        playerOne,
        setPlayerOne,
        playerTwo,
        setPlayerTwo,
        showToast,
        setShowToast,
        winName,
        setWinName,
        requestCardsContinental,
        setPlayerOneCardToDelete,
        setPlayerTwoCardToDelete,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
