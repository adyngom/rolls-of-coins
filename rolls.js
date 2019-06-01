import { coinsJar } from './oneKCoins';
import { displayRollsMessage, getQuotientRemainder, groupBy } from './Utils';

const coinRolls = { "1": 50, "5": 40, "10": 50, "25": 40 };
const coinLabels = {
    "1": "Pennies",
    "5": "Nickels",
    "10": "Dimes",
    "25": "Quarters"
};

const coinsCount = coinsJar.reduce(groupBy, {});

const coinsInfo = Object.keys(coinsCount).map(key => {
    const totalCoins = coinsCount[key];
    const rollCount = coinRolls[key];
    const label = coinLabels[key];
    const { quotient, remainder } = getQuotientRemainder(totalCoins, rollCount);
    const coinInfo = { label, quotient, remainder };
    return coinInfo;
});

console.log(coinsInfo.map(displayRollsMessage).join("\n"));