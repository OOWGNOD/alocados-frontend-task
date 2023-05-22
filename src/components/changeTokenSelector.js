import { useRef } from "react";
import underArrow from "../assets/under_arrow.png";
import { TokenData } from "../data/dummyData";
import {
    CenterAlignDiv,
    ChageListInfoInnerLogo,
    TokenSelectUl,
    TokenSelector,
    TokenSelectorBox,
    UnderArrow,
} from "../styles/contents.style";
import { TokenDropDownLi } from "./tokenDropdown";
import useDetectClose from "../functions/hooks/useDetectClose";
import { UserBalance } from "../recoil/recoils";
import { useRecoilValue } from "recoil";

const ChangeTokenSelector = ({ selectedToken, setSelectedToken, isFrom }) => {
    const dropDownRef = useRef();
    const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);
    const userBalance = useRecoilValue(UserBalance);
    return (
        <TokenSelectorBox ref={dropDownRef}>
            <TokenSelector onClick={() => setIsOpen(!isOpen)}>
                <CenterAlignDiv>
                    {selectedToken && (
                        <ChageListInfoInnerLogo
                            src={selectedToken?.tokenLogo}
                            alt="selected token Logo"
                            marginRight={"8.66px"}
                        />
                    )}
                    {selectedToken?.tokenName}
                </CenterAlignDiv>
                <UnderArrow src={underArrow} alt="underArrow" />
            </TokenSelector>
            {isOpen && (
                <TokenSelectUl name="tokens">
                    {TokenData.map((value, index) =>
                        isFrom && userBalance[value.tokenSymbol] <= 0 ? null : (
                            <TokenDropDownLi
                                key={index}
                                value={value}
                                setIsOpen={setIsOpen}
                                setSelectedToken={setSelectedToken}
                                isOpen={isOpen}
                            />
                        )
                    )}
                </TokenSelectUl>
            )}
        </TokenSelectorBox>
    );
};

export default ChangeTokenSelector;
