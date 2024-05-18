function postFixEvaluation(expression){

    const stack = new Stack();
    const tokens = expression.split(" ");

    tokens.forEach(token => {
        if (!isNaN(token)) {
            // Se o token é um número, empilhe-o
            stack.push(Number(token));
        } else {
            // Caso contrário, o token é um operador
            const right = stack.pop();
            const left = stack.pop();
            let result;

            switch (token) {
                case '+':
                    result = left + right;
                    break;
                case '-':
                    result = left - right;
                    break;
                case '*':
                    result = left * right;
                    break;
                case '/':
                    result = left / right;
                    break;
                default:
                    throw new Error(`Operador desconhecido: ${token}`);
            }
            stack.push(result);
        }
    });

    // O resultado final estará no topo da pilha
    if (stack.size() !== 1) {
        throw new Error("Expressão pós-fixa inválida");
    }
    
    return stack.pop();
}