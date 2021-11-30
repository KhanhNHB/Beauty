export const currencyFormat = number => {
    return number.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + ".")) + prev;
    });
}