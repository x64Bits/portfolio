import React from "react";

interface Props {
  src: string;
  placeholder: string;
}

const useLazyLoad = ({ src, placeholder }: Props) => {
  const [sourceLoaded, setSourceLoaded] = React.useState("");

  React.useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setSourceLoaded(src);
  }, [src]);

  return [sourceLoaded, placeholder];
};

export default useLazyLoad;
