import { useState, useEffect } from "react";
import rain_large from "./assets/img/rain/large_raining.jpg";
import rain_medium from "./assets/img/rain/medium_raining.jpg";
import rain_small from "./assets/img/rain/small_raining.jpg";
import sun_large from "./assets/img/sun/sunny_day_large.jpg";
import sun_medium from "./assets/img/sun/sunny_day_medium.jpg";
import sun_small from "./assets/img/sun/sunny_day_small.jpg";
import "./styles/App.css";
import Raining from "./animation/Raining";
import Sunny from "./animation/Sunny";

function App() {
  const body = document.querySelector("body");
  const titleDiv = document.querySelector("title");
  const [activeIndex, setActiveIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
  }, [screenWidth, screenHeight]);

  return (
    <>
      <main>
        <section>
          <h1>My personal website</h1>
          <h3>my personal website</h3>
          <p>my personal website</p>
        </section>

        <aside>
          <Raining
            screenWidth={screenWidth}
            screenHeight={screenHeight}
            rain_large={rain_large}
            rain_medium={rain_medium}
            rain_small={rain_small}
            isActive={activeIndex === 1}
            onShow={() => setActiveIndex(1)}
          />
          <Sunny
            screenWidth={screenWidth}
            screenHeight={screenHeight}
            sun_large={sun_large}
            sun_medium={sun_medium}
            sun_small={sun_small}
            isActive={activeIndex === 2}
            onShow={() => setActiveIndex(2)}
          />
        </aside>
      </main>
    </>
  );
}

export default App;
