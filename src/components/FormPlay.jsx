import { useEffect } from "react";
import { Button, Stack } from "react-bootstrap";
import useGame from "../hooks/useGame";
import groupBy from "../common/Functions";

function FormPlay() {
  const {
    requestCards,
    requestCardsContinental,
    playerOne,
    playerTwo,
    setPlayerOneCardToDelete,
    setPlayerTwoCardToDelete,
  } = useGame();

  const handleClick = async () => {
    await requestCards();
  };

  useEffect(() => {
    async function fetchData() {
      const response = await requestCardsContinental();
    }
    fetchData();
  }, []);

  const evaluateConditions = () => {
    //PLAYER ONE
    const groupByArrayPlayerOne = groupBy(playerOne.cards, "value");
    const ternasPlayerOne = groupByArrayPlayerOne.filter(
      (groupBy) => groupBy.length == 3
    );
    const cuartaPlayerOne = groupByArrayPlayerOne.filter(
      (groupBy) => groupBy.length == 4
    );

    if (ternasPlayerOne.length == 2 && cuartaPlayerOne.length == 1) {
      console.log("player one won");
    }

    const cardToDeletePlayerOne = groupByArrayPlayerOne.filter(
      (groupBy) => groupBy.length == 1
    );

    if (cardToDeletePlayerOne.length > 0) {
      setPlayerOneCardToDelete(cardToDeletePlayerOne[0][0].code);
    } else {
      const cardToDeleteAuxPlayerOne = groupByArrayPlayerOne.filter(
        (groupBy) => groupBy.length == 2
      );
      setPlayerOneCardToDelete(cardToDeleteAuxPlayerOne[0][0].code);
    }

    //PLAYER 2
    const groupByArrayPlayerTwo = groupBy(playerTwo.cards, "value");
    const ternasPlayerTwo = groupByArrayPlayerTwo.filter(
      (groupBy) => groupBy.length == 3
    );
    const cuartaPlayerTwo = groupByArrayPlayerTwo.filter(
      (groupBy) => groupBy.length == 4
    );

    if (ternasPlayerTwo.length == 2 && cuartaPlayerTwo.length == 1) {
      console.log("player two won");
    }

    const cardToDeletePlayerTwo = groupByArrayPlayerTwo.filter(
      (groupBy) => groupBy.length == 1
    );

    if (cardToDeletePlayerTwo.length > 0) {
      setPlayerTwoCardToDelete(cardToDeletePlayerTwo[0][0].code);
    } else {
      const cardToDeleteAuxPlayerTwo = groupByArrayPlayerTwo.filter(
        (groupBy) => groupBy.length == 2
      );
      setPlayerTwoCardToDelete(cardToDeleteAuxPlayerTwo[0][0].code);
    }
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
