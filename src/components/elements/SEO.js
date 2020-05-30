import React from 'react';
import { Helmet } from 'react-helmet';

import favicon from '../../assets/images/pwa_icon.png';

const SEO = (props) => {
  const { title, description, kw } = props;

  return (
    <Helmet>
      <meta name="description" content={description} />
      <meta name="keywords" content={kw} />
      <link rel="icon" href={favicon} type="image/png" />
      <title>{title}</title>
    </Helmet>
  );
};

export default SEO;
