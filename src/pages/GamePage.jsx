import { Col, Container, Row } from "react-bootstrap";
import FormPlay from "../components/FormPlay";
import ListCards from "../components/ListCards";
import ToastWinner from "../components/ToastWinner";

function GamePage() {
  return (
    <Container className="my-4">
      <Row className="justify-content-md-center">
        <Col xs={12}>
          <FormPlay />
        </Col>
        <Col>
          <ListCards />
        </Col>
      </Row>
      <Row>
        <Col>
          <ToastWinner />
        </Col>
      </Row>
    </Container>
  );
}

export default GamePage;
