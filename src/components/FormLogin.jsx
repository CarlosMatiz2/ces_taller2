import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useGame from "../hooks/useGame";

function FormLogin() {
  const { playerOne, setPlayerOne, playerTwo, setPlayerTwo, playGame } =
    useGame();
  const [validated, setValidated] = useState(false);

  const handleInputPlayerOne = (e) => {
    setPlayerOne({ ...playerOne, name: e.target.value });
  };

  const handleInputPlayerTwo = (e) => {
    setPlayerTwo({ ...playerTwo, name: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      await playGame();
      navigate("/game", { replace: true });
    }
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationPlayerOne">
          <Form.Label>Player One</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Player One"
            value={playerOne.name}
            onChange={handleInputPlayerOne}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationPlayerTwo">
          <Form.Label>Player Two</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Player Two"
            value={playerTwo.name}
            onChange={handleInputPlayerTwo}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button type="submit">Login</Button>
    </Form>
  );
}

export default FormLogin;
