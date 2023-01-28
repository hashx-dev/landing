import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
// import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";

import {Card , Stack} from "@mui/material"
const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <Stack direction="row">
      <Card  sx={{ maxWidth: 500}} >
      <video width={"500"} 
      autoPlay
      controls 
      muted 
      poster="https://ruttl.com/assets/img/index-hero.jpg">
  <source
    src="https://ruttl.com/assets/video/index-hero.webm"
    type="video/mp4"
  />
</video></Card>
<Stack ml={5} p={3}>
<div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
      <h6>Introduction Video</h6>
      </div>
</Stack>
</Stack>
      <MiddleBlock
        title={AboutContent.title}
        content={AboutContent.text}
        button={AboutContent.button.title}
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={null}
        button={null}
      />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="business.svg"       
        id="intro"
      />
      <ContentBlock
        type="left"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="delivery.svg"
        id="intro"
      />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="comunication.svg"
        id="intro"
      />
      <ContentBlock
        type="left"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="comunity.svg"
        id="intro"
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
      <h6> App Screens</h6>
      </div>
      
      <ContentBlock
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="feed.svg"
        id="intro"
      />
      <ContentBlock
        type="right"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="trade.svg"
        id="intro"
      />
      <ContentBlock
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="sign.svg"
        id="intro"
      />
      <ContentBlock
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="network.svg"
        id="intro"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
