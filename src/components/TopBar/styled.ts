import styled from "styled-components";

export const TopBarContainer = styled.div`
  position: absolute;
  height: 56px;
  left: 0px;
  right: 0px;
  top: 0px;
  z-index: 100;
  box-shadow: 0px 2px 4px rgba(51, 51, 51, 0.15);

  > div {
    #icon {
      position: absolute;
      left: 8px;
      top: calc(50% - 40px / 2 - 2px);
    }
    #title {
      position: absolute;
      left: calc(50% - 113px / 2);
      top: calc(50% - 24px / 2 - 2px);
      font-family: ${({ theme }) => theme.fonts.primary}, "sans-serif";
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.011em;
      color: #333333;
    }
  }
`;
