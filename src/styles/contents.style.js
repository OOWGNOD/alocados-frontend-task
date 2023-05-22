import styled from "styled-components";

export const CenterAlignDiv = styled.div`
    display: flex;
    align-items: center;
    cursor: ${(props) => (props.pointer ? "pointer" : "auto")};
`;

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
    margin-bottom: 24px;
`;

export const ChangeStateAlarmBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 16px;

    margin-bottom: 14px;
    gap: 8px;
    width: 960px;
    height: 56px;
    background: rgba(55, 86, 228, 0.12);
    border-radius: 12px;
`;
export const ChangeStateAlarmText = styled.p`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    font-feature-settings: "pnum" on, "lnum" on, "cv03" on, "cv04" on, "cv09" on;
    color: #3756e4;
    margin-left: 9.67px;
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
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 135%;
    letter-spacing: 0.025em;
    color: #4c5b7a;
`;
export const TokenInfo = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 17.65px;
`;
export const TokenInfoHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
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
    font-feature-settings: "pnum" on, "lnum" on, "cv03" on, "cv04" on, "cv09" on;
    color: #4c5b7a;
`;

export const TokenPriceInfo = styled.p`
    font-family: "Poppins600", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    display: flex;
    align-items: center;
    font-feature-settings: "pnum" on, "lnum" on, "cv03" on, "cv04" on, "cv09" on;
    color: #2a3249;
`;

export const ChangeInputBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 16px 10px 14px;
    width: 472px;
    height: 56px;
    background: #fafbfc;
    border-radius: 12px;
    border: ${(props) =>
        props.length === 0 || props.AbledChange
            ? "none"
            : "1.2px solid #f7254b"};
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
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    margin-left: 16px;
    background: url("../assets/underarrow.png") no-repeat 97% 50%/15px auto;
`;

export const TokenSelector = styled.div`
    width: 147px;
    height: 56px;
    padding: 10px;
    border-radius: 12px;
    background: #fafbfc;
    font-family: "Poppins400";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 178%;
    font-feature-settings: "pnum" on, "lnum" on, "cv03" on, "cv04" on, "cv09" on;
    color: #2a3249;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
`;
export const UnderArrow = styled.img`
    width: 24px;
    height: 24px;
`;

export const TokenSelectUl = styled.ul`
    position: absolute;
    max-width: 147px;
    top: 50px;
    padding: 10px;
    border-radius: 12px;
    background: #fafbfc;
    border: none;
`;

export const TokenSelectLi = styled.li`
    width: 147px;
    font-family: "Poppins400";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 178%;
    font-feature-settings: "pnum" on, "lnum" on, "cv03" on, "cv04" on, "cv09" on;
    color: #2a3249;
    list-style: none;
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
    background: ${(props) => (props.AbledChange ? "#5d28f2" : "#E0E2E8")};
    border-radius: 12px;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 36px;
    letter-spacing: 0.05em;
    color: ${(props) => (props.AbledChange ? "#ffffff" : "#A9B0C1")};
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
    margin-bottom: 8px;
`;

export const ChageListInfoDate = styled.p`
    font-family: "Poppins400";
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
    margin-left: 33.33px;
    margin-right: 33.33px;
`;

export const ChageListInfoInnerBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ChageListInfoInnerLogo = styled.img`
    margin-right: ${(props) =>
        props.marginRight ? props.marginRight : "12.66px"};
`;

export const ChageListInfoInnerText = styled.p`
    font-family: "Poppins600";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 178%;
    text-align: right;
    font-feature-settings: "pnum" on, "lnum" on, "cv03" on, "cv04" on, "cv09" on;
    color: #404e71;
`;

export const HistoryChangeTimeText = styled.p`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 178%;
    font-feature-settings: "pnum" on, "lnum" on, "cv03" on, "cv04" on, "cv09" on;
    color: #2a3249;
    margin-right: 4.33px;
`;

export const HistoryTimeArrow = styled.img`
    transform: ${(props) => (props.sort ? "rotate(0deg)" : "rotate(180deg)")};
`;
