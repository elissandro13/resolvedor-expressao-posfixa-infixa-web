function isOperator(c) {
    return c === '+' || c === '-' || c === '*' || c === '/';
}

function isNumber(str) {
    return !isNaN(parseFloat(str)) && isFinite(str);
}

function operation(x, y, op) {
    if (op === "+") {
        return x + y;
    } else if (op === "*") {
        return x * y;
    } else if (op === "/") {
        if (y === 0) {
            throw new Error("Divisão por 0 impossível");
        } else {
            return x / y;
        }
    } else if (op === "-") {
        return x - y;
    }
    
    throw new Error(`Operador desconhecido: ${op}`);
}



module.exports = {
    isOperator,
    isNumber,
    operation
};