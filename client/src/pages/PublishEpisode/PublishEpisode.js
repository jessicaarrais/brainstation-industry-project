import { useNavigate } from "react-router-dom";
import descriptionImg from "../../assets/images/Description Page -Static.png";
import "./PublishEpisode.scss";

export default function PublishEpisode() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.title);
    const title = e.target.title.value;
    const description = e.target.description.value;
    const seasonNumber = e.target.seasonNumber.value;
    const episodeNumber = e.target.episodeNumber.value;

    navigate(
      `/publish-episode/${title}/${description}/${seasonNumber}/${episodeNumber}`
    );
  };

  return (
    <main>
      <div className="container">
        <img
          className="background"
          src={descriptionImg}
          alt="Static Background"
        />
        <form onSubmit={handleSubmit}>
          <label htmlFor="title"></label>
          <input
            name="title"
            type="text"
            id="episodeTitle"
            className="inputField"
            placeholder="Enter title"
          />
          <textarea
            name="description"
            id="episodeDescription"
            type="text"
            className="inputField"
            placeholder="Enter description"
          ></textarea>
          <input
            name="seasonNumber"
            id="seasonNumber"
            type="number"
            className="inputFeild"
          />
          <input
            name="episodeNumber"
            id="episodeNumber"
            type="number"
            className="inputFeild"
          ></input>

          <button className="primaryButton">
            <span className="primaryButtonText">Next</span>
          </button>
        </form>
      </div>
    </main>
  );
}
