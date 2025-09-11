import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description }) => {
  const siteName = "Class 02";
  return (
    <Helmet>
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name="description" content={description || "Welcome to Class 02"} />

      <meta
        property="og:title"
        content={title ? `&{title}|${siteName}` : siteName}
      />

      <meta
        property="og:description"
        content={description || "Welcome to Class 02"}
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />

      <meta
        name="twitter:title"
        content={title ? `${title}|${siteName}` : siteName}
      />
      <meta
        name="twitter:description"
        content={description || "Welcome to Class 02"}
      />

      <meta name="twitter:card" content="sumary_large_image" />
    </Helmet>
  );
};

export default SEO;
