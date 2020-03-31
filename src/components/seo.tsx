import React from "react";
import { Helmet } from "react-helmet";

type MetaProps = JSX.IntrinsicElements["meta"];

interface Props {
  description?: string;
  lang?: string;
  meta?: MetaProps[];
  title: string;
}

const description = "Personal Portfolio of projects have i done";
const lang = "en";
const meta: [] = [];
const siteName = "Ignacio Zsabo";
const author = "@spaceforgerdev";

interface Props {
  title: string;
}

const SEO: React.FC<Props> = ({ title }) => {
  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={siteName}
      titleTemplate={`%s | ${title}`}
      meta={[
        {
          name: `description`,
          content: description
        },
        {
          property: `og:title`,
          content: siteName
        },
        {
          property: `og:description`,
          content: description
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: author
        },
        {
          name: `twitter:title`,
          content: siteName
        },
        {
          name: `twitter:description`,
          content: description
        }
        // @ts-ignore
      ].concat(meta)}
    />
  );
};

SEO.defaultProps = {
  title: ``
};

export default SEO;
