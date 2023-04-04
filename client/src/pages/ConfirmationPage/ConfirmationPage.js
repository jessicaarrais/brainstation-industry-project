import "./ConfirmationPage.scss";
import confirmationImg from "../../assets/images/Confirmation - Static.png";
import audioClip from "../../assets/images/Audio 3 Box.svg";
import { useParams } from "react-router-dom";

export default function ConfirmationPage() {
  const { title, description, seasonNumber, episodeNumber } = useParams();

  return (
    <main>
      <div className="container">
        <img
          className="background"
          src={confirmationImg}
          alt="Static Background"
        />

        <label htmlFor="title"></label>
        <p className="title">{title}</p>
        <p className="description">{description}</p>

        <p className="seasonNumber">{seasonNumber}</p>
        <p className="episodeNumber">{episodeNumber}</p>

        <img className="audio-clip" src={audioClip} alt="Audio Clip" />

        <button className="primaryButton">
          <span className="primaryButtonText">Confirm</span>
        </button>
      </div>
    </main>
  );
}
