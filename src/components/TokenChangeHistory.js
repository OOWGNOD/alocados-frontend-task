import { useRecoilValue } from "recoil";
import { ChangeHistory } from "../recoil/recoils";
import {
    ChageListBoxRightArrow,
    ChageListBoxRightBox,
    ChageListInfoBox,
    ChageListInfoDate,
    ChageListInfoInnerBox,
    ChageListInfoInnerLogo,
    ChageListInfoInnerText,
} from "../styles/contents.style";
import RightArrowIcon from "../assets/right_arrow.svg";

const TokenChangeHistory = () => {
    const History = useRecoilValue(ChangeHistory);
    return (
        <ChageListInfoBox>
            <ChageListInfoInnerBox>
                <ChageListInfoDate>
                    {History[History.length - 1]?.changeTime}
                </ChageListInfoDate>
            </ChageListInfoInnerBox>
            <ChageListBoxRightBox>
                <ChageListInfoInnerBox>
                    <ChageListInfoInnerLogo
                        src={History[History.length - 1]?.FromToken?.tokenLogo}
                        alt="From token logo"
                    />
                    <ChageListInfoInnerText>
                        {(History[
                            History.length - 1
                        ]?.FromTokenBalance).toString().replace(
                            /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
                            ","
                        )}{" "}
                        {History[History.length - 1]?.FromToken?.tokenSymbol}
                    </ChageListInfoInnerText>
                </ChageListInfoInnerBox>
                <ChageListBoxRightArrow
                    src={RightArrowIcon}
                    alt="right arrow"
                />
                <ChageListInfoInnerBox>
                    <ChageListInfoInnerLogo
                        src={History[History.length - 1]?.ToToken?.tokenLogo}
                        alt="To token logo"
                    />
                    <ChageListInfoInnerText>
                        {(History[
                            History.length - 1
                        ]?.ToTokenBalance).toString().replace(
                            /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
                            ","
                        )}{" "}
                        {History[History.length - 1]?.ToToken?.tokenSymbol}
                    </ChageListInfoInnerText>
                </ChageListInfoInnerBox>
            </ChageListBoxRightBox>
        </ChageListInfoBox>
    );
};
export default TokenChangeHistory;
