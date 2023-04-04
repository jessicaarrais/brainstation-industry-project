import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublishEpisode from "./pages/PublishEpisode/PublishEpisode";
import ConfirmationPage from "./pages/ConfirmationPage/ConfirmationPage";
import "./App.scss";
import RegeneratePage from "./pages/RegeneratePage/RegeneratePage";
import GeneratePage from "./pages/GeneratePage/GeneratePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/episode-page" element={<EpisodePage />} /> */}
        <Route path="/episode-page/publish/" element={<PublishEpisode />} />
        <Route
          path="/episode-page/publish/:title/:description/:seasonNumber/:episodeNumber"
          element={<GeneratePage />}
        />
        <Route
          path="/episode-page/publish/:title/:description/:seasonNumber/:episodeNumber/g"
          element={<GeneratePage />}
        />
        <Route
          path="/episode-page/publish/:title/:description/:seasonNumber/:episodeNumber/g/r"
          element={<RegeneratePage />}
        />
        <Route
          path="/episode-page/publish/:title/:description/:seasonNumber/:episodeNumber/g/r/confirm"
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
