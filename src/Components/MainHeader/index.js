import React ,{ useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import { Link } from "react-router-dom";
import {
	HeaderSection,
	LogoContainer,
	Burger,
	NotHidden,
	Menu,
	CustomNavLinkSmall,
	Label,
	Outline,
	Span,
} from "./styles";

const Header = ({ t }) => {
	const [visible, setVisibility] = useState(false);

	const showDrawer = () => {
		setVisibility(!visible);
	};

	const onClose = () => {
		setVisibility(!visible);
	};

	const MenuItem = () => {
		const scrollTo = (id) => {
			const element = document.getElementById(id);
			element.scrollIntoView({
				behavior: "smooth",
			});
			setVisibility(false);
		};
		return (
			<>
				<CustomNavLinkSmall>
					<Link to={{ pathname: `/blog` }}>
						<Span>{t("Blogs")}</Span>
					</Link>
				</CustomNavLinkSmall>
				<CustomNavLinkSmall onClick={() => scrollTo("mission")}>
					<Span>{t("Services")}</Span>
				</CustomNavLinkSmall>
				<CustomNavLinkSmall onClick={() => scrollTo("product")}>
					<Span>{t("About us")}</Span>
				</CustomNavLinkSmall>
				<CustomNavLinkSmall
					style={{ width: "180px" }}
					onClick={() => scrollTo("contact")}
				>
					<Span>
						<Button>{t("Contact")}</Button>
					</Span>
				</CustomNavLinkSmall>
			</>
		);
	};

	return (
		<HeaderSection>
			<Container>
				<Row justify="space-between">
					<LogoContainer to="/" aria-label="homepage">
						<SvgIcon src="logox.svg" width="250px" height="100px" />
					</LogoContainer>
					<NotHidden>
						<MenuItem />
					</NotHidden>
					<Burger onClick={showDrawer}>
						<Outline />
					</Burger>
				</Row>
				<Drawer closable={false} visible={visible} onClose={onClose}>
					<Col style={{ marginBottom: "2.5rem" }}>
						<Label onClick={onClose}>
							<Col span={12}>
								<Menu>Menu</Menu>
							</Col>
							<Col span={12}>
								<Outline />
							</Col>
						</Label>
					</Col>
					<MenuItem />
				</Drawer>
			</Container>
		</HeaderSection>
	);
};

export default withTranslation()(Header);