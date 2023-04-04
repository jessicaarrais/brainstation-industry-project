import { BrowserRouter, Routes, Route } from "react-router-dom";
import TrailerLengthSelection from "./pages/TrailerLengthSelection/TrailerLengthSelection";
import RecommendedAudioClips from "./pages/RecommendedAudioClips/RecommendedAudioClips";
import PublishEpisode from "./pages/PublishEpisode/PublishEpisode";
import "./App.scss";
import ConfirmationPage from "./pages/ConfirmationPage/ConfirmationPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/publish-episode/" element={<PublishEpisode />} />
        {/* <Route
          path="/publish-episode/:title/:description/:seasonNumber/:episodeNumber"
          element={<TrailerLengthSelection />}
        /> */}
        <Route
          path="/publish-episode/:title/:description/:seasonNumber/:episodeNumber"
          element={<ConfirmationPage />}
        />
        {/* <Route
          path="/publish-episode/recommended_clips"
          element={<RecommendedAudioClips />}
        /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
