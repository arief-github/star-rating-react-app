import React, { useState } from "react";
import "./styles.css";

import StarRating from "./component/StarRating/StarRating.js";

import colorData from "./data/color-data.json";
import ColorList from "./component/Colors/ColorList.js";

export default function App() {
  const [colors] = useState(colorData);

  return (
    <div className="App">
      <StarRating
        style={{ backgroundColor: "lightblue" }}
        onDoubleClick={(e) => alert("double click")}
      />
      <br />
      <ColorList colors={colors} />
    </div>
  );
}
