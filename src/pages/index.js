import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Feature from 'sections/feature';
import BusinessProfit from 'sections/business-profit';
import Knowledge from 'sections/knowledge';
import ClientFeedback from 'sections/client-feedback';
import WorkFlow from 'sections/workflow';
import Support from 'sections/support';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          description="Omnichannel Retail Discovery Platform simplifying Digital Marketing, Consumer Engagement and Social Commerce through Robotics, IOT and Web 2.0."
          title="Hashx, the Future of Retail"
        />
        <Banner />
        <Feature />
        <BusinessProfit />
        <Knowledge />
        <ClientFeedback />
        <WorkFlow />
        <Support />
      </Layout>
    </ThemeProvider>
  );
}
