import { useEffect } from "react";
import { Button, Stack } from "react-bootstrap";
import useGame from "../hooks/useGame";

function FormPlay() {
  const { requestCards, requestCardsContinental } = useGame();

  const handleClick = async () => {
    await requestCards();
  };

  useEffect(() => {
    async function fetchData() {
      const response = await requestCardsContinental();
    }
    fetchData();
  }, []);

  return (
    <Stack gap={2} className="col-md-5 mx-auto">
      <Button onClick={handleClick} variant="secondary">
        Cards
      </Button>
    </Stack>
  );
}

export default FormPlay;
