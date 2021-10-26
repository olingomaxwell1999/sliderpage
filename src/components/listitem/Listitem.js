import React from "react";
import "./listitem.scss";
import Fatherhood from "./Fatherhood.jpg";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownAltOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import trailer from "./trailer.mp4";

const Listitem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={Fatherhood} alt="fatherhood" />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />

          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hr 14 mins</span>
              <span className="limit">+15</span>
              <span>2021</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Praesentium corporis doloribus omnis
            </div>

            <div className="genre">Comedy</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Listitem;
