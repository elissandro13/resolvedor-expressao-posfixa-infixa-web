const Stack = require('./stack');
const { isOperator, isNumber} = require("./uteis");

function convertPostfixInfix(expression) {
    const stack = new Stack();
    
    const tokens = expression.split(" ");
    
    for (let token of tokens) {
        if (token == "" || token == " ")
            continue;
        else if (isNumber(token)) {
            stack.push(token); // Se o token for um número, empilhe-o
        } else if (isOperator(token)) {
            if (stack.size() < 2) {
                throw new Error("Expressão pós-fixa inválida: não há operandos suficientes para o operador");
            }
            const rightOperand = stack.pop();
            const leftOperand = stack.pop();
            const infixExpression = `( ${leftOperand} ${token} ${rightOperand} )`;
            stack.push(infixExpression); // Se o token for um operador, desempilhe os operandos, crie uma expressão infixa e empilhe-a
        } else {
            //console.log(`Token  -${token}-`);
            //console.log(stack.printStack());
            //console.log(token == "");
            throw new Error("Expressão pós-fixa inválida: token inválido encontrado");
        }
    }
    
    if (stack.size() !== 1) {
        throw new Error("Expressão pós-fixa inválida: a pilha não contém uma expressão infixa válida");
    }
    
    // No final, a expressão infixa estará no topo da pilha
    return stack.pop();
}

module.exports = {
    convertPostfixInfix
};