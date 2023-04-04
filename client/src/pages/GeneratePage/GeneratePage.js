import "./GeneratePage.scss";
import page from "../../assets/pages/Generation Page - Static.png";

export default function GeneratePage({ title, description, seasonNumber, episodeNumber }) {
    return (
        <>
            <div className="publish__container">
                <img src={page} alt="page screenshot" className="publish__page--image"></img>
                {/* <div className="trailer__clip">
                <input className="trailer__clip--length"
                    name="time"
                    type="length"
                    value='30 seconds'
                    checked={checked}
                    onChange={handleChange} />
                <label className="editAddItem__radio-label" htmlFor="status">In stock</label> */}
                <Checkbox
                    label="30 seconds"
                    value={checkedOne}
                    onChange={handleCheckOne}
                />
                <Checkbox
                    label="60 seconds"
                    value={checkedTwo}
                    onChange={handleCheckTwo}
                />
                <Checkbox
                    label="90 seconds"
                    value={checkedThree}
                    onChange={handleCheckThree}
                />
            </div>
        </>
    )
};