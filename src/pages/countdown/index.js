import { Link } from "react-router-dom";
import Typical from "react-typical";
import { Timer } from "../../components/timer/timer";
import "./countdown.css";

const bday = new Date("Dec 18, 2021 00:00:00").getTime();

export default function Countdown() {
  const now = new Date().getTime();
  return (
    <div className="cnt-container">
      <Timer />
      {bday > now ? (
        <></>
      ) : (
        <Link className="link" to="/happybirthday/home">
          <button className="launch">Its Time</button>
        </Link>
      )}

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
