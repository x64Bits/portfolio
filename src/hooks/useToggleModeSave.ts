import { useState } from "react";

const useToggleModeSave: any = () => {
  let initialMode = JSON.parse(localStorage.getItem("darkMode") as string);
  const [darkMode, setDarkMode] = useState(initialMode);
  window.addEventListener("storage", e => {
    console.warn(e);
    if (e.key === "darkMode") {
      setDarkMode(!!e.newValue);
    }
  });
  return darkMode;
};

export default useToggleModeSave;
