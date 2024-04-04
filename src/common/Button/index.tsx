import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export const Button = ({
  color,
  fixedWidth,
  children,
  onClick,
}: ButtonProps) => (
  <StyledButton color="#ff0000" fixedWidth={fixedWidth} onClick={onClick}>
    {children}
  </StyledButton>
);
