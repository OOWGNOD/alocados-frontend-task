import React from "react";
import {
    ChangeBtn,
    ChangeInput,
    ChangeInputBox,
    ChangeInputLabel,
    ContentsBodyContainer,
    ContentsChangeBox,
    ContentsContainer,
    ContentsFromBox,
    ContentsHeaderText,
    ContentsInnerContainer,
    ContentsSideContainer,
    NewerChangeInfoBox,
    NewerChangeInfoDate,
    StrongText,
    StrongTextBox,
    TextSideLogo,
    TokenInfo,
    TokenInfoHeader,
    TokenInfoText,
    TokenPriceInfo,
    TokenSelector,
    TokenSelectorBox,
} from "../styles/contents.style";
import SolanaLogo from "../assets/solana.svg";
import changeIcon from "../assets/change_icon.svg";
const ChangeTokenContents = () => {
    return (
        <ContentsContainer>
            <div>
                <ContentsHeaderText>환전하기</ContentsHeaderText>
            </div>
            <ContentsBodyContainer>
                <ContentsSideContainer>
                    <StrongTextBox>
                        <StrongText>요약</StrongText>
                    </StrongTextBox>
                    <TokenInfo>
                        <TokenInfoHeader>
                            <TextSideLogo src={SolanaLogo} alt="solana" />
                            <TokenInfoText>Solana</TokenInfoText>
                        </TokenInfoHeader>
                        <TokenPriceInfo>1,211,023,512.34 SOL</TokenPriceInfo>
                    </TokenInfo>
                </ContentsSideContainer>
                <ContentsInnerContainer>
                    <ContentsChangeBox>
                        <ChangeInputBox>
                            <ChangeInputLabel>
                                전환 수량 (FROM)
                            </ChangeInputLabel>
                            <ChangeInput />
                        </ChangeInputBox>
                        <TokenSelectorBox>
                            <TokenSelector name="tokens">
                                <option value="javascript">JavaScript</option>
                                <option value="php">PHP</option>
                                <option value="java">Java</option>
                            </TokenSelector>
                        </TokenSelectorBox>
                    </ContentsChangeBox>
                    <div>
                        <img src={changeIcon} alt="change icon" />
                    </div>
                    <ContentsChangeBox>
                        <ChangeInputBox>
                            <ChangeInputLabel>전환 수량 (TO)</ChangeInputLabel>
                            <ChangeInput />
                        </ChangeInputBox>
                        <TokenSelectorBox>
                            <TokenSelector name="tokens">
                                <option value="javascript">JavaScript</option>
                                <option value="php">PHP</option>
                                <option value="java">Java</option>
                            </TokenSelector>
                        </TokenSelectorBox>
                    </ContentsChangeBox>
                    <ChangeBtn>환전</ChangeBtn>
                    <NewerChangeInfoBox>
                        <div>
                            <NewerChangeInfoDate>
                                2023-03-12,AM 10:50
                            </NewerChangeInfoDate>
                        </div>
                        <div>
                            <div>
                                <img src={""} alt="From token logo" />
                                <p>1,302.44 ETH</p>
                            </div>
                            <img src={""} alt="right arrow" />
                            <div>
                                <img src={""} alt="To token logo" />
                                <p>1,302.44 ETH</p>
                            </div>
                        </div>
                    </NewerChangeInfoBox>
                </ContentsInnerContainer>
            </ContentsBodyContainer>
        </ContentsContainer>
    );
};
export default ChangeTokenContents;
