import styled from "styled-components";

export const ModalContainer = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(51, 51, 51, 0.5);
`;
export const ModalSection = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 92%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(51, 51, 51, 0.2),
    0px 0px 2px rgba(51, 51, 51, 0.3);
  border-radius: 8px;
  padding: 24px;

  #modal_info {
    text-align: center;

    h3 {
      line-height: 0;
      font-weight: 700;
      font-size: 20px;
    }
    p {
      font-family: ${({ theme }) => theme.fonts.secondary}, sans-serif;
      font-weight: 400;
      font-size: 14px;
    }
  }

  #modal_count {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    padding: 18px 0;
    margin-bottom: 34px;

    > :first-child {
      font-family: ${({ theme }) => theme.fonts.primary}, sans-serif;
      font-weight: 500;
      color: #333333;

      span {
        font-weight: 400;
      }
    }
  }

  #modal_button {
    text-align: right;
    > :first-child {
      margin-right: 8px;
    }
  }
`;
export const ModalInput = styled.div`
  margin-top: 16px;

  #modal_input_head {
    display: flex;
    justify-content: space-between;
    font-family: ${({ theme }) => theme.fonts.primary}, sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #333333;
    border-bottom: 1px solid #333333;
    padding-bottom: 12px;

    > :last-child {
      > :first-child {
        margin-right: 33px;
      }
      display: flex;
    }
  }

  #modal_input_desc {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #cccccc;

    > :first-child {
      font-weight: 700;
      font-size: 14px;
    }

    #modal_input_input {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: 400;
      font-size: 14px;

      > :first-child {
        margin-right: 33px;
        display: flex;
        align-items: center;
        input {
          padding: 4px 8px;
          margin: 0 4px;
          width: 48px;
          border: 1px solid #cccccc;
          box-shadow: inset 0px 2px 4px rgba(51, 51, 51, 0.15);
          border-radius: 4px;
        }

        input:focus {
          outline: none;
        }
      }
    }
  }
`;
