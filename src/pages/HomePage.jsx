import { Col, Container, Row } from "react-bootstrap";
import FormLogin from "../components/FormLogin";

function HomePage() {
  return (
    <>
      <Container className="my-4">
        <Row className="justify-content-md-center">
          <Col>
            <FormLogin />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
