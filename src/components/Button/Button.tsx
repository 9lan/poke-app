import React from "react";
import { ButtonContainer } from "./styled";

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  color?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({ label, color, onClick }) => {
  return (
    <ButtonContainer color={color} onClick={onClick}>
      {label}
    </ButtonContainer>
  );
};
