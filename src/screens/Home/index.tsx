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

const IndexPage: FC = () => {
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
        <div className="flex justify-center">
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
              PROJECTS
            </Link>
          </div>
        </div>
        <div className="flex toggle-container flex-col max-h-screen">
          <ToggleMode toggleParent={() => toggleDarkMode(!darkMode)} />
          <div className="flex justify-center flex-col flex-1">
            <div className="avatar-container py-4">
              <img src={avatar} alt="Me :)" className="avatar" />
            </div>
            <p className="mx-8 text-right description my-4 pl-16">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
              delectus, quae non, iste magnam aut labore vero quam quos
              mollitia, ab obcaecati pariatur fuga. Fugit ad eligendi voluptatum
              error quod?
            </p>
            <div className="flex flex-row justify-end px-8 social-icon-container">
              <LinkedInIcon
                title="LinkedIn Link"
                className="social-icon px-2 overflow-visible"
              />
              <GithubIcon
                title="Github Link"
                className="social-icon px-2 overflow-visible"
              />
              <TwitterIcon
                title="Twitter Link"
                className="social-icon px-2 overflow-visible"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
