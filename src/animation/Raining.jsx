const Raining = (props) => {
  const {
    isActive,
    onShow,
    rain_large,
    rain_medium,
    rain_small,
    screenWidth,
    screenHeight,
  } = props;

  return (
    <>
      {isActive ? (
        <>
          <picture>
            <source media="(min-width: 981px)" srcSet={rain_large} />
            <source
              media="(min-width:391px) and (max-width:980px)"
              srcSet={rain_medium}
            />
            <img
              src={rain_small}
              width={screenWidth}
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
          <button onClick={onShow}>RAIN</button>
        </>
      )}
    </>
  );
};

export default Raining;
