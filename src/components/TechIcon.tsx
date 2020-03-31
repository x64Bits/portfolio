import React from "react";

interface Props {
  techName: string;
  className?: string;
}

const entryPoint =
  "https://res.cloudinary.com/jandup/image/upload/v1585552343/portfolio/tech-icons";

const TechIcon: React.FC<Props> = ({ techName, className }: Props) => {
  const [techUri, setTechUri] = React.useState("");
  const [url, setUrl] = React.useState("");
  React.useEffect(() => {
    switch (techName) {
      case "react-native":
        setTechUri(`${entryPoint}/react-native_zxzdhj.png`);
        setUrl("https://reactnative.dev/");
        break;
      case "react":
        setTechUri(`${entryPoint}/react_p9ziau.png`);
        setUrl("https://es.reactjs.org/");
        break;
      case "expo":
        setTechUri(`${entryPoint}/expo_vpodg7.png`);
        setUrl("https://expo.io/dashboard/x64bits");
        break;

      case "adonis":
        setTechUri(`${entryPoint}/adonis_qdb0ut.png`);
        setUrl("https://adonisjs.com/");
        break;

      case "javascript":
        setTechUri(`${entryPoint}/javascript_wb0oaa.png`);
        setUrl("https://es.wikipedia.org/wiki/JavaScript");
        break;

      case "vue":
        setTechUri(`${entryPoint}/vue_ajqv72.png`);
        setUrl("https://vuejs.org/");
        break;

      case "mysql":
        setTechUri(`${entryPoint}/mysql_dga33w.png`);
        setUrl("https://www.mysql.com/");
        break;

      case "redux":
        setTechUri(`${entryPoint}/redux_pqenop.png`);
        setUrl("https://redux.js.org/");
        break;
    }
  }, [techName]);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <img className="object-contain" src={techUri} alt={techName} />
    </a>
  );
};
export default TechIcon;
