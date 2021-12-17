import "./meme.css";
import im1 from "../../images/1.png";
import im2 from "../../images/2.png";
import im3 from "../../images/3.png";
import im4 from "../../images/4.png";
import im5 from "../../images/5.png";
import im6 from "../../images/6.png";
import im7 from "../../images/7.png";
import { Zoom, Bounce } from "react-reveal";

export default function Meme() {
  return (
    <div className="me-cont">
      <div>Please laugh at them... It took a lot of efforts UwU</div>
      <Zoom right>
        <img className="meme" src={im1} alt="meme" />
      </Zoom>
      <Zoom right>
        <img className="meme" src={im2} alt="meme" />
      </Zoom>
      <Bounce>
        <img className="meme" src={im3} alt="meme" />
      </Bounce>
      <Bounce>
        <img className="meme" src={im4} alt="meme" />
      </Bounce>
      <Zoom right>
        <img className="meme" src={im5} alt="meme" />
      </Zoom>
      <Zoom left>
        <img className="meme" src={im6} alt="meme" />
      </Zoom>
      <Zoom right>
        <img className="meme" src={im7} alt="meme" />
      </Zoom>
    </div>
  );
}
