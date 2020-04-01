import React from "react";

const entryPoint =
  "https://res.cloudinary.com/jandup/image/upload/v1585552343/portfolio/badges";

interface Props {
  platform: string;
  classes?: string;
  url: string;
}

const PlatformIcon: React.FC<Props> = ({ platform, classes, url }) => {
  const [uri, setUri] = React.useState("");

  React.useEffect(() => {
    switch (platform) {
      case "ios":
        setUri(`${entryPoint}/appstore_kmf7un.png`);
        break;
      case "android":
        setUri(`${entryPoint}/playstore_w96tp9.png`);
        break;
    }
  }, [platform]);

  return (
    <a
      href={url === "" ? "#" : url}
      target={url === "" ? "_self" : "_blank"}
      rel="noopener noreferrer"
      className="flex self-center store-icon-container"
      style={{
        cursor: url === "" ? "default" : "pointer"
      }}
    >
      <img
        className={classes}
        src={uri}
        alt={`${platform}-icon`}
        style={{ filter: url === "" ? "grayscale(100%)" : "unset" }}
      />
    </a>
  );
};

export default PlatformIcon;
