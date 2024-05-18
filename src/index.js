const { postFixEvaluation } = require("./resolveExpressoes");

let expression = "10 5 / 2 3 -";
let resultado = postFixEvaluation(expression);
console.log(resultado); // Deve imprimir o resultado da expressão

expression = "2 3 4 * 5 6 / + 10 -";
resultado = postFixEvaluation(expression);
console.log(resultado); // Deve imprimir o resultado da expressão

expression = "10 5 / 2 3 -";
resultado = postFixEvaluation(expression);
const result = postFixEvaluation(expression);
console.log(resultado); // Deve imprimir o resultado da expressão