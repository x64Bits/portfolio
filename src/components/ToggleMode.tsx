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
let appleIcon: any = document.getElementById("apple-icon");

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
      appleIcon.href = "/logo192-dark.png";
    } else {
      document.body.className = "light-body";
      manifest.href = "/manifest.json";
      appleIcon.href = "/logo192-light.png";
    }
  }, [toggleModeSave]);

  const handleToggleMode = () => {
    toggleParent(localMode);
    localStorage.setItem("darkMode", `${!localMode}`);
    if (localMode) {
      toggleAnimation.setDirection(-1);
      toggleAnimation.play();
      document.body.className = "light-body";
      setManifest("light");
      setAppleLogo("light");
    } else {
      toggleAnimation.setDirection(1);
      toggleAnimation.play();
      document.body.className = "dark-body";
      setManifest("dark");
      setAppleLogo("dark");
    }
    toggleLocalMode(!localMode);
  };

  const setManifest = (mode: string) => {
    document.head.removeChild(manifest);
    let newManifest = document.createElement("link");
    newManifest.id = "manifest";
    newManifest.rel = "manifest";
    switch (mode) {
      case "dark":
        newManifest.href = "/manifest-dark.json";
        document.head.appendChild(newManifest);
        break;
      case "light":
        newManifest.href = "/manifest.json";
        document.head.appendChild(newManifest);
        break;
    }
    manifest = newManifest;
  };

  const setAppleLogo = (mode: string) => {
    document.head.removeChild(appleIcon);
    let newAppleLogo = document.createElement("link");
    newAppleLogo.id = "apple-icon";
    newAppleLogo.rel = "apple-touch-icon";
    switch (mode) {
      case "dark":
        newAppleLogo.href = "/logo192-dark.png";
        document.head.appendChild(newAppleLogo);
        break;
      case "light":
        newAppleLogo.href = "/logo192-light.png";
        document.head.appendChild(newAppleLogo);
        break;
    }
    appleIcon = newAppleLogo;
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
