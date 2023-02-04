import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import { Stack, Typography  , TextField , Container} from "@mui/material";
import {
  FooterSection,
  Title,
  Extra,
  Large,
} from "./styles";



const Footer = ({ t }: any) => {


  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={4} md={2} sm={12} xs={12}>
            <SvgIcon
                  src="logo.svg"
                  aria-label="homepage"
                  width="101px"
                  height="64px"
                />
              <Large to="/" left="true">
                {t("Banglore, India ")}
              </Large>
              <Large to="/" left="true">
                {t("elmous@yahoo.co.id")}
              </Large>
              <Large to="/" left="true">
                {t("022 4567 8976")}
              </Large>
            </Col>

            <Col lg={3} md={10} sm={12} xs={12}>
            <Title>{t("Our Feature")}</Title>
              <Large to="/" left="true">
                {t("Feature 1")}
              </Large>
              <Large left="true" to="/">
                {t("Feature 2")}
              </Large>
              <Large left="true" to="/">
                {t("Feature 3")}
              </Large>
              <Large left="true" to="/">
                {t("Feature 4")}
              </Large>
            </Col>
            <Col lg={3} md={8} sm={12} xs={12}>
              <Title>{t("Our Service")}</Title>
              <Large left="true" to="/">
                {t("Service 1")}
              </Large>
              <Large left="true" to="/">
                {t("Service 2")}
              </Large>
            </Col>
            <Col lg={8} md={10} sm={12} xs={12}>
            <Title>{t("Join Our Email")}</Title>
            <Large left="true" to="/">
                {t("Enter your email address for joined our agency")}
              </Large>
              <TextField  fullWidth  error color="warning" label="Email Address" type="Email" />
              
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container >
            <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}
  
>
<Typography >
                Copyright @imoodev 2021 All Right Reserved
              </Typography>
</Stack>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
