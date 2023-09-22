import React from "react";
import "./Box.css";
import { BsThreeDots } from "react-icons/bs";
import Image from "next/image";
const img="https://img.lovepik.com/photo/20230422/small/lovepik-moving-paint-visual-perfume-series-background-design-of-vibrant-flow-of-photo-image_352430503.jpg"
const Box = () => {
  return (
    <div className="box">
      <div className="firstBox">
        <h6>important</h6>
        <BsThreeDots />
      </div>
      <div className="secondBox">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quidem voluptas ad illo veniam? Ex eveniet unde provident quidem autem ducimus. Dolor excepturi fugit ea esse quidem doloribus delectus modi perferendis officiis?</p>
      </div>
      <div className="thirdBox">
        <input type="range" min={0} max={100} value={50} contentEditable='false'/>
      </div>
      <div className="FourthBox">
      <div>

        <img  src={img} style={{width:'35px',height:'35px',borderRadius:'50%'}}  alt="img" />
        <img  src={img} style={{width:'35px',height:'35px',borderRadius:'50%'}}  alt="img" />
        <img  src={img} style={{width:'35px',height:'35px',borderRadius:'50%'}}  alt="img" />
        <img  src={img} style={{width:'35px',height:'35px',borderRadius:'50%'}}  alt="img" />
      </div>
<div className="due">
    due in 10 days
</div>
      </div>
    </div>
  );
};

export default Box;
