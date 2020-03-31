import React from "react";

const entryPoint =
  "https://res.cloudinary.com/jandup/image/upload/v1585552343/portfolio/app-icons";

interface Props {
  appSlug: string;
  classes?: string;
}

const AppIcon: React.FC<Props> = ({ appSlug, classes }) => {
  const [uri, setUri] = React.useState("");

  React.useEffect(() => {
    switch (appSlug) {
      case "jandup-client":
        setUri(`${entryPoint}/jandup-client_nymok6.png`);
        break;
      case "jandup-operator":
        setUri(`${entryPoint}/jandup-operator_rahqp1.png`);
        break;
      case "ecuantena":
        setUri(`${entryPoint}/ecuantena_ykjzja.png`);
        break;

      case "skinder":
        setUri(`${entryPoint}/skinder_uqqpaz.png`);
        break;
      case "geored":
        setUri(`${entryPoint}/geored_a6bjlv.png`);
        break;
    }
  }, [appSlug]);

  return <img className={classes} src={uri} alt="app-icon" />;
};

export default AppIcon;
