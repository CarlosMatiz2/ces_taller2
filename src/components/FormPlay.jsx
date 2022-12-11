import { useEffect } from "react";
import { Button, Stack } from "react-bootstrap";
import useGame from "../hooks/useGame";
import { groupBy, validateStepsTaken } from "../common/Functions";

function FormPlay() {
  const {
    requestCards,
    requestCardsContinental,
    playerOne,
    playerTwo,
    setPlayerOne,
    setPlayerTwo,
    setPlayerOneCardToDelete,
    setPlayerTwoCardToDelete
  } = useGame();

  const handleClick = async () => {
    await requestCards();
  };

  useEffect(() => {
    async function fetchData() {
      await requestCardsContinental();
    }
    fetchData();
  }, []);

  const evaluateConditions = () => {
    //PLAYER ONE
    const groupByArrayPlayerOne = groupBy(playerOne.cards, "value");
    const stepsWinPlayerOne = validateStepsTaken(groupByArrayPlayerOne, playerOne.cards);
    const cardToDeletePlayerOne = groupByArrayPlayerOne.filter((groupBy) => groupBy.length == 1);
    if (cardToDeletePlayerOne.length > 0) {
      setPlayerOneCardToDelete(cardToDeletePlayerOne[0][0].code);
    } else {
      const cardToDeleteAuxPlayerOne = groupByArrayPlayerOne.filter(
        (groupBy) => groupBy.length == 2
        );
        setPlayerOneCardToDelete(cardToDeleteAuxPlayerOne[0][0].code);
      }
      setPlayerOne({...playerOne, win: stepsWinPlayerOne});

    //PLAYER 2
    const groupByArrayPlayerTwo = groupBy(playerTwo.cards, "value");
    const stepsWinPlayerTwo = validateStepsTaken(groupByArrayPlayerTwo, playerTwo.cards);
    const cardToDeletePlayerTwo = groupByArrayPlayerTwo.filter(
      (groupBy) => groupBy.length === 1
    );
    if (cardToDeletePlayerTwo.length > 0) {
      setPlayerTwoCardToDelete(cardToDeletePlayerTwo[0][0].code);
    } else {
      const cardToDeleteAuxPlayerTwo = groupByArrayPlayerTwo.filter(
        (groupBy) => groupBy.length == 2
      );
      setPlayerTwoCardToDelete(cardToDeleteAuxPlayerTwo[0][0].code);
    }
    setPlayerTwo({...playerTwo, win: stepsWinPlayerTwo});
  };

  return (
    <Stack gap={2} className="col-md-5 mx-auto">
      <Button onClick={handleClick} variant="secondary">
        Cards
      </Button>
      <Button onClick={evaluateConditions} variant="secondary">
        Evaluate
      </Button>
    </Stack>
  );
}

export default FormPlay;
