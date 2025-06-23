import { useState, useEffect } from "react";
import rain_large from "./assets/img/rain/large_raining.jpg";
import rain_medium from "./assets/img/rain/medium_raining.jpg";
import rain_small from "./assets/img/rain/small_raining.jpg";
import "./styles/App.css";
import Raining from "./animation/Raining";

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
      <main className="container">
        
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
          <button>sun</button>
        </aside>
      </main>
    </>
  );
}

export default App;
