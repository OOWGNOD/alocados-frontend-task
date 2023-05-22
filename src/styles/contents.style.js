import styled from "styled-components";

export const ContentsContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const ContentsHeaderText = styled.p`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 32px;
    font-feature-settings: "pnum" on, "lnum" on;
    color: #2a3249;
`;

export const ContentsBodyContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const ContentsSideContainer = styled.div`
    width: 308px;
    height: 386px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 24px;
    gap: 8px;
    background: #fafbfc;
    border-radius: 12px;
`;

export const ContentsInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin-left: 17.5px;
`;
export const ContentsChangeBox = styled.div`
    display: flex;
    flex-direction: row;
`;

export const StrongTextBox = styled.div`
    width: 100%;
    padding-bottom: 16px;
    border-bottom-style: solid;
    border-bottom-color: #c8ccd7;
    border-bottom-width: 1px;
`;

export const StrongText = styled.strong`
    font-family: "Poppins600";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 135%;
    letter-spacing: 0.025em;
    color: #4c5b7a;
`;
export const TokenInfo = styled.div`
    width: 100%;
`;
export const TokenInfoHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const TextSideLogo = styled.img`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-right: 8px;
    width: 36px;
    height: 36px;
`;

export const TokenInfoText = styled.p`
    font-family: "Poppins400", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 178%;
    font-feature-settings: "pnum" on, "lnum" on, "cv03" on, "cv04" on, "cv09" on;
    color: #4c5b7a;
`;

export const TokenPriceInfo = styled.p`
    font-family: "Poppins600", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 178%;
    display: flex;
    align-items: center;
    font-feature-settings: "pnum" on, "lnum" on, "cv03" on, "cv04" on, "cv09" on;
    color: #2a3249;
    margin-block-end: 0;
    margin-block-start: 0;
`;

export const ChangeInputBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 16px 10px 14px;
    width: 472px;
    height: 56px;
    background: #fafbfc;
    border-radius: 12px;
`;

export const ChangeInputLabel = styled.label`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 12px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    font-feature-settings: "tnum" on, "lnum" on, "ss03" on, "cv03" on, "cv09" on,
        "cv04" on;
    color: #546182;
`;

export const ChangeInput = styled.input`
    border: none;
    background: none;
    font-family: "Poppins600";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 178%;
    display: flex;
    align-items: center;
    font-feature-settings: "pnum" on, "lnum" on, "cv03" on, "cv04" on, "cv09" on;
    color: #313c57;
`;

export const TokenSelectorBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 147px;
    height: 56px;
    gap: 4px;
    margin-left: 16px;
    background: url("../assets/underarrow.png") no-repeat 97% 50%/15px auto;
`;

export const TokenSelector = styled.select`
    &::-ms-expand {
        display: none;
    }
    option {
        font-family: "Poppins400", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 178%;
        font-feature-settings: "pnum" on, "lnum" on, "cv03" on, "cv04" on,
            "cv09" on;
        color: #2a3249;
    }
    width: 100%;
    height: 100%;
    padding: 10px;
    border-radius: 12px;
    background: #fafbfc;
    border: none;
    -o-appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
`;

export const ChangeIconBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
`;

export const ChangeBtn = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 16px;
    width: 635px;
    height: 56px;
    background: #5d28f2;
    border-radius: 12px;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 36px;
    letter-spacing: 0.05em;
    color: #ffffff;
    border: none;
    box-shadow: none;
`;

export const ChageListInfoBox = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px;
    gap: 32px;
    width: 634px;
    height: 48px;
    background: #f4f5f8;
    border-radius: 12px;
`;

export const ChageListInfoDate = styled.p`
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 178%;
    font-feature-settings: "pnum" on, "lnum" on, "cv03" on, "cv04" on, "cv09" on;
    color: #2a3249;
`;

export const ChageListBoxRightBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ChageListBoxRightArrow = styled.img`
    margin: 33.33px;
`;

export const ChageListInfoInnerBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ChageListInfoInnerLogo = styled.img`
    margin-right: 12.66px;
`;

export const ChageListInfoInnerText = styled.p`
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 178%;
    text-align: right;
    font-feature-settings: "pnum" on, "lnum" on, "cv03" on, "cv04" on, "cv09" on;
    color: #404e71;
`;
