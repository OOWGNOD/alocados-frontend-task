import React, { useEffect, useState } from "react";
import {
    CenterAlignDiv,
    ChangeBtn,
    ChangeIconBox,
    ChangeInput,
    ChangeInputBox,
    ChangeInputLabel,
    ChangeStateAlarmBox,
    ChangeStateAlarmText,
    ContentsBodyContainer,
    ContentsChangeBox,
    ContentsContainer,
    ContentsHeaderText,
    ContentsInnerContainer,
    ContentsSideContainer,
    StrongText,
    StrongTextBox,
} from "../styles/contents.style";

import changeIcon from "../assets/change_icon.svg";
import ChangeTokenSelector from "./changeTokenSelector";
import Xmark from "../assets/x_icon.svg";
import Iicon from "../assets/info.svg";

import UsersTokenInfo from "./TokenInfo";
import { ChangeHistory, UserBalance } from "../recoil/recoils";
import { useRecoilState } from "recoil";
import { ChangeTokens } from "../functions/changeTokens";
import { TokenData } from "../data/dummyData";
import { CheckInteger } from "../functions/checkInteget";
import TokenChangeHistory from "./TokenChangeHistory";
import { _getHistoryTime } from "../functions/getTime";

const ChangeTokenContents = () => {
    const [selectedFromToken, setSelectedFromToken] = useState();
    const [selectedToToken, setSelectedToToken] = useState();
    const [FromTokenBalance, setFromTokenBalance] = useState("");
    const [ToTokenBalance, setToTokenBalance] = useState(0);
    const [AbledChange, setAbledchange] = useState(false);
    const [compChange, setCompChange] = useState(false);
    const [changeToken, setChangeToken] = useRecoilState(UserBalance);
    const [tokenChangeHistory, setTokenChangeHistory] =
        useRecoilState(ChangeHistory);

    const TOBALANCE = ChangeTokens(
        selectedFromToken?.tokenSymbol,
        selectedToToken?.tokenSymbol,
        +FromTokenBalance
    );

    const _changeToken = (FromSymbol, ToSymbol) => {
        const CopyedArr = { ...changeToken };
        CopyedArr[FromSymbol] -= TOBALANCE;
        CopyedArr[ToSymbol] += TOBALANCE;
        setChangeToken(CopyedArr);
        _CompleteChangeToken();
    };

    const _CompleteChangeToken = () => {
        setFromTokenBalance("");
        setToTokenBalance(0);
        setSelectedFromToken();
        setSelectedToToken();
        setAbledchange(false);
        setCompChange(true);
        const newHistoryData = {
            changeTime: _getHistoryTime(),
            FromToken: selectedFromToken,
            FromTokenBalance: +FromTokenBalance,
            ToToken: selectedToToken,
            ToTokenBalance: ToTokenBalance,
        };
        setTokenChangeHistory((prev) => [...prev, newHistoryData]);
    };

    const _CanIChange = () => {
        if (selectedFromToken === selectedToToken) {
            setAbledchange(false);
            return;
        }
        if (+FromTokenBalance === 0) {
            return setAbledchange(false);
        }
        if (changeToken[selectedFromToken?.tokenSymbol] < +FromTokenBalance) {
            return setAbledchange(false);
        }
        setAbledchange(true);
    };

    const _FrominputChange = (e) => {
        const amount = e.target.value;
        if (amount.value === ".") return false;
        if (amount.length === 0) {
            setFromTokenBalance("");
        }
        if (/^[\d]*\.?[\d]{0,10}$/.test(amount)) {
            setFromTokenBalance(amount);
        } else {
            return false;
        }
    };

    useEffect(() => {
        _CanIChange();
        setToTokenBalance(CheckInteger(TOBALANCE));
        return () => {};
    }, [selectedFromToken, selectedToToken, FromTokenBalance]);

    return (
        <ContentsContainer>
            <div>
                <ContentsHeaderText>환전하기</ContentsHeaderText>
                {compChange ? (
                    <ChangeStateAlarmBox>
                        <CenterAlignDiv>
                            <img src={Iicon} alt="i icon" />
                            <ChangeStateAlarmText>
                                최근 거래 후 갱신되었습니다.
                            </ChangeStateAlarmText>
                        </CenterAlignDiv>
                        <img
                            src={Xmark}
                            alt="x icon"
                            onClick={() => {
                                setCompChange(false);
                            }}
                        />
                    </ChangeStateAlarmBox>
                ) : null}
            </div>
            <ContentsBodyContainer>
                <ContentsSideContainer>
                    <StrongTextBox>
                        <StrongText>요약</StrongText>
                    </StrongTextBox>
                    <UsersTokenInfo />
                </ContentsSideContainer>
                <ContentsInnerContainer>
                    <ContentsChangeBox>
                        <ChangeInputBox
                            length={FromTokenBalance.length}
                            AbledChange={AbledChange}
                        >
                            <ChangeInputLabel>
                                전환 수량 (FROM)
                            </ChangeInputLabel>
                            <ChangeInput
                                value={FromTokenBalance}
                                onChange={(e) => {
                                    _FrominputChange(e);
                                }}
                            />
                        </ChangeInputBox>
                        <ChangeTokenSelector
                            selectedToken={selectedFromToken}
                            setSelectedToken={setSelectedFromToken}
                            isFrom={true}
                        />
                    </ContentsChangeBox>
                    <ChangeIconBox>
                        <img src={changeIcon} alt="change icon" />
                    </ChangeIconBox>
                    <ContentsChangeBox>
                        <ChangeInputBox
                            length={FromTokenBalance.length}
                            AbledChange={AbledChange}
                        >
                            <ChangeInputLabel>전환 수량 (TO)</ChangeInputLabel>
                            <ChangeInput
                                value={
                                    isNaN(ToTokenBalance) ? 0 : ToTokenBalance
                                }
                                readOnly
                            />
                        </ChangeInputBox>
                        <ChangeTokenSelector
                            selectedToken={selectedToToken}
                            setSelectedToken={setSelectedToToken}
                            isFrom={false}
                        />
                    </ContentsChangeBox>
                    <ChangeBtn
                        AbledChange={AbledChange}
                        onClick={() => {
                            console.log("clicked");
                            _changeToken(
                                selectedFromToken.tokenSymbol,
                                selectedToToken.tokenSymbol
                            );
                        }}
                        disabled={!AbledChange}
                    >
                        환전
                    </ChangeBtn>
                    {tokenChangeHistory.length > 0 ? (
                        <TokenChangeHistory />
                    ) : null}
                </ContentsInnerContainer>
            </ContentsBodyContainer>
        </ContentsContainer>
    );
};
export default ChangeTokenContents;
