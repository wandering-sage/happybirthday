import "./wish.css";
import bg from "../../images/bg.png";
import lily from "../../images/lily.png";
import bb from "../../images/bb.png";
import { Fade } from "react-reveal";

export default function Wish() {
  return (
    <div className="w-cont">
      <img className="bg" src={bg} alt="backGround" />
      <Fade delay="600" top>
        <div className="mt20">
          And here is some random stuff that I found nearby...
        </div>
      </Fade>
      <Fade delay="1500">
        <img className="gift" src={lily} alt="white lily" />
      </Fade>
      <Fade delay="2100">
        <img className="gift" src={bb} alt="white lily" />
      </Fade>
    </div>
  );
}
