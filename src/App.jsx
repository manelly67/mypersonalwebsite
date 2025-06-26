import { useState, useEffect } from "react";
import rain_large from "./assets/img/rain/large_raining.jpg";
import rain_medium from "./assets/img/rain/medium_raining.jpg";
import rain_small from "./assets/img/rain/small_raining.jpg";
import sun_large from "./assets/img/sun/sunny_day_large.jpg";
import sun_medium from "./assets/img/sun/sunny_day_medium.jpg";
import sun_small from "./assets/img/sun/sunny_day_small.jpg";
import Icon from '@mdi/react';
import { mdiCircleDouble } from '@mdi/js';
import "./styles/App.css";
import ToggleTheme from "./components/ToggleTheme";
import Raining from "./animation/Raining";
import Sunny from "./animation/Sunny";
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
  const pictureIn = activeIndex === 0 ? false : true;

  const { animateOut } = styles1;
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

  return (
    <>
      <main>
        <section>
          <header>
           <div className={!pictureIn ? "headerDiv" : "headerPict"}>
           <h1>{myName}</h1>
           </div>
          </header>
          <section className={!pictureIn ? "aboutMe" : "aboutMeHalf"}>
            <h2>My portfolio</h2>
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
          />
          <button
            className={buttonD}
            onClick={() => {
              fading();
              setActiveIndex(0);
            }}
            title="clear"
          >
            <Icon path={mdiCircleDouble} size={1} />
          </button>
        </aside>
      </main>
    </>
  );
}

export default App;
