import React from "react";

const SchemeColor = ({ hexColor }) => {
  return (
    <div className="scheme-color" style={{ backgroundColor: hexColor }}>
      <p> {hexColor} </p>
    </div>
  );
};
export default SchemeColor;
