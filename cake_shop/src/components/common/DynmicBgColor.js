import { useState, useEffect } from "react";

const colors = [
  "#ffd7d7", // (255,215,215)
  "#fffcd4", // (255,252,212)
  "#d9ffd7", // (217,255,215)
  "#d7e5ff", // (215,229,255)
  "#f8d5ff", // (248,213,255)
];

const useDynamicBackgroundColor = () => {
  const [backgroundColor, setBackgroundColor] = useState(colors[0]);

  const changeBackgroundColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBackgroundColor(randomColor);
  };

  useEffect(() => {
    changeBackgroundColor();
    const interval = setInterval(changeBackgroundColor, 5000);
    return () => clearInterval(interval);
  }, []);

  return backgroundColor;
};

export default useDynamicBackgroundColor;