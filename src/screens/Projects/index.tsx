import React from "react";
import SEO from "../../components/seo";
import useToggleModeSave from "../../hooks/useToggleModeSave";
import "@brainhubeu/react-carousel/lib/style.css";
import "./styles.css";
import projectsData from "../../data/projects.json";
import Project from "../../components/Project";

const SecondPage: React.FC = () => {
  const toggleModeSave = useToggleModeSave();
  return (
    <div
      id="test-container"
      className={`overflow-visible screen-container ${
        toggleModeSave ? "dark-container" : "light-container"
      }`}
    >
      <SEO title="Projects" />
      {projectsData.map((project, index) => (
        <Project key={index} dataProject={project} />
      ))}
    </div>
  );
};

export default SecondPage;
