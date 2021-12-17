import { Link } from "react-router-dom";
import { Zoom } from "react-reveal";
import "./home.css";

export default function Home() {
  return (
    <div className="cont">
      <p className="choose">Choose One</p>
      <div className="grd">
        <Link className="item" to="/happybirthday/wish">
          <Zoom>Happy Birthday</Zoom>
        </Link>
        <Link className="item" to="/happybirthday/meme">
          <Zoom delay={600}>Memes</Zoom>
        </Link>
        <Link className="item" to="/happybirthday/letter">
          <Zoom delay={1200}>Letter</Zoom>
        </Link>
        <Link className="item" to="/happybirthday/us">
          <Zoom delay={1800}>Us</Zoom>
        </Link>
      </div>
    </div>
  );
}
