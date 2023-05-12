import React from "react";
import firstimage from "../Carimages/firstimage.jpg";
import secondimage from "../Carimages/secondimage.jpg";
import thirdimage from "../Carimages/thirdimage.jpg";
import fourthimage from "../Carimages/fourthimage.jpg";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import "./image.css"

function Image() {
  const images = [secondimage,firstimage , thirdimage, fourthimage];

  const [index, setIndex] = useState(0);

  const prevImg = () => {
    const len = images.length;
    if (index === 0) setIndex(len - 1);
    else setIndex(index - 1);
  };

  const nextImg = () => {
    const len = images.length;
    if (index === len - 1) setIndex(0); 
    else setIndex(index + 1);
  };
  return (
    <div className="image">
      <div onClick={prevImg} className="prev">
        <ArrowBackIosIcon />
      </div>
      <div>
        <img src={images[index]} alt="" />
      </div>

      <div onClick={nextImg} className="next">
        <ArrowForwardIosIcon />
      </div>
    </div>
  );
}

export default Image;
