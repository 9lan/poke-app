import styled from "styled-components";

export const SearchContainer = styled.form`
  position: relative;
  margin-bottom: 20px;
`;
export const SearchInput: any = styled.input`
  border: 1px solid #cccccc;
  width: 100%;
  border-radius: 4px;
  padding: 9px 4px 9px 40px;
  box-shadow: inset 0px 2px 4px rgba(51, 51, 51, 0.15);

  &:focus {
    outline: none;
  }
`;
export const SearchIcon = styled.img`
  position: absolute;
  left: 8px;
  top: calc(50% - 24px / 2);
`;
