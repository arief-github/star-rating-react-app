import React from "react";
import Color from "./Color";

const ColorList = ({ colors = [] }) => {
  // notify user when there's no color
  if (!colors.length) {
    return <div>No Colors Listed</div>;
  }

  return (
    <div>
      {colors.map((color) => (
        <Color key={color.id} {...color} />
      ))}
    </div>
  );
};

export default ColorList;
