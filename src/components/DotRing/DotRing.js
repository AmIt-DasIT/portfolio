import React, { useContext } from "react";
import "./DotRing.css";
import useMousePosition from "../../hooks/useMousePosition";
import { MouseContext } from "../../context/mouse-context";

const DotRing = () => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const { x, y } = useMousePosition();
  return (
    <>
      <div
        className={"dot " + cursorType}
        style={{ left: `${x-12}px`, top: `${y-10}px` }}
      ></div>
    </>
  );
};

export default DotRing;
