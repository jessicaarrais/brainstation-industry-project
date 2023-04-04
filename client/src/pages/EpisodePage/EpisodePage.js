import "./EpisodePage.scss";
import episodePage from "../../assets/images/Series Page - Static.png";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function EpisodePage() {
  const navigate = useNavigate();
  const pageRef = useRef();

  const handleChangePage = (e) => {
    e.preventDefault();
    console.log(pageRef.current.classList);
    pageRef.current.classList.add("fade-out");
    setTimeout(() => navigate("publish"), 2000);
  };

  return (
    <main className="active" ref={pageRef}>
      <div className="container">
        <img className="background" src={episodePage} alt="Static Background" />

        <button
          className="primaryButton primaryButton--top"
          onClick={handleChangePage}
        >
          <span className="primaryButtonText">Confirm</span>
        </button>
      </div>
    </main>
  );
}
