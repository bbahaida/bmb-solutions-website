import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export const Button = ({ color, hoverColor, children, onClick }: ButtonProps) => (
  <StyledButton color={color} hoverColor={hoverColor} onClick={onClick}>
    {children}
  </StyledButton>
);
