import styled from "styled-components";
import { Link } from "react-router-dom";

export const ListContainer = styled.div`
  width: 100%;
`;
export const ListTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.011em;
  color: #333333;
`;
export const ListTable = styled.div`
  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const ListDivider = styled.div`
  border: 1px solid #333333;
`;
export const ListHead = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary}, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.006em;
  color: #333333;
  padding: 12px 0;
`;
export const ListItems = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  padding: 14px 0;
  border-bottom: 1px solid #cccccc;
  #name {
    font-family: ${({ theme }) => theme.fonts.secondary}, sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.006em;
    color: #006a7a;
  }
  #stock {
    font-family: ${({ theme }) => theme.fonts.secondary}, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    text-align: right;
    letter-spacing: -0.006em;
    color: #333333;
  }
`;
