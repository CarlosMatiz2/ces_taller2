import { Container, Navbar } from "react-bootstrap";
import { TfiGame } from "react-icons/tfi";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <div className="d-inline-block align-top">
            <TfiGame />
          </div>{" "}
          Deck Of Cards API
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
