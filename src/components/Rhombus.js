import React from "react";
import { COLORS } from "../assets/colors";
import "./Components.css";

const Rhombus = (props) => {
  return (
    <div
      className="rhombus"
      style={{
        height: props.size,
        width: props.size,
        backgroundColor: props.color,
        borderRadius: 0.25 * props.size,
      }}
    ></div>
  );
};

export default Rhombus;
