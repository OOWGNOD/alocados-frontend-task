export const CheckInteger = (balance) => {
    return Number.isInteger(balance)
        ? balance
        : Math.floor(balance * 10000000000) / 10000000000;
};
