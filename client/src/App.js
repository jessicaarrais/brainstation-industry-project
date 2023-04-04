import { BrowserRouter, Routes, Route } from "react-router-dom";
import TrailerLengthSelection from "./pages/TrailerLengthSelection/TrailerLengthSelection";
import "./App.scss";
import RecommendedAudioClips from "./pages/RecommendedAudioClips/RecommendedAudioClips";

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
          element={<RecommendedAudioClips />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
