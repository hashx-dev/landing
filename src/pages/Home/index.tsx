import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent1 from "../../content/ProductContent1.json";
import ProductContent2 from "../../content/ProductContent2.json";
import ProductContent3 from "../../content/ProductContent3.json";
import ProductContent4 from "../../content/ProductContent4.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
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
        title={ProductContent1.title}
        content={ProductContent1.text}
        icon="feed.svg"
        id="intro"
      />
      <ContentBlock
        type="right"
        title={ProductContent2.title}
        content={ProductContent2.text}
        icon="trade.svg"
        id="intro"
      />
      <ContentBlock
        type="left"
        title={ProductContent3.title}
        content={ProductContent3.text}
        icon="sign.svg"
        id="intro"
      />
      <ContentBlock
        type="left"
        title={ProductContent4.title}
        content={ProductContent4.text}
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
