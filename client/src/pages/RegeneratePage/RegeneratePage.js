import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import audioSvg from "../../assets/images/Property 1=Default.svg";
import Regenerate from "../../assets/pages/regenerate-page.png";
import regenerateButton from "../../assets/icons/Regenerate-clips-button.svg";
import Audio1 from "../../assets/audio/Audio-1.mp3";
import Audio2 from "../../assets/audio/Audio-2.mp3";
import Audio3 from "../../assets/audio/Audio-3.mp3";
import "../GeneratePage/GeneratePage.scss";
import "./RegeneratePage.scss";

export default function RegeneratePage() {
  const navigate = useNavigate();
  const { title, description, seasonNumber, episodeNumber } = useParams();

  return (
    <>
      <div className="generate__container">
        <img
          src={Regenerate}
          alt="page screenshot"
          className="regenerate__page--image"
        ></img>
        <div className="generate__button--next">
          <Link to="/create/recommended_clips">
            <img
              src={regenerateButton}
              alt="generate button"
              className="regenerate__button--image"
            ></img>
          </Link>
        </div>
      </div>
      <div className="regenerate__audio--clips">
        <img className="audio__svg--1" src={audioSvg} alt="audio clip" />
        <audio controls className="audio__clips">
          <source src={Audio1} type="audio/mpeg" />
        </audio>

        <img className="audio__svg--2" src={audioSvg} alt="audio clip" />
        <audio controls className="audio__clips">
          <source src={Audio2} type="audio/mpeg" />
        </audio>

        <img className="audio__svg--3" src={audioSvg} alt="audio clip" />
        <audio controls className="audio__clips">
          <source src={Audio3} type="audio/mpeg" />
        </audio>
      </div>
      <div className="generate__audio">
        <div className="generate__button--next">
          <button
            onClick={() =>
              navigate(
                `/episode-page/publish/${title}/${description}/${seasonNumber}/${episodeNumber}/g/r/confirm`
              )
            }
            className="next__button2"
          >
            Publish
          </button>
        </div>
      </div>
    </>
  );
}
