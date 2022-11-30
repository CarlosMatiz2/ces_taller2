import { Toast, ToastContainer } from "react-bootstrap";
import useGame from "../hooks/useGame";

function ToastWinner() {
  const { showToast, setShowToast, winName } = useGame();

  return (
    <ToastContainer className="p-3" position="top-start">
      <Toast
        onClose={() => setShowToast(false)}
        show={showToast}
        animation={false}
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Winner</strong>
        </Toast.Header>
        <Toast.Body>{winName}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default ToastWinner;
