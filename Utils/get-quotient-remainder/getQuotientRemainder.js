export function getQuotientRemainder(x, y) {
    if (!y) {
        // will catch falsey values: 0, false, null, '', "", ``, undefined
        throw new Error('we need an x value and a y value');
    }
    return { quotient: parseInt(x / y), remainder: x % y };
}