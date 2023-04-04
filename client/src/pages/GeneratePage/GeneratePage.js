import "./GeneratePage.scss";
import page from "../../assets/pages/Generation-Page -Static.png";
import { useParams } from "react-router-dom";
import React from "react";
import generateButton from "../../assets/icons/Generate-trailer-clips.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function GeneratePage() {
  const { title, description, seasonNumber, episodeNumber } = useParams();
  const navigate = useNavigate();

  const [checkedState, setCheckedState] = useState([false]);
  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  return (
    <>
      <div className="generate__container">
        <img
          src={page}
          alt="page screenshot"
          className="generate__page--image"
        ></img>
        <div className="generate__radio">
          <form className="generate__form">
            <ul className="clip__length">
              <li key={0}>
                <input
                  type="radio"
                  className="checkbox-style"
                  label="30 seconds"
                  id="option1"
                  checked={checkedState[0]}
                  onChange={() => handleOnChange(0)}
                />
                <span className="clip_length--text">30 seconds</span>
              </li>
              <li key={1}>
                <input
                  type="radio"
                  className="checkbox-style"
                  label="30 seconds"
                  id="option2"
                  checked={checkedState[1]}
                  onChange={() => handleOnChange(1)}
                />
                <span className="clip_length--text">60 seconds</span>
              </li>
              <li key={2}>
                <input
                  type="radio"
                  className="checkbox-style"
                  label="30 seconds"
                  id="option3"
                  checked={checkedState[2]}
                  onChange={() => handleOnChange(2)}
                />
                <span className="clip_length--text">90 seconds</span>
              </li>
            </ul>
          </form>
        </div>
        <div className="generate__button--clips">
          <Link
            to={`/episode-page/publish/${title}/${description}/${seasonNumber}/${episodeNumber}/g/r`}
          >
            <img
              src={generateButton}
              alt="generate button"
              className="generate__button--image"
            ></img>
          </Link>
        </div>
        <div className="generate__button--next">
          <button
            onClick={() =>
              navigate(
                `/episode-page/publish/${title}/${description}/${seasonNumber}/${episodeNumber}/g/r`
              )
            }
            className="next__button"
          >
            Publish
          </button>
        </div>
      </div>
    </>
  );
}
