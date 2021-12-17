import { useEffect, useRef, useState } from "react";
// import moment from "moment";
import "./countdown.css";

const bday = new Date("Dec 18, 2021 00:00:00").getTime();

export default function Countdown() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  let interval = useRef();

  const startTimer = () => {
    interval = setInterval(() => {
      const now = new Date().getTime();
      const countdown = bday - now;
      if (countdown < 0) {
        clearInterval(interval.current);
      } else {
        const hours = Math.floor(
          (countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (countdown % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((countdown % (1000 * 60)) / 1000);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
  });

  return (
    <div className="cnt-container">
      <div className="countdown-wrapper">
        <div className="countdown-item">
          <SVGCircle radius={mapNumber(hours, 24, 0, 360, 0)} />
          {hours}
          <span>hours</span>
        </div>
        <div className="countdown-item">
          <SVGCircle radius={mapNumber(minutes, 60, 0, 360, 0)} />
          {minutes}
          <span>minutes</span>
        </div>
        <div className="countdown-item">
          <SVGCircle radius={mapNumber(seconds, 60, 0, 360, 0)} />
          {seconds}
          <span>seconds</span>
        </div>
      </div>
    </div>
  );
}

const SVGCircle = ({ radius }) => (
  <svg className="countdown-svg">
    <circle cx="50" cy="50" r="46" stroke="#999" stroke-width="1" fill="none" />
    <path
      fill="none"
      stroke="#333"
      strokeWidth="5"
      d={describeArc(50, 50, 48, 0, radius)}
    />
  </svg>
);

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function describeArc(x, y, radius, startAngle, endAngle) {
  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);

  var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  var d = [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(" ");

  return d;
}

function mapNumber(number, in_min, in_max, out_min, out_max) {
  return (
    ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  );
}
