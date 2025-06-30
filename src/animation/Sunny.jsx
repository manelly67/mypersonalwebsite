import sun_large from "../assets/img/sun/sunny_day_large.jpg";
import sun_medium from "../assets/img/sun/sunny_day_medium.jpg";
import sun_small from "../assets/img/sun/sunny_day_small.jpg";
import Icon from '@mdi/react';
import { mdiWeatherSunny } from '@mdi/js';
import styles1 from "./Slides.module.css";
import styles2 from "../styles/Buttons.module.css";

const Sunny = (props) => {
  const {
    isActive,
    onShow,
    screenWidth,
    screenHeight,
    fading,
  } = props;
  const { animateIn, bright } = styles1;
  const { buttonC } = styles2;
  const imgWidth =
    screenWidth <= 430
      ? screenWidth
      : screenWidth > 980
      ? screenWidth * 0.5
      : screenWidth * 0.85;

  

  return (
    <>
      {isActive ? (
        <>
          <picture id="sun_img" className={animateIn}>
            <source media="(min-width: 981px)" srcSet={sun_large} />
            <source
              media="(min-width:431px) and (max-width:980px)"
              srcSet={sun_medium}
            />
            <img
              src={sun_small}
              width={imgWidth}
              height={screenHeight}
              style={{
                backgroundImage: "url(/src/assets/img/sun/lo_sunny.jpg)",
              }}
              alt="flock of birds flying under a blue sky on a sunny day"
            />
          </picture>
          <div
            className={bright}
            style={{
              width: `${imgWidth * 0.4}px`,
              height: `${screenHeight * 0.75}px`,
            }}
          ></div>
          <div className="thanks_to">
            <p>
              This photo is from
              <a
                style={{ paddingLeft: "3px", paddingRight: "3px" }}
                href="https://unsplash.com/es/@jennalee89?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jenna Lee
              </a>
              on
              <a
                style={{ paddingLeft: "3px" }}
                href="https://unsplash.com/es/fotos/fotografia-de-angulo-bajo-de-bandada-de-pajaros-volando-bajo-el-cielo-azul-durante-el-dia-y_UoVbNBU_Q?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
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
            className={buttonC}
            onClick={() => {
              fading();
              setTimeout(onShow, 599);
            }}
            aria-label="Weather Sunny"
          >
            <Icon path={mdiWeatherSunny} size={1.2} />
          </button>
        </>
      )}
    </>
  );
};

export default Sunny;
