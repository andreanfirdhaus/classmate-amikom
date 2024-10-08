import { Helmet } from "react-helmet-async";

interface MetaDataProps {
  title: string;
  description: string;
  name: string;
  type: string;
  domain: string;
}

const MetaData: React.FC<MetaDataProps> = ({
  title,
  description,
  name,
  domain,
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link rel="text/html" href={domain} />
    </Helmet>
  );
};

export default MetaData;
