import Typical from "react-typical";
import { Timer } from "../../components/timer/timer";
import "./countdown.css";

export default function Countdown() {
  return (
    <div className="cnt-container">
      <Timer />
      <div className="spl-txt">
        <Typical
          steps={[
            "Hiring a Unicorn 🦄",
            1500,
            "Gathering Stars ✨",
            1500,
            "Bribing cute Puppies 🐶",
            1500,
            "Taking Suggestion from Dwight 📝",
            1500,
            "Plucking White Lilys 🌸 ",
            1500,
            "Lightning candles 🕯️",
            1500,
            "Blowing Balloons 🎈",
            1500,
          ]}
          loop={Infinity}
        />
      </div>
    </div>
  );
}
