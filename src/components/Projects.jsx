import Icon from "@mdi/react";
import { mdiOpenInNew } from "@mdi/js";
import { mdiDetails } from "@mdi/js";
import { github } from "../assets/icons-source";
import styles from "../styles/Projects.module.css";
import buttons from "../styles/Buttons.module.css";
import Additional from "./Additional";

const Projects = (props) => {
  const { setSelectedProj, setShowDetails, arrayProjects, additionalContent } =
    props;
  const githubImg = new Image();
  githubImg.src = github;
  const {
    content,
    divImgArticle,
    divNameArticle,
    divDescriptionArticle,
    projectImg,
    divIcons,
    shadow,
  } = styles;

  const { buttonE } = buttons;

  const listProjects = arrayProjects.map((e) => (
    <article key={e.id} id={e.id}>
      <div className={divImgArticle}>
        <img
          src={e.screenshotProjectSource}
          className={projectImg}
          alt={`screenshot project ${e.projectName} github manelly67`}
          width="400px"
          height="270px"
        />
      </div>
      <div className={divNameArticle}>
        <h3 style={{ gridColumn: "1/2" }}>{e.projectName}</h3>
        <div style={{ gridColumn: "2/3" }} className={divIcons}>
          {!e.githubHref ? null : (
            <a
              href={e.githubHref}
              target="_blank"
              rel="noopener noreferrer"
              title="github repository"
            >
              <img
                src={githubImg.src}
                width="30px"
                height="30px"
                className={shadow}
                alt="github icon"
              />
            </a>
          )}

          {!e.details ? null : (
            <a
              href={e.details}
              target="_blank"
              rel="noopener noreferrer"
              title="project details"
            >
              <Icon path={mdiDetails} size={1.2} />
            </a>
          )}

          <a
            href={e.projectNewWindow}
            target="_blank"
            rel="noopener noreferrer"
            title="page preview"
          >
            <Icon path={mdiOpenInNew} size={1.2} />
          </a>
        </div>
      </div>
      <div className={divDescriptionArticle}>
        <p>{e.projectDescription}</p>
      </div>
    </article>
  ));

  return (
    <>
      <section className={content}>
        {listProjects.length > 0 ? listProjects : null}
        {additionalContent.length > 0 ? (
          <Additional additionalContent={additionalContent} shadow={shadow} />
        ) : null}
      </section>
    </>
  );
};

export default Projects;
