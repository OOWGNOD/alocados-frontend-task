import { TokenSelectLi } from "../styles/contents.style";

export const TokenDropDownLi = ({
    value,
    setSelectedToken,
    setIsOpen,
    isOpen,
}) => {
    const ValueClick = () => {
        setSelectedToken(value);
        setIsOpen(!isOpen);
    };
    return (
        <TokenSelectLi onClick={ValueClick}>{value?.tokenName}</TokenSelectLi>
    );
};
