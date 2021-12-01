export const currencyFormat = number => {
    return number.toString().split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + ".")) + prev;
    });
}