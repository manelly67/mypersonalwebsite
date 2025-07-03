import { useEffect,useCallback } from "react";
import rain_large from "../assets/img/rain/large_raining.jpg";
import rain_medium from "../assets/img/rain/medium_raining.jpg";
import rain_small from "../assets/img/rain/small_raining.jpg";
import Icon from "@mdi/react";
import { mdiWeatherRainy } from "@mdi/js";
import styles1 from "./Slides.module.css";
import styles2 from "../styles/Buttons.module.css";

const Raining = (props) => {
  const { isActive, onShow, screenWidth, screenHeight, fading, setCoords, setEndcoords } = props;

  const { animateIn } = styles1;
  const { buttonB } = styles2;
  const imgWidth =
    screenWidth <= 430
      ? screenWidth
      : screenWidth > 980
      ? screenWidth * 0.5
      : screenWidth * 0.85;

      const getImgCoord = useCallback((arg) => {
        const imageRef = arg.firstChild;
        if (imageRef) {
          const rect = imageRef.getBoundingClientRect();
          setCoords({
            x: Number(rect.left.toFixed(10)),
            y: Number(rect.top.toFixed(10)),
          });
          setEndcoords({
            x: Number(rect.right.toFixed(10)),
            y: Number(rect.bottom.toFixed(10)),
          });
        }
      }, [setCoords,setEndcoords]);

  useEffect(()=>{
    if(isActive){
      if (document.getElementById("umbrella") !== null) {
        getImgCoord(document.getElementById("umbrella"));
      }
    }
  },[isActive, getImgCoord, screenWidth]);

  return (
    <>
      {isActive ? (
        <>
          <picture id="rain_img" className={animateIn}>
            <source media="(min-width: 981px)" srcSet={rain_large} />
            <source
              media="(min-width:391px) and (max-width:980px)"
              srcSet={rain_medium}
            />
            <img
              src={rain_small}
              width={imgWidth}
              height={screenHeight}
              style={{
                backgroundImage: "url(/src/assets/img/rain/lo_raining.jpg)",
              }}
              alt="water droplets on the windshield of the car"
            />
          </picture>
          <div className="thanks_to">
            <p>
              This photo is from
              <a
                style={{ paddingLeft: "3px", paddingRight: "3px" }}
                href="https://unsplash.com/es/@kshar2?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                target="_blank"
                rel="noopener noreferrer"
              >
                kiryl
              </a>
              on
              <a
                style={{ paddingLeft: "3px" }}
                href="https://unsplash.com/es/fotos/gotas-de-agua-en-el-parabrisas-del-coche-g-H8Hn83wA8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                target="_blank"
                rel="noopener noreferrer"
              >
                Unsplash
              </a>
            </p>
          </div>
        </>
      ) : (
        <>
          <button
            className={buttonB}
            onClick={() => {
              fading();
              setTimeout(onShow, 599);
            }}
            aria-label="Weather rainy"
          >
            <Icon path={mdiWeatherRainy} size={1} />
          </button>
        </>
      )}
    </>
  );
};

export default Raining;
