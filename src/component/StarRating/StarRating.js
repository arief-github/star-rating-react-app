import React, { useState } from "react";
import Star from "./Star";

const createArray = (length) => [...Array(length)];

const StarRating = ({ style = {}, totalStar = 5, ...props }) => {
  const [selectedStar, setSelectedStar] = useState(0);

  return (
    <div style={{ padding: "5px", ...style }} {...props}>
      {createArray(totalStar).map((n, i) => (
        <Star
          key={i}
          selected={selectedStar > i}
          onSelect={() => setSelectedStar(i + 1)}
        />
      ))}
      <p>
        {selectedStar} of {totalStar} stars
      </p>
    </div>
  );
};

export default StarRating;
