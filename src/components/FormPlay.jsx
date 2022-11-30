import { Button, Stack } from "react-bootstrap";
import useGame from "../hooks/useGame";

function FormPlay() {
  const { requestCards } = useGame();
  const handleClick = async() => {
    await requestCards();
  };

  return (
    <Stack gap={2} className="col-md-5 mx-auto">
      <Button onClick={handleClick} variant="secondary">
        Cards
      </Button>
    </Stack>
  );
}

export default FormPlay;
