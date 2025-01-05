import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  canonical?: string;
  openGraph?: {
    type: string;
    locale: string;
    url: string;
    title: string;
    description: string;
    images: {
      url: string;
      width: number;
      height: number;
      alt: string;
    }[];
  };
}

const SEO = ({ title, description, image, url }: SEOProps) => {
  const siteUrl = "https://kuikenmedia.com"; // Replace with your actual domain
  const defaultImage = `${siteUrl}/og-image.png`; // Replace with your default image

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{title}</title>
      <meta
        name="description"
        content={description}
      />

      {/* Open Graph / Facebook */}
      <meta
        property="og:type"
        content="website"
      />
      <meta
        property="og:url"
        content={url || siteUrl}
      />
      <meta
        property="og:title"
        content={title}
      />
      <meta
        property="og:description"
        content={description}
      />
      <meta
        property="og:image"
        content={image || defaultImage}
      />

      {/* Twitter */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        name="twitter:url"
        content={url || siteUrl}
      />
      <meta
        name="twitter:title"
        content={title}
      />
      <meta
        name="twitter:description"
        content={description}
      />
      <meta
        name="twitter:image"
        content={image || defaultImage}
      />

      {/* Additional SEO tags */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <link
        rel="canonical"
        href={url || siteUrl}
      />
    </Helmet>
  );
};

export default SEO;
