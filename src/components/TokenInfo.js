import React from "react";
import { TokenData } from "../data/dummyData";
import {
    TextSideLogo,
    TokenInfo,
    TokenInfoHeader,
    TokenInfoText,
    TokenPriceInfo,
} from "../styles/contents.style";
import { useRecoilValue } from "recoil";
import { UserBalance } from "../recoil/recoils";
import { CheckInteger } from "../functions/checkInteget";
const UsersTokenInfo = () => {
    const userBalance = useRecoilValue(UserBalance);

    return (
        <>
            {TokenData.map((value, index) => (
                <TokenInfo key={index}>
                    <TokenInfoHeader>
                        <TextSideLogo
                            src={value?.tokenCircleLogo}
                            alt={value}
                        />
                        <TokenInfoText>{value.tokenName}</TokenInfoText>
                    </TokenInfoHeader>
                    <TokenPriceInfo>
                        {CheckInteger(userBalance[value.tokenSymbol])
                            .toString()
                            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") ??
                            0}{" "}
                        {value.tokenSymbol}
                    </TokenPriceInfo>
                </TokenInfo>
            ))}
        </>
    );
};
export default UsersTokenInfo;
