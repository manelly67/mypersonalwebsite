import Icon from '@mdi/react';
import { mdiOpenInNew } from '@mdi/js';
import { arrayProjects } from "../assets/text-content";
import { github } from "../assets/icons-source";
import styles from "../styles/Projects.module.css";

const Projects = (props) => {

const { content, divImgArticle, divNameArticle, divDescriptionArticle, projectImg, text, divIcons } = styles;


const listProjects = arrayProjects.map((e)=>(
   <article key={e.id} id={e.id} >
    <div className={divImgArticle}>
        <img
        src={e.screenshotProjectSource}
        className={projectImg}
        width=""
        height=""
        alt={`screenshot project ${e.projectName} github manelly67`}
        />
    </div>
    <div className={divNameArticle}>
        <h3 style={{gridColumn:'1/2'}}>{e.projectName}</h3>
        <div style={{gridColumn:'2/3'}} className={divIcons}>
            <a href={e.githubHref} target="_blank" rel="noopener noreferrer"><img href={github} width='30px' height='30px'></img></a>
            <a href={e.projectNewWindow} target="_blank" rel="noopener noreferrer"><Icon path={mdiOpenInNew} size={1} /></a>
        </div>
    </div>
    <div className={divDescriptionArticle}>
        <p className={text}>{e.projectDescription}</p>
        <p>more projects details</p>
    </div>
   </article>
));

    return(
        <>
        <section className={content}>
            {listProjects.length>0 ? listProjects : null}
        </section>
        </>
    );

};

export default Projects;