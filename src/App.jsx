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
import dropImg from "./assets/img/rain/drop.png";
import Sunny from "./animation/Sunny";
import animation from "./animation/Slides.module.css";
import { fading } from "./animation/auxFunct";
/* components and content */
import ToggleTheme from "./components/ToggleTheme";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Details from "./components/Details";
import {
  myName,
  textContentAboutMe,
  arrayProjects,
  textContentContactMe,
  mailText,
  githubAccount,
  linkedinAccount,
} from "./assets/text-content";


function App() {
  const body = document.querySelector("body");
  if (body) {
    document.body.className = "light";
  }
  const titleDiv = document.querySelector("title");
  if (titleDiv) {
    titleDiv.textContent = `${myName}'s Portfolio`;
  }
  const [key, setKey] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedProj, setSelectedProj] = useState(null);
  const pictureIn = activeIndex === 0 ? false : true;
  const { animateIn, rotate, shining, suspend, falling } = animation;
  const { buttonD } = styles;
  // locate the drop
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [endcoords, setEndcoords] = useState({ x: 0, y: 0 });
  const wideImg = (Number(endcoords.x) - Number(coords.x));
  const heightImg = (Number(endcoords.y) - Number(coords.y));
  
  const drop = (
    <img
      key={key}
      id="drop"
      src={dropImg}
      width="10px"
      height="15px"
      alt="drop"
      style={{
        top: `${coords.y + 0.3 * heightImg }px`,
        left: `${coords.x + 0.15 * wideImg }px`,
       }}
      className={suspend}
    />
  )
 

  useEffect(() => {
    setScreenWidth(window.screen.width);
    setScreenHeight(window.screen.height);
  }, [screenWidth, screenHeight]);

  useEffect(()=>{
    if(activeIndex===1){
      window.addEventListener('scroll', 
        () => {
          if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            document.getElementById('drop').classList.remove(`${suspend}`);
            document.getElementById('drop').classList.add(`${falling}`);
          }
        },
        false
      );
      return () => {
        window.removeEventListener('scroll', 
          () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
              document.getElementById('drop').classList.remove(`${suspend}`);
              document.getElementById('drop').classList.add(`${falling}`);
            }
          },
          false
        );
      };
    }
  },[activeIndex,suspend,falling]);

  function clear() {
    setKey((prevKey) => prevKey + 1);
    setActiveIndex(0);
  }

  return (
    <>
      <main>
        {activeIndex===1 ? (<>{drop}</> ): null } 
        <section
          key={key}
          className={
            !pictureIn ? `${animateIn} expanded` : `${animateIn} strechted`
          }
        >
          <header>
            <div className={!pictureIn ? "headerDiv" : "headerPict"}>
              <h1>{myName}</h1>

              {activeIndex === 1 ? (
                <div id="umbrella">
                  <Icon path={mdiUmbrella} size={2} className={rotate} />
                </div>
              ) : activeIndex === 2 ? (
                <div id="sunglasses" className={shining}>
                  <Icon path={mdiSunglasses} size={2} className={rotate} />
                </div>
              ) : null}
            </div>
          </header>

          <section
            className={!pictureIn ? "aboutMe" : "aboutMeHalf"}
            translate="yes"
          >
            <div>
              <h2>NodeJs React Portfolio</h2>
            </div>
           
            <div>
              <h3>About Me</h3>
              {!textContentAboutMe ? null : textContentAboutMe}
            </div>
          </section>

          {!showDetails ? (
            <Projects
              setSelectedProj={setSelectedProj}
              setShowDetails={setShowDetails}
              arrayProjects={arrayProjects}
            />
          ) : (
            <Details
              selectedProj={selectedProj}
              setShowDetails={setShowDetails}
              arrayProjects={arrayProjects}
            />
          )}

          <ContactMe
            pictureIn={pictureIn}
            screenWidth={screenWidth}
            textContentContactMe={textContentContactMe}
            mailText={mailText}
            githubAccount={githubAccount}
            linkedinAccount={linkedinAccount}
          />
        </section>

        <aside>
          <ToggleTheme theme="light" setKey={setKey} />
          <Raining
            screenWidth={screenWidth}
            screenHeight={screenHeight}
            isActive={activeIndex === 1}
            onShow={() => setActiveIndex(1)}
            fading={fading}
            setCoords={setCoords}
            setEndcoords={setEndcoords}
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
      </main>
    </>
  );
}

export default App;
