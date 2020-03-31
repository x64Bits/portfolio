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
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex self-center store-icon-container"
    >
      <img className={classes} src={uri} alt={`${platform}-icon`} />
    </a>
  );
};

export default PlatformIcon;
