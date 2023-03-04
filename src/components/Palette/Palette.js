import React from "react";
import SchemeColor from "../SchemeColor";

const Palette = ({
  name,
  description,
  image,
  colors,
  attribution,
  direction,
}) => (
  <div className="palette">
    <div
      className={`palette-scheme ${
        direction === "vertical"
          ? "palette-scheme--vertical"
          : "palette-scheme--horizontal"
      }`}
    >
      <img className="scheme-image" src={image} alt="Ocean Waves" />
      <div className="scheme-colors">
        {colors.map((color) => (
          <SchemeColor key={color} hexColor={color} />
        ))}
      </div>
    </div>
    <div className="palette-info">
      <h2> {name} </h2>
      <p>{description}</p>

      <p>
        Photo by{" "}
        <a href={attribution.url} target="_blank">
          {attribution.name}
        </a>
        .
      </p>
    </div>
  </div>
);

export default Palette;
