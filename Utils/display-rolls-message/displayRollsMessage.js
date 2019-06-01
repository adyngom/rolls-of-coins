export function displayRollsMessage(info) {
    const { label, quotient: rolls, remainder: left } = info;
    return `${label}: ${rolls} rolls - ${left} left`;
}