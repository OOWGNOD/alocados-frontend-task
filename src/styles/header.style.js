import styled from "styled-components";

export const HeaderBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 32px;
    gap: 152px;
`;

export const Logoimg = styled.img`
    width: 152px;
    height: 24px;
`;

export const HeaderRouterBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 24px;
`;

export const HeaderRouterText = styled.p`
    font-family: "Pretendard";
    font-size: 15px;
    line-height: 36px;
    letter-spacing: 0.05em;
    padding: 10px 16px;
    border-radius: 12px;
    color: #404e71;
    cursor: pointer;
    background: "none";
    &.active {
        color: #5d28f2;
        background: rgba(93, 40, 242, 0.12);
    }
`;

export const ChangeMoneyBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
