import React, { useRef, useState } from "react";
import "./Screens.css";
import profile from "../assets/profile.jpeg";
import backImage from "../assets/backImage2.jpeg";
import scrollGif from "../assets/scrollGif.gif";
import backgroundSvg from "../assets/backgroundSvg.svg";

const visible = "block";
const hidden = "none";

export default function MainScreen(props) {
  const ImageRef = useRef();

  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);
  const [portion, setPortion] = useState(0);
  const [scrollTopVal, setScrollTop] = useState(0);

  const onScrollContainer = () => {
    const elem = ImageRef.current;
    if (elem?.scrollTop) {
      setScrollTop(elem.scrollTop);
    }
    if (elem?.scrollTop <= window.innerHeight) {
      setHeight(window.innerHeight + elem.scrollTop);
      setWidth(window.innerWidth + elem.scrollTop);
    }
    if (elem?.scrollTop <= 1.3 * window.innerHeight && portion !== 0) {
      setPortion(0);
    } else if (
      elem?.scrollTop > 1.3 * window.innerHeight &&
      elem?.scrollTop <= 2.5 * window.innerHeight &&
      portion !== 1
    ) {
      setPortion(1);
    } else if (elem?.scrollTop > 2.5 * window.innerHeight && portion !== 2) {
      setPortion(2);
    }
  };

  console.log("Scroll Top --> ", scrollTopVal);
  console.log("window innerHeight --> ", window.innerHeight);

  return (
    <div
      ref={ImageRef}
      onScroll={() => {
        onScrollContainer();
      }}
      id="main-container"
    >
      <div id="header" style={{ opacity: `1` }}>
        <span id={portion === 0 ? "selectedHeaderOption" : "headerOption"}>
          Home
        </span>
        <span id={portion === 1 ? "selectedHeaderOption" : "headerOption"}>
          About
        </span>
        <span id={portion === 2 ? "selectedHeaderOption" : "headerOption"}>
          Contact
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          id="div-image"
          style={{
            backgroundImage: `url(${backgroundSvg})`,
            height: `${height}px`,
            width: `${width}px`,
            opacity: `${(0.2 * window.innerHeight) / scrollTopVal}`,
            top: `${
              scrollTopVal > 0.2 * window.innerHeight
                ? 0.2 * window.innerHeight
                : scrollTopVal
            }px`,
          }}
        ></div>
        <span
          style={{
            color: "white",
            fontFamily: "monospace",
            fontSize: "4vw",
            opacity: `${
              scrollTopVal <= window.innerHeight / 2
                ? scrollTopVal / (window.innerHeight / 2 - 100)
                : (window.innerHeight / 2 + 100) / scrollTopVal
            }`,
            position: "absolute",
            top: `45vh`,
            display: `${
              scrollTopVal < 0.2 * window.innerHeight || portion !== 0
                ? hidden
                : visible
            }`,
            cursor: "pointer",
          }}
        >
          Hello ! I am Lakshay Saini :)
        </span>
        <img
          id="scroll-gif"
          src={scrollGif}
          alt="scroll down..."
          style={{
            display: `${
              scrollTopVal < 0.2 * window.innerHeight ? visible : hidden
            }`,
          }}
        />
      </div>
      <div
        id="portion2-container"
        style={{
          // display: "flex",
          opacity: `${portion === 0 ? 0.1 : 1}`,
        }}
      >
        <span id="about-me">
          Love to make interesting stuff...
          <br />
          <br />
          Technologies I LOVE :
          <ul>
            <li>React JS</li>
            <li>React Native</li>
            <li>Java</li>
          </ul>
        </span>
        <div
          id="my-profile-pic"
          style={{
            backgroundImage: `url(${profile})`,
            opacity: `${scrollTopVal / window.innerHeight}`,
          }}
        ></div>
      </div>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <span style={{ color: "white", cursor: "pointer", fontSize: "5vw" }}>
          l.saini2501@gmail.com
        </span>
        <span style={{ color: "whitesmoke" }}>More stuff adding soon!!</span>
      </div>
    </div>
  );
}
