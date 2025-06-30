import { useState } from "react";
import Icon from "@mdi/react";
import { mdiThemeLightDark } from "@mdi/js";
import styles from "../styles/Buttons.module.css";

const ToggleTheme = (props) => {
  const [theme, setTheme] = useState(props.theme);
  const { buttonA } = styles;

  const body = document.querySelector("body");
  if (body) {
    document.body.className = theme;
  }

  function toggleTheme() {
    const newTheme = body.className === "dark" ? "light" : "dark";
    setTheme(newTheme);
    props.setKey((prevKey) => prevKey + 1);
  }

  return (
    <button
      className={buttonA}
      onClick={() => {
        toggleTheme();
      }}
      aria-label="toggle theme dark/light"
    >
      <Icon path={mdiThemeLightDark} size={1} />
    </button>
  );
};

export default ToggleTheme;
