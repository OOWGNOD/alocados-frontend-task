import React from "react";
import {
    ChageListBoxRightArrow,
    ChageListBoxRightBox,
    ChageListInfoBox,
    ChageListInfoDate,
    ChageListInfoInnerBox,
    ChageListInfoInnerLogo,
    ChageListInfoInnerText,
    ContentsContainer,
    ContentsHeaderText,
} from "../styles/contents.style";
import RightArrowIcon from "../assets/right_arrow.svg";
import NonCircleETH from "../assets/nonCircle_ETH.svg";
import NonCircleSOL from "../assets/nonCircle_Sol.svg";

const ChangeListContents = () => {
    return (
        <ContentsContainer>
            <ContentsHeaderText>환전내역</ContentsHeaderText>
            <ChageListInfoBox>
                <ChageListInfoInnerBox>
                    <ChageListInfoDate>2023-03-12,AM 10:50</ChageListInfoDate>
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
        </ContentsContainer>
    );
};
export default ChangeListContents;
