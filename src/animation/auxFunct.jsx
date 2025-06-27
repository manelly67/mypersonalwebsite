import styles from "./Slides.module.css";

const { animateOut, shining } = styles;

function fading() {
  const picture = document.querySelector("picture");
  if (picture) {
    picture.className = animateOut;
  }
}

function sunglassesAnimation() {
  const div = document.getElementById("sunglasses");
  if (div) {
    div.className = "";
    div.className = `${shining}`;
  }
}

export { fading, sunglassesAnimation };
