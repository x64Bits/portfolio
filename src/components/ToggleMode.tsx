import React, { FC, useState, useEffect } from "react";
import bodymovin from "lottie-web";
import useToggleModeSave from "../hooks/useToggleModeSave";
const toggleFile = require("../assets/dark-light-switch.json");

let toggleAnimation: any = null;

interface Props {
  toggleParent: Function;
  classes?: string;
}
let manifest: any = document.getElementById("manifest");

const ToggleMode: FC<Props> = ({ toggleParent, classes }) => {
  const toggleModeSave = useToggleModeSave();
  const [localMode, toggleLocalMode] = useState(toggleModeSave);

  useEffect(() => {
    toggleAnimation = bodymovin.loadAnimation({
      container: document.getElementById("anim") as HTMLElement,
      renderer: "svg",
      loop: false,
      autoplay: toggleModeSave,
      animationData: toggleFile
    });

    if (toggleModeSave) {
      document.body.className = "dark-body";
      manifest.href = "/manifest-dark.json";
    } else {
      document.body.className = "light-body";
      manifest.href = "/manifest.json";
    }
  }, [toggleModeSave]);

  const handleToggleMode = () => {
    toggleParent(localMode);
    localStorage.setItem("darkMode", `${!localMode}`);
    if (localMode) {
      toggleAnimation.setDirection(-1);
      toggleAnimation.play();
      document.body.className = "light-body";
      manifest.href = "/manifest.json";
    } else {
      toggleAnimation.setDirection(1);
      toggleAnimation.play();
      document.body.className = "dark-body";
      manifest.href = "/manifest-dark.json";
    }
    toggleLocalMode(!localMode);
  };
  return (
    <div
      onClick={() => handleToggleMode()}
      className={classes}
      style={{ height: "fit-content", width: "fit-content" }}
    >
      <div id="anim" />
    </div>
  );
};

export default ToggleMode;
