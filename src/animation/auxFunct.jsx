import styles from "./Slides.module.css";

const { animateOut } = styles;

function fading() {
  const picture = document.querySelector("picture");
  if (picture) {
    picture.className = animateOut;
  }
}


export { fading };
