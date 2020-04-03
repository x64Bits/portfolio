import React, { FC, useState } from "react";
import "./styles.css";
import ToggleMode from "../../components/ToggleMode";
import useToggleModeSave from "../../hooks/useToggleModeSave";
import SEO from "../../components/seo";
import { Link } from "react-router-dom";
import sidePreview from "../../assets/images/side-preview.png";
import avatar from "../../assets/images/avatar.png";
import { ReactComponent as LinkedInIcon } from "../../assets/images/social-linkedin.svg";
import { ReactComponent as GithubIcon } from "../../assets/images/social-github.svg";
import { ReactComponent as TwitterIcon } from "../../assets/images/social-twitter.svg";
//@ts-ignore
import Fade from "react-reveal/Fade";

const IndexPage: FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const toggleModeStatus = useToggleModeSave();
  const [darkMode, toggleDarkMode] = useState(toggleModeStatus);
  return (
    <>
      <SEO title="Home" />
      <div
        className={`md:grid md:grid-cols-2 sm:flex sm:flex-col-reverse home-container ${
          darkMode ? "dark-container" : "light-container"
        }`}
      >
        <Fade>
          <div className="flex justify-center preview-container">
            <div className="h-screen side-preview-container">
              <img
                src={sidePreview}
                className="object-contain h-screen side-preview"
                alt="Preview of Projects"
              />
            </div>
            <div className="portfolio-button-container overflow-visible">
              <div className="portfolio-button-shadow" />
              <Link to="/projects" className="portfolio-button">
                <h2>PROJECTS</h2>
              </Link>
            </div>
          </div>
        </Fade>
        <div className="flex toggle-container flex-col max-h-screen">
          <ToggleMode
            classes="flex px-8 justify-end pt-6 self-end"
            toggleParent={() => toggleDarkMode(!darkMode)}
          />
          <div className="flex justify-center flex-col flex-1 info-container">
            <div className="avatar-container py-4 self-end mr-12">
              <img src={avatar} alt="Me :)" className="avatar object-contain" />
            </div>
            <p className="mx-8 text-right description my-4 pl-16">
              Hi!{" "}
              <span role="img" aria-label="Greetings">
                👋
              </span>{" "}
              my name is <b>Ignacio Zsabo</b> I am a 24-year-old software
              developer with more than 5 years of experience in the creation of
              mobile applications and web platforms.
            </p>
            <Fade>
              <div className="flex flex-row justify-end px-8 social-icon-container">
                <a
                  href="https://www.linkedin.com/in/ignacio-zsabo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon
                    title="LinkedIn Link"
                    className="social-icon px-2 overflow-visible"
                  />
                </a>
                <a
                  href="https://github.com/x64Bits"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon
                    title="Github Link"
                    className="social-icon px-2 overflow-visible"
                  />
                </a>
                <a
                  href="https://twitter.com/SpaceForgerDev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterIcon
                    title="Twitter Link"
                    className="social-icon px-2 overflow-visible"
                  />
                </a>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
