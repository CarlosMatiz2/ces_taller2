import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GameProvider from "./context/GameProvider";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import Header from "./components/Header";

function App() {
  return (
    <GameProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<GamePage />} />
        </Routes>
      </BrowserRouter>
    </GameProvider>
  );
}

export default App;
