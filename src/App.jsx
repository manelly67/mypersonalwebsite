import { useState, useEffect } from "react";
/* assets */
import Icon from "@mdi/react";
import { mdiCircleDouble } from "@mdi/js";
import { mdiUmbrella } from "@mdi/js";
import { mdiSunglasses } from "@mdi/js";
/* styles */
import "./styles/App.css";
import styles from "./styles/Buttons.module.css";
/* animation components */
import Raining from "./animation/Raining";
import Sunny from "./animation/Sunny";
import animation from "./animation/Slides.module.css";
import { fading } from "./animation/auxFunct";
/* components and content */
import ToggleTheme from "./components/ToggleTheme";
import Projects from "./components/Projects";
import { myName, textContentAboutMe } from "./assets/text-content";

function App() {
  const body = document.querySelector("body");
  if (body) {
    document.body.className = "light";
  }
  const titleDiv = document.querySelector("title");
  if (titleDiv) {
    titleDiv.textContent = `${myName}'s Portfolio`;
  }
  const [activeIndex, setActiveIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedProj, setSelectedProj] = useState(null);
  const pictureIn = activeIndex === 0 ? false : true;

  const { animateIn, rotate } = animation;
  const { buttonD } = styles;

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
  }, [screenWidth, screenHeight]);

  function clear() {
    setActiveIndex(0);
  }

  return (
    <>
      <main>
        <section className={animateIn}>
          <header>
            <div className={!pictureIn ? "headerDiv" : "headerPict"}>
              <h1>{myName}</h1>
            </div>
          </header>
          <section className={!pictureIn ? "aboutMe" : "aboutMeHalf"}>
            <div>
              {activeIndex === 1 ? (
                <Icon path={mdiUmbrella} size={2} />
              ) : activeIndex === 2 ? (
                <div id="sunglasses">
                  <Icon path={mdiSunglasses} size={2} className={rotate} />
                </div>
              ) : null}
              <h2>My portfolio</h2>
            </div>

            <div>
              <h3>About Me</h3>
              <p>{textContentAboutMe}</p>
            </div>
          </section>
        </section>

        <aside>
          <ToggleTheme theme="light" />
          <Raining
            screenWidth={screenWidth}
            screenHeight={screenHeight}
            isActive={activeIndex === 1}
            onShow={() => setActiveIndex(1)}
            fading={fading}
          />
          <Sunny
            screenWidth={screenWidth}
            screenHeight={screenHeight}
            isActive={activeIndex === 2}
            onShow={() => setActiveIndex(2)}
            fading={fading}
          />
          <button
            className={buttonD}
            onClick={() => {
              fading();
              setTimeout(clear, 600);
            }}
            title="clear"
          >
            <Icon path={mdiCircleDouble} size={1} />
          </button>
        </aside>

        {!showDetails ? (
          <Projects
            setSelectedProj={setSelectedProj}
            setShowDetails={setShowDetails}
          />
        ) : null}
      </main>
    </>
  );
}

export default App;
