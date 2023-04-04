import { useNavigate } from "react-router-dom";
import descriptionImg from "../../assets/images/Description Page -Static.png";
import episodePage from "../../assets/images/Series Page - Static.png";
import "./PublishEpisode.scss";
import { useEffect, useRef, useState } from "react";

export default function PublishEpisode() {
  const navigate = useNavigate();
  const page1Ref = useRef();
  const page2Ref = useRef();
  const [clickedButton, setClickedButton] = useState(false);

  useEffect(() => {
    // page1Ref.current.classList.add("fade-out");
    setClickedButton(false);
  }, []);

  const handleChangePage = (e) => {
    e.preventDefault();
    setClickedButton(true);
    // page1Ref.current.classList.add("fade-out");
    // page2Ref.current.classList.add("fade-out");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.title);
    const title = e.target.title.value;
    const description = e.target.description.value;
    const seasonNumber = e.target.seasonNumber.value;
    const episodeNumber = e.target.episodeNumber.value;

    navigate(
      `/episode-page/publish/${title}/${description}/${seasonNumber}/${episodeNumber}`
    );
  };

  return (
    <>
      <main className={`${clickedButton ? "fade-out" : "active"}`}>
        <div className="container">
          <img
            className="background"
            src={episodePage}
            alt="Static Background"
          />

          <button
            className="primaryButton primaryButton--top"
            onClick={handleChangePage}
          >
            <span className="primaryButtonText">Confirm</span>
          </button>
        </div>
      </main>

      <main
        ref={page2Ref}
        className={`${clickedButton ? "fade-in" : "inactive"}`}
      >
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
    </>
  );
}
