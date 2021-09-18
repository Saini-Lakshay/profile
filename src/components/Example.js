import * as React from "react";
import { motion, useViewportScroll } from "framer-motion";
import "./Components.css";
import insta from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import { COLORS } from "../assets/colors";

export const Example = () => {
  return (
    <motion.div
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        loop: Infinity,
        repeatDelay: 1,
      }}
    />
  );
};

const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

export const Connect = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <motion.div
      layout
      data-isOpen={isOpen}
      initial={{ borderRadius: 50 }}
      className="parent"
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.div
        layout
        className="child"
        style={
          isOpen
            ? {
                backgroundColor: "transparent",
                display: "flex",
                flex: 1,
              }
            : { backgroundColor: "red" }
        }
      >
        {isOpen && (
          <div
            style={{
              width: "50vw",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div
              id="insta_connect_div"
              onClick={() => {
                openInNewTab("https://www.instagram.com/lakshay_saini_2501/");
              }}
            >
              <img
                id="instagram_pic_connect"
                src={insta}
                alt="instagram"
                style={{
                  // border: `5px solid ${COLORS.defaultColor}`,
                  display: "block",
                  objectFit: "cover",
                  height: "50px",
                  width: "50px",
                }}
              />
            </div>
            <div
              id="twitter_connect_div"
              onClick={() => {
                openInNewTab("https://twitter.com/Lakshay_2501");
              }}
            >
              <img
                id="twitter_pic_connect"
                src={twitter}
                alt="twitter"
                style={{
                  // border: `5px solid ${COLORS.defaultColor}`,
                  display: "block",
                  objectFit: "cover",
                  height: "50px",
                  width: "50px",
                }}
              />
            </div>
            <div
              id="linkedin_connect_div"
              onClick={() => {
                openInNewTab(
                  "https://www.linkedin.com/in/lakshay-saini-59542414b/"
                );
              }}
            >
              <img
                id="linkedin_pic_connect"
                src={linkedin}
                alt="linkedin"
                style={{
                  // border: `5px solid ${COLORS.defaultColor}`,
                  display: "block",
                  objectFit: "cover",
                  height: "50px",
                  width: "50px",
                }}
              />
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};
