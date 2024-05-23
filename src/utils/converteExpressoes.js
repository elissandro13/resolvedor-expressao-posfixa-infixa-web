const Stack = require('./stack');
const {isOperator, isNumber, isOperand, precedence, replaceAll} = require("./uteis");

function convertPostfixToInfix(expression) {
    const stack = new Stack();

    if(expression === "")
        return ""
    
    const tokens = expression.split(" ");
    
    for (let token of tokens) {
        if (token === "" || token === " ")
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
            throw new Error("Expressão pós-fixa inválida: token inválido encontrado");
        }
    }
    
    if (stack.size() !== 1) {
        throw new Error("Expressão pós-fixa inválida: a pilha não contém uma expressão infixa válida");
    }
    
    // No final, a expressão infixa estará no topo da pilha
    return stack.pop();
}



function convertInfixToPostFix(expression) {
    const stack = new Stack();
    let output = "";

    for (let i = 0; i < expression.length; i++) {
        const c = expression[i];

        // Quando é um número negativo. Ex: (-2 + 10)
        if (expression[i] === '-' && (i === 0 || expression[i - 1] === '(' || isOperator(expression[i - 1])) && isNumber(expression[i + 1])) {
            output += '-';
            i++;
            while (i < expression.length && isOperand(expression[i])) {
                output += expression[i];
                i++;
            }
            output += ' ';
            i--;
        }
        // Se o caractere é um número ou ponto decimal, adicione-o ao output
        else if (isOperand(expression[i])) {
            while (i < expression.length && isOperand(expression[i])) {
                output += expression[i];
                i++;
            }
            output += ' ';
            i--;
        }
        // Se o caractere é um espaço, continue para o próximo caractere
        else if (c === ' ' || c === '') {
            continue;
        }
        // Se o caractere é um operador
        else if (isOperator(c)) {
            output += ' ';
            while (!stack.isEmpty() && precedence(stack.peek()) >= precedence(c)) {
                output += stack.pop() + ' ';
            }
            stack.push(c);
        }
        // Se o caractere é um parêntese esquerdo, empilhe-o
        else if (c === '(') {
            stack.push(c);
        }
        // Se o caractere é um parêntese direito, pop da pilha até encontrar um parêntese esquerdo
        else if (c === ')') {
            while (!stack.isEmpty() && stack.peek() !== '(') {
                output += stack.pop() + ' ';
            }
            stack.pop();
        }
    }

    // Pop todos os operadores restantes da pilha
    while (!stack.isEmpty()) {
        output += stack.pop() + ' ';
    }

    output = replaceAll(output, "  ", " ");
    return output.trim();
}



module.exports = {
    convertPostfixToInfix,
    convertInfixToPostFix
};