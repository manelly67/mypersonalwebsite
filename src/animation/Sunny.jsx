import styles from "../styles/Slides.module.css";

const Sunny = (props) => {
  const {
    isActive,
    onShow,
    fading,
    sun_large,
    sun_medium,
    sun_small,
    screenWidth,
    screenHeight,
  } = props;
  const { animateIn } = styles;
 

  return (
    <>
      {isActive ? (
        <>
          <picture id="sun_img" className={animateIn}>
            <source media="(min-width: 981px)" srcSet={sun_large} />
            <source
              media="(min-width:391px) and (max-width:980px)"
              srcSet={sun_medium}
            />
            <img
              src={sun_small}
              width={screenWidth}
              height={screenHeight}
              style={{
                backgroundImage: "url(/src/assets/img/sun/lo_sunny.jpg)",
              }}
              alt="flock of birds flying under a blue sky on a sunny day"
            />
          </picture>
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
           onClick={()=>{
            fading();
            setTimeout(onShow,1200);
           }} 
           >SUN</button>
        </>
      )}
    </>
  );
};

export default Sunny;
