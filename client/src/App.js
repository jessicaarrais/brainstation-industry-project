import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublishEpisode from "./pages/PublishEpisode/PublishEpisode";
import ConfirmationPage from "./pages/ConfirmationPage/ConfirmationPage";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/episode-page" element={<EpisodePage />} /> */}
        <Route path="/episode-page/publish/" element={<PublishEpisode />} />
        {/* <Route
          path="/episode-page/publish/:title/:description/:seasonNumber/:episodeNumber"
          element={<TrailerLengthSelection />}
        /> */}
        <Route
          path="/episode-page/publish/:title/:description/:seasonNumber/:episodeNumber"
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
