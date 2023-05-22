import React, { useState } from "react";
import {
    CenterAlignDiv,
    ChageListBoxRightArrow,
    ChageListBoxRightBox,
    ChageListInfoBox,
    ChageListInfoDate,
    ChageListInfoInnerBox,
    ChageListInfoInnerLogo,
    ChageListInfoInnerText,
    ContentsContainer,
    ContentsHeaderText,
    HistoryChangeTimeText,
    HistoryTimeArrow,
} from "../styles/contents.style";
import RightArrowIcon from "../assets/right_arrow.svg";
import UnderArrowIcon from "../assets/under_arrow_icon.png";
import { useRecoilValue } from "recoil";
import { ChangeHistory } from "../recoil/recoils";
const ChangeListContents = () => {
    const History = useRecoilValue(ChangeHistory);
    const [sortHistory, setSortHistory] = useState(true);
    const CopyHistory = sortHistory ? [...History].reverse() : [...History];
    const pointer = true;
    return (
        <ContentsContainer>
            <ContentsHeaderText>환전 내역</ContentsHeaderText>
            <ChageListInfoBox>
                <CenterAlignDiv
                    onClick={() => setSortHistory(!sortHistory)}
                    pointer={pointer}
                >
                    <HistoryChangeTimeText>환전 시간</HistoryChangeTimeText>
                    <HistoryTimeArrow
                        src={UnderArrowIcon}
                        alt="under_arrow_icon"
                        sort={sortHistory}
                    />
                </CenterAlignDiv>
                <HistoryChangeTimeText>환전금액</HistoryChangeTimeText>
            </ChageListInfoBox>
            {CopyHistory.map((val, index) => {
                return (
                    <ChageListInfoBox key={index}>
                        <ChageListInfoInnerBox>
                            <ChageListInfoDate>
                                {val?.changeTime}
                            </ChageListInfoDate>
                        </ChageListInfoInnerBox>
                        <ChageListBoxRightBox>
                            <ChageListInfoInnerBox>
                                <ChageListInfoInnerLogo
                                    src={val?.FromToken?.tokenLogo}
                                    alt="From token logo"
                                />
                                <ChageListInfoInnerText>
                                    {val?.FromTokenBalance?.toString().replace(
                                        /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
                                        ","
                                    )}{" "}
                                    {val?.FromToken?.tokenSymbol}
                                </ChageListInfoInnerText>
                            </ChageListInfoInnerBox>
                            <ChageListBoxRightArrow
                                src={RightArrowIcon}
                                alt="right arrow"
                            />
                            <ChageListInfoInnerBox>
                                <ChageListInfoInnerLogo
                                    src={val?.ToToken?.tokenLogo}
                                    alt="To token logo"
                                />
                                <ChageListInfoInnerText>
                                    {val?.ToTokenBalance?.toString().replace(
                                        /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
                                        ","
                                    )}{" "}
                                    {val?.ToToken?.tokenSymbol}
                                </ChageListInfoInnerText>
                            </ChageListInfoInnerBox>
                        </ChageListBoxRightBox>
                    </ChageListInfoBox>
                );
            })}
        </ContentsContainer>
    );
};
export default ChangeListContents;
