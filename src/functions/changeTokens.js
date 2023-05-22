export const ChangeTokens = (FromSym, ToSym, Balance) => {
    let MathBalance = 0;
    if (FromSym === "ETH") {
        MathBalance = FromETH[ToSym]?.(Balance);
    } else if (FromSym === "SOL") {
        MathBalance = FromSOL[ToSym]?.(Balance);
    } else {
        MathBalance = FromBNB[ToSym]?.(Balance);
    }
    return MathBalance;
};

const FromETH = {
    SOL: (Balance) => {
        return Balance * 100;
    },
    BNB: (Balnace) => {
        return Balnace * 50;
    },
    ETH: (Balance) => {
        return Balance * 0;
    },
};

const FromSOL = {
    BNB: (Balance) => {
        return Balance / 2;
    },
    ETH: (Balnace) => {
        return Balnace / 100;
    },
    SOL: (Balance) => {
        return Balance * 0;
    },
};

const FromBNB = {
    SOL: (Balance) => {
        return Balance * 2;
    },
    ETH: (Balnace) => {
        return Balnace / 50;
    },
    BNB: (Balance) => {
        return Balance * 0;
    },
};
