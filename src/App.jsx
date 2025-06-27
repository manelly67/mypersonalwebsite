import { useState, useEffect } from "react";
import rain_large from "./assets/img/rain/large_raining.jpg";
import rain_medium from "./assets/img/rain/medium_raining.jpg";
import rain_small from "./assets/img/rain/small_raining.jpg";
import sun_large from "./assets/img/sun/sunny_day_large.jpg";
import sun_medium from "./assets/img/sun/sunny_day_medium.jpg";
import sun_small from "./assets/img/sun/sunny_day_small.jpg";
import Icon from "@mdi/react";
import { mdiCircleDouble } from "@mdi/js";
import { mdiUmbrella } from "@mdi/js";
import { mdiSunglasses } from "@mdi/js";
import "./styles/App.css";
import ToggleTheme from "./components/ToggleTheme";
import Raining from "./animation/Raining";
import Sunny from "./animation/Sunny";
import Projects from "./components/Projects";
import styles1 from "./styles/Slides.module.css";
import styles2 from "./styles/Buttons.module.css";
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

  const { animateIn, animateOut, rotate, shining } = styles1;
  const { buttonD } = styles2;

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
  }, [screenWidth, screenHeight]);

  function fading() {
    const picture = document.querySelector("picture");
    if (picture) {
      picture.className = animateOut;
    }
  }

  function clear() {
    setActiveIndex(0);
    clearAnyInterval();
  }

  function clearAnyInterval() {
    if (setInterval(sunglassesAnimation)) {
      clearInterval(sunglassesAnimation);
    }
  }

  function sunglassesAnimation() {
    const div = document.getElementById("sunglasses");
    if (div) {
      div.className = "";
      div.className = `${shining}`;
    }
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
            rain_large={rain_large}
            rain_medium={rain_medium}
            rain_small={rain_small}
            isActive={activeIndex === 1}
            onShow={() => setActiveIndex(1)}
            fading={fading}
          />
          <Sunny
            screenWidth={screenWidth}
            screenHeight={screenHeight}
            sun_large={sun_large}
            sun_medium={sun_medium}
            sun_small={sun_small}
            isActive={activeIndex === 2}
            onShow={() => setActiveIndex(2)}
            fading={fading}
            sunglassesAnimation={sunglassesAnimation}
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
