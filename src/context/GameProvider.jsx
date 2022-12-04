import { useState } from "react";
import {
  getDeckId,
  getDrawCards,
  getDrawCardsByCount,
} from "../service/DeckOfCardsAPI";
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

    const filterCardsPlayerOne = [...playerOne.cards].filter(
      (obj) => obj.code !== playerOneCardToDelete
    );
    setPlayerOneCardToDelete("");
    setPlayerOne({
      ...playerOne,
      cards: [...filterCardsPlayerOne, cards[0]],
    });

    const filterCardsPlayerTwo = [...playerTwo.cards].filter(
      (obj) => obj.code !== playerTwoCardToDelete
    );
    setPlayerTwoCardToDelete("");
    setPlayerTwo({
      ...playerTwo,
      cards: [...filterCardsPlayerTwo, cards[1]],
    });

    // const findCardPlayerOne = playerOne.cards.find(
    //   (card) => card.value === cards[0].value
    // );

    // const findCardPlayerTwo = playerTwo.cards.find(
    //   (card) => card.value === cards[1].value
    // );

    // if (findCardPlayerOne || findCardPlayerTwo) {
    //   setShowToast(true);
    //   setWinName(findCardPlayerOne ? playerOne.name : playerTwo.name);
    // }
  };

  const requestCardsContinental = async () => {
    const cardsPlayerOne = await getDrawCardsByCount(idGame, 10);
    setPlayerOne({
      ...playerOne,
      cards: [...playerOne.cards, ...cardsPlayerOne],
    });

    const cardsPlayerTwo = await getDrawCardsByCount(idGame, 10);
    setPlayerTwo({
      ...playerTwo,
      cards: [...playerTwo.cards, ...cardsPlayerTwo],
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
