import { github } from "../assets/icons-source";
import { linkedin } from "../assets/icons-source";
import Icon from "@mdi/react";
import { mdiEmailOutline } from "@mdi/js";
import { mdiFileDownload } from '@mdi/js';
import photo from "../assets/img/photo-footer.png";

const ContactMe = (props) => {
  const {
    pictureIn,
    screenWidth,
    textContentContactMe,
    mailText,
    githubAccount,
    linkedinAccount,
  } = props;
  const githubImg = new Image();
  githubImg.src = github;
  const linkedinImg = new Image();
  linkedinImg.src = linkedin;

  const imgWidth =
    screenWidth <= 430
      ? screenWidth * 0.7
      : screenWidth > 980
      ? screenWidth * 0.2
      : screenWidth * 0.3;

  return (
    <>
      <footer
        className={!pictureIn ? "contactMe" : "contactMeHalf"}
        translate="yes"
      >
        <h3>Contact me</h3>
        <p>{textContentContactMe}</p>
        <div>
          <div>
            <div className="infoRow">
              <Icon path={mdiEmailOutline} size={1.1} />
              <p>{mailText}</p>
            </div>
            <div className="infoRow">
              <a
                href={linkedinAccount}
                target="_blank"
                rel="noopener noreferrer"
                title="github account"
              >
                <img
                  src={linkedinImg.src}
                  width="30px"
                  height="30px"
                  className="shadow"
                />
              </a>
              <p>{linkedinAccount}</p>
            </div>
            <div className="infoRow">
              <a
                href={githubAccount}
                target="_blank"
                rel="noopener noreferrer"
                title="github account"
              >
                <img
                  src={githubImg.src}
                  width="30px"
                  height="30px"
                  className="shadow"
                />
              </a>
              <p>{githubAccount}</p>
            </div>
            <div className="infoRow">
            <Icon path={mdiFileDownload} size={1.1} />
            <p>Download CV</p>
            </div>
          </div>

          <img
            src={photo}
            style={{ alignSelf: "flex-end", paddingRight: "2%" }}
            width={imgWidth}
            height="auto"
            alt={`portfolio's owner`}
          />
        </div>
      </footer>
    </>
  );
};

export default ContactMe;
