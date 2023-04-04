import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./TrailerLengthSelection.scss";

export default function TrailerLengthSelection() {
  const navigate = useNavigate();

  return (
    <main>
      <h1>This is a TrailerLengthSelection</h1>
      <Button text="BACK" emphasis="low-emphasis" />
      <Button
        text="NEXT"
        emphasis="low-emphasis"
        handleOnClick={() => navigate("/create/recommended_clips")}
      />
    </main>
  );
}
