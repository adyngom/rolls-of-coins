export function groupBy(bag, coins) {
    !!bag[coins] ? (bag[coins] += 1) : (bag[coins] = 1);
    return {...bag };
}