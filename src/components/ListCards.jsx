import { Col, Container, Row } from "react-bootstrap";
import useGame from "../hooks/useGame";

function ListCards() {
  const { playerOne, playerTwo } = useGame();
  return (
    <Container>
      <Row>
        <Col>
          <div className="align-items-center my-2">
            <h4>Player {playerOne.name}</h4>
            <p>Cards obtained</p>
            {playerOne.cards.map((card, index) => (
              <img
                className="col-sm-4 col-lg-3 mx-2 my-2"
                key={index}
                src={card.image}
                alt={card.value}
              />
            ))}
          </div>
        </Col>
        <Col>
          <div className="align-items-center my-2">
            <h4>Player {playerTwo.name}</h4>
            <p>Cards obtained</p>
            {playerTwo.cards.map((card, index) => (
              <img
                className="col-sm-4 col-lg-3 mx-2 my-2"
                key={index}
                src={card.image}
                alt={card.value}
              />
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ListCards;
