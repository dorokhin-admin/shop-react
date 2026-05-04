
export const selectCartTotals = (cart, isBonusActive) => {
    const sumResult = cart.reduce((sum, o) => sum + o.price * o.quantity, 0);

    const sumPromo = cart.reduce(
        (acc, o) => acc + o.quantity * (o.price * o.promo / 100),
        0
    );

    const discontSumPrice = cart.reduce(
        (acc, o) => acc + o.price * o.quantity * (1 - o.promo / 100),
        0
    );

    const bonus = discontSumPrice * 0.1;

    const bonusAmount = 200;
    const maxBonusUsage = Math.max(0, discontSumPrice - 1000);

    const appliedBonus = isBonusActive
        ? Math.min(bonusAmount, maxBonusUsage)
        : 0;

    const finalPrice = discontSumPrice - appliedBonus;

    const canOrder = finalPrice >= 1000;



    return {
        sumResult,
        sumPromo,
        discontSumPrice,
        bonus,
        appliedBonus,
        finalPrice,
        canOrder,
        bonusAmount,
    };
};