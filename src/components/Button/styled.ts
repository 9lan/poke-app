import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding: 6px 12px;
  background: ${(props: any) =>
    props.color === "primary" ? "#006a7a" : "#f7f7f7"};
  border: 1px solid #cccccc;
  box-shadow: 0px 1px 2px rgba(51, 51, 51, 0.15),
    inset 0px 2px 2px rgba(255, 255, 255, 0.15),
    inset 0px -1px 2px rgba(51, 51, 51, 0.15);
  border-radius: 4px;
  color: ${(props: any) => (props.color === "primary" ? "#ffffff" : "#006a7a")};
  font-family: ${({ theme }) => theme.fonts.primary}, sans-serif;
  font-size: 14px;
  font-weight: 500;
`;
