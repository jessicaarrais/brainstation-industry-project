import { BrowserRouter, Routes, Route } from "react-router-dom";
import TrailerLengthSelection from "./pages/TrailerLengthSelection/TrailerLengthSelection";
import "./App.scss";
import RegeneratePage from "./pages/RegeneratePage/RegeneratePage";
import GeneratePage from "./pages/GeneratePage/GeneratePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/create/trailer_length"
          element={<TrailerLengthSelection />}
        />
        <Route
          path="/create/recommended_clips"
          element={<RegeneratePage />}
        />

        <Route
          path="/create/generate_page"
          element={<GeneratePage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;