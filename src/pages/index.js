import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import Vision from '../components/Vision';
import Partners from '../components/Partners';
import Newsletter from '../components/Newsletter';
import WhitelabelHero from '../components/WhitelabelHero';
import MediumArticles from '../components/MediumArticles';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title={config.siteName}
          description={config.description}
          url={`${config.siteUrl}`}
          image={config.image}
        />
        <HomeHero />
        <Vision />
        <Partners />
        <Newsletter />
        <WhitelabelHero isHome />
        <MediumArticles />
      </Layout>
    );
  }
}
