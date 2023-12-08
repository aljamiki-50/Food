import React from "react";
import { BsFillPlayFill, BsPauseFill, BsPlayFill } from "react-icons/bs";
import { meal } from "../../constants";
import "./Intro.css";
import { useState } from "react";

const Intro = () => {
  const [playvideo, setPlayvideo] = useState(false);
  const videRef = React.useRef();
  const handleVid = () => {
    setPlayvideo((prevplayvideo) => !prevplayvideo);
    if (videRef) {
      videRef.current.play();
    } else {
      videRef.current.pause();
    }
  };

  return (
    <div className="app__video">
      <video src={meal} type="video/mp4" loop ref={videRef} controls={false} />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVid}
        >
          {playvideo ? (

            <BsPauseFill color="#fff" fontSize={30} />
          ): <BsPlayFill color="#fff" fontSize={30} />}
        </div>
      </div>
    </div>
  );
};

export default Intro;
