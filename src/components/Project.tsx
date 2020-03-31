import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import useToggleModeSave from "../hooks/useToggleModeSave";
import TechIcon from "../components/TechIcon";
import AppIcon from "../components/AppIcon";
import PlatformIcon from "../components/PlatformIcon";

interface StoreInfo {
  platform: string;
  url: string;
}

interface App {
  slug: string;
  title: string;
  subtitle: string;
  storeInfo: StoreInfo[];
}

interface ProjectProps {
  technologies: string[];
  images: string[];
  apps: App[];
}

interface DataProject {
  dataProject: ProjectProps;
}
const Projects: React.FC<DataProject> = ({ dataProject }: DataProject) => {
  const toggleModeSave = useToggleModeSave();
  // useEffect(() => {
  //   const div = document.getElementById("test-container");
  //   div?.addEventListener("scroll", e => {
  //     let element: any = e.srcElement;
  //     let cHeight: any = element.clientHeight;
  //     if (element?.scrollTop === element?.scrollHeight - cHeight) {
  //       console.warn("llego al final");
  //     }
  //   });
  // });
  return (
    <div className="project-container px-8">
      <div>
        <Carousel
          infinite={false}
          draggable={dataProject.images.length !== 1}
          arrows
          addArrowClickHandler
          dots={dataProject.images.length !== 1}
          arrowLeft={
            dataProject.images.length !== 1 ? (
              <MdChevronLeft
                name="angle-double-left"
                className={`${
                  toggleModeSave ? "text-white" : "text-black"
                } text-5xl carousel-arrow`}
              />
            ) : (
              <div />
            )
          }
          arrowRight={
            dataProject.images.length !== 1 ? (
              <MdChevronRight
                name="angle-double-right"
                className={`${
                  toggleModeSave ? "text-white" : "text-black"
                } text-5xl carousel-arrow`}
              />
            ) : (
              <div />
            )
          }
        >
          {dataProject.images.map((photo: string, index: number) => (
            <img
              key={index}
              loading={index === 0 ? "eager" : "lazy"}
              src={photo}
              className="w-full sm:h-full object-contain carousel-item"
              alt="nothing"
            />
          ))}
        </Carousel>
      </div>
      <div className="flex flex-1 flex-col">
        {dataProject.apps.map((app, index) => (
          <div
            key={app.slug}
            className="flex py-8 w-full flex-row justify-center app-container"
          >
            <div className="flex justify-center relative h-full self-center">
              <div className="shadow-app-icon-container">
                <AppIcon
                  appSlug={app.slug}
                  classes="object-contain app-icon shadow-app-icon"
                />
              </div>
              <div
                className={`app-icon-container ${
                  app.slug === "jandup-operator" || app.slug === "ecuantena"
                    ? "app-icon-border"
                    : ""
                }`}
              >
                <AppIcon appSlug={app.slug} classes="object-contain app-icon" />
              </div>
            </div>
            <div className="flex px-6 justify-center flex-col meta-info-container">
              <h2 className="font-semibold text-xl py-1">{app.title}</h2>
              <span className="font-light text-lg">{app.subtitle}</span>
            </div>
            <div className="flex justify-center platform-container flex-col">
              {app.storeInfo.map((info, index) => (
                <PlatformIcon
                  key={index}
                  platform={info.platform}
                  url={info.url}
                  classes="object-contain py-2"
                />
              ))}
            </div>
          </div>
        ))}
        <div className="flex flex-col justify-center">
          <h4 className="py-4 text-center font-semibold">Technologies</h4>
          <div className="flex flex-row py-6 justify-center flex-wrap">
            {dataProject.technologies.map((tech, index) => (
              <TechIcon
                key={index}
                className="tech-icon mx-2 my-2"
                techName={tech}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
