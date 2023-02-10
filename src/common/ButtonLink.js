import React, { ReactNode } from "react";
import { useHistory } from "react-router-dom";
import { StyledButton } from "./styles";

const ButtonLink = ({ to, text }) => {
	const history = useHistory();
	const handleClick = () => {
		history.push(to);
	};

	return <StyledButton onClick={handleClick}>{text}</StyledButton>;
};

export default ButtonLink;
