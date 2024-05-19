const { isOperator, isNumber, operation, precedence } = require("./uteis");
const Stack = require('./stack');

function postFixEvaluation(expression){

    const stack = new Stack();

    if (expression == "")
        throw new Error("Expressão pós-fixa vazia");

    const tokens = expression.split(" ");

    tokens.forEach(token => {
        
        if (isNumber(token)) {
            // Se o token é um número, empilhe-o
            stack.push(Number(token));
        } else {
        
            if (isOperator(token)) {
                // Caso contrário, o token é um operador válido
                const right = stack.pop();
                const left = stack.pop();
                let result;

                result = operation(left, right, token);
                
                stack.push(result)
                //console.log(stack.printStack());
            } else {
                //console.log(`Token  -${token}-`);
                //console.log(stack.printStack());
                //console.log(token == "")
                if(!(token == "" || token == " "))
                    throw new Error(`Operador desconhecido: ${token}`);
            }
        }
    });

    //console.log(stack.printStack());

    // O resultado final estará no topo da pilha
    if (stack.size() !== 1) {
      throw new Error("Expressão pós-fixa inválida");
    }
    
    return stack.pop();
}


function inFixEvaluation(expression) {

    if (expression == "")
        throw new Error("Expressão infixa vazia");


    const values = new Stack();
    const ops = new Stack();
    let i = 0;

    while (i < expression.length) {
        if (expression[i] === ' ') {
            i++;
            continue;
        }

        if (expression[i] === '-' && (i === 0 || expression[i - 1] === '(' || isOperator(expression[i - 2]))) {
            // Quando é um número negativo. Ex: (-2 + 10)
            i++;
            let val = 0;
            let decimal = false;
            let decimalPlace = 0.1;

            while (i < expression.length && ((expression[i] >= '0' && expression[i] <= '9') || expression[i] === '.')) {
                if (expression[i] === '.') {
                    decimal = true;
                } else if (decimal) {
                    val += (expression[i] - '0') * decimalPlace;
                    decimalPlace /= 10;
                } else {
                    val = (val * 10) + (expression[i] - '0');
                }
                i++;
            }
            values.push(-val);
            i--;
        }

        else if (expression[i] >= '0' && expression[i] <= '9') {
            let val = 0;

            while (i < expression.length && (expression[i] >= '0' && expression[i] <= '9' || expression[i] === '.')) {
                if (expression[i] === '.') {
                    let decimal = 0;
                    i++;
                    let decimalPlace = 0.1;
                    while (i < expression.length && expression[i] >= '0' && expression[i] <= '9') {
                        decimal += (expression[i] - '0') * decimalPlace;
                        decimalPlace /= 10;
                        i++;
                    }
                    val += decimal;
                    break;
                }
                val = (val * 10) + (expression[i] - '0');
                i++;
            }

            values.push(val);
            i--;
        } else if (expression[i] === '(') {
            ops.push(expression[i]);
        } else if (expression[i] === ')') {
            while (ops.size() > 0 && ops.peek() !== '(') {
                const val2 = values.pop();
                const val1 = values.pop();
                const op = ops.pop();
                values.push(operation(val1, val2, op));
            }
            ops.pop();
        } else if (isOperator(expression[i])) {
            while (ops.size() > 0 && precedence(ops.peek()) >= precedence(expression[i])) {
                const val2 = values.pop();
                const val1 = values.pop();
                const op = ops.pop();
                values.push(operation(val1, val2, op));
            }
            ops.push(expression[i]);
        }
        i++;
    }

    while (ops.size() > 0) {
        const val2 = values.pop();
        const val1 = values.pop();
        const op = ops.pop();
        values.push(operation(val1, val2, op));
    }

    return values.pop();
}



module.exports = {
    postFixEvaluation,
    inFixEvaluation
};