import { github_pull_shark } from "../assets/icons-source";
import styles from "../styles/Additional.module.css";

const Additional = (props) => {
  const { additionalContent, shadow } = props;
  const { additionalInf, pull_div } = styles;
  const githubPullImg = new Image();
  githubPullImg.src = github_pull_shark;

  return (
    <>
      {additionalContent[0] ? (
        <>
          <article className={additionalInf}>
            <div>
              <h3>{additionalContent[0]["title"]}</h3>
            </div>
            <div>
              <p>{additionalContent[0]["text"]}</p>
            </div>
            <div className={pull_div}>
              <p>PR:</p>
              <p>{additionalContent[0]["PR1_text"]}</p>
              <a
                href={additionalContent[0]["PR1_link"]}
                target="_blank"
                rel="noopener noreferrer"
                title="pull request merged"
              >
                <img
                  src={githubPullImg.src}
                  width="40px"
                  height="40px"
                  className={shadow}
                  alt="github pull shark icon"
                />
              </a>
            </div>
            <div className={pull_div}>
              <p>PR:</p>
              <p>{additionalContent[0]["PR2_text"]}</p>
              <a
                href={additionalContent[0]["PR2_link"]}
                target="_blank"
                rel="noopener noreferrer"
                title="pull request merged"
              >
                <img
                  src={githubPullImg.src}
                  width="40px"
                  height="40px"
                  className={shadow}
                  alt="github pull shark icon"
                />
              </a>
            </div>
          </article>
        </>
      ) : null}
    </>
  );
};

export default Additional;
