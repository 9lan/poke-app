import styled from "styled-components";

export const ConfirmFlex = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
`;
export const ConfirmTextArea: any = styled.textarea`
  width: 100%;
  height: 100px;
  border: 1px solid #cccccc;
  padding: 8px;
  box-shadow: inset 0px 2px 4px rgba(51, 51, 51, 0.15);
  border-radius: 4px;
  font-family: ${({ theme }) => theme.fonts.secondary}, sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #333333;
`;
export const ConfirmDividerBold = styled.div`
  border-bottom: 1px solid #333333;
  margin-top: 8px;
`;
export const ConfirmDividerThin = styled.div`
  border-bottom: 1px solid #cccccc;
  margin-top: 16px;
`;
export const ConfirmContentItem = styled.div`
  font-family: ${({ theme }) => theme.fonts.secondary}, sans-serif;
  > :first-child {
    color: #006a7a;
    font-weight: 700;
    font-size: 14px;
  }
  > :last-child {
    font-weight: 400;
    font-size: 12px;
    color: #333333;
  }
`;
export const ConfirmTotalFlex = styled.div`
  display: flex;
  align-items: center;

  > :first-child {
    margin-right: 16px;
    font-weight: 400;
    font-size: 14px;
  }

  > :last-child {
    width: 24px;
    height: 24px;
  }
`;
export const ConfirmTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary}, sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #333333;
`;
