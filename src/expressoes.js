const { isOperator, isNumber, operation } = require("./uteis");
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

module.exports = {
    postFixEvaluation
};