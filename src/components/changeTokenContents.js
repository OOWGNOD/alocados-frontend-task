import React from "react";
import {
    ChageListBoxRightArrow,
    ChageListBoxRightBox,
    ChageListInfoBox,
    ChageListInfoDate,
    ChageListInfoInnerBox,
    ChageListInfoInnerLogo,
    ChageListInfoInnerText,
    ChangeBtn,
    ChangeIconBox,
    ChangeInput,
    ChangeInputBox,
    ChangeInputLabel,
    ContentsBodyContainer,
    ContentsChangeBox,
    ContentsContainer,
    ContentsHeaderText,
    ContentsInnerContainer,
    ContentsSideContainer,
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
import RightArrowIcon from "../assets/right_arrow.svg";
import NonCircleETH from "../assets/nonCircle_ETH.svg";
import NonCircleSOL from "../assets/nonCircle_Sol.svg";
import NonCircleBNB from "../assets/nonCircle_BnB.svg";

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
                    <ChangeIconBox>
                        <img src={changeIcon} alt="change icon" />
                    </ChangeIconBox>
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
                    <ChageListInfoBox>
                        <ChageListInfoInnerBox>
                            <ChageListInfoDate>
                                2023-03-12,AM 10:50
                            </ChageListInfoDate>
                        </ChageListInfoInnerBox>
                        <ChageListBoxRightBox>
                            <ChageListInfoInnerBox>
                                <ChageListInfoInnerLogo
                                    src={NonCircleETH}
                                    alt="From token logo"
                                />
                                <ChageListInfoInnerText>
                                    1,302.44 ETH
                                </ChageListInfoInnerText>
                            </ChageListInfoInnerBox>
                            <ChageListBoxRightArrow
                                src={RightArrowIcon}
                                alt="right arrow"
                            />
                            <ChageListInfoInnerBox>
                                <ChageListInfoInnerLogo
                                    src={NonCircleSOL}
                                    alt="To token logo"
                                />
                                <ChageListInfoInnerText>
                                    1,302.44 ETH
                                </ChageListInfoInnerText>
                            </ChageListInfoInnerBox>
                        </ChageListBoxRightBox>
                    </ChageListInfoBox>
                </ContentsInnerContainer>
            </ContentsBodyContainer>
        </ContentsContainer>
    );
};
export default ChangeTokenContents;
