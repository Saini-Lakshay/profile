import React, { useState } from "react";
import { COLORS } from "../assets/colors";
import Rhombus from "../components/Rhombus";
import "./NewScreenCSS.css";
import profile from "../assets/profile_2.jpeg";
// import profile from "../assets/profile.jpeg";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { Connect, Example } from "../components/Example";
import { Hamburger } from "../components/Hamburger";

const NewScreen = () => {
  return (
    <div
      id="container"
      style={{
        backgroundColor: COLORS.defaultBackground,
        color: COLORS.defaultWhite,
      }}
    >
      <Hamburger />
      <div id="section-1" style={{ position: "relative" }}>
        <span style={{ position: "absolute", top: "-5vh", left: "-20vw" }}>
          <div
            style={{
              height: "50vw",
              width: "50vw",
              backgroundColor: COLORS.defaultBackgroundLight,
              borderRadius: "10vw",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transform: "rotate(45deg)",
              position: "absolute",
              //   marginLeft: "-10vw",
            }}
          ></div>
        </span>
        <span style={{ position: "absolute", top: "10vh", left: "40vw" }}>
          <Rhombus size={70} color={COLORS.defaultColor} />
        </span>
        <span style={{ position: "absolute", top: "5vh", left: "65vw" }}>
          <Rhombus size={70} color={COLORS.defaultBackgroundLight} />
        </span>
        <span style={{ position: "absolute", top: "25vh", left: "80vw" }}>
          <Rhombus size={70} color={COLORS.defaultColor} />
        </span>
        <span
          style={{
            color: "white",
            marginLeft: "15vw",
            marginTop: "40vh",
            position: "absolute",
            fontSize: "4rem",
            letterSpacing: "3px",
          }}
        >
          Hi, I am Lakshay ..
        </span>
        <span
          style={{
            color: COLORS.defaultColor,
            marginLeft: "15vw",
            marginTop: "55vh",
            position: "absolute",
            fontSize: "1.8rem",
            letterSpacing: "2px",
            fontFamily: "sans-serif",
          }}
        >
          .. a developer!
        </span>
        <img
          id="profile-image"
          src={profile}
          alt="scroll down..."
          style={{
            border: `5px solid ${COLORS.defaultColor}`,
            display: "block",
            objectFit: "cover",
          }}
        />
      </div>

      <div
        id="section-2"
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="example-container">
          <Example key={0} />
        </div>
        <div className="example-container2">
          <Example key={1} />
        </div>
        <Connect key={3} />
      </div>
    </div>
  );
};

export default NewScreen;
