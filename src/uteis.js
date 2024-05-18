function isOperator(c) {
    return c === '+' || c === '-' || c === '*' || c === '/';
}

function isNumber(str) {
    return !isNaN(parseFloat(str)) && isFinite(str);
}


module.exports = {
    isOperator,
    isNumber
};