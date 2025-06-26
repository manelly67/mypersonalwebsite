import Icon from '@mdi/react';
import { mdiWeatherRainy } from '@mdi/js';
import styles1 from "../styles/Slides.module.css";
import styles2 from "../styles/Buttons.module.css";

const Raining = (props) => {
  const {
    isActive,
    onShow,
    fading,
    rain_large,
    rain_medium,
    rain_small,
    screenWidth,
    screenHeight,
  } = props;

  const { animateIn } = styles1;
  const { buttonB } = styles2;
  const imgWidth =
    screenWidth <= 391
      ? screenWidth
      : screenWidth > 980
      ? screenWidth * 0.5
      : screenWidth * 0.85;

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
          >
            <Icon path={mdiWeatherRainy} size={1} />
          </button>
        </>
      )}
    </>
  );
};

export default Raining;
