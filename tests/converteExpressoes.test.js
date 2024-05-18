const {postFixEvaluation} = require('../src/resolveExpressoes');
const {convertPostfixInfix} = require('../src/converteExpressoes');

describe('convertPostfixInfix', () => {
    test('Deve converter uma expressão pós-fixa simples para infixa', () => {
      const expression = "2 3 +";
      expect(convertPostfixInfix(expression)).toBe("(2 + 3)");
    });
  
    test('Deve converter uma expressão pós-fixa com multiplicação e adição para infixa', () => {
      const expression = "2 3 + 4 *";
      expect(convertPostfixInfix(expression)).toBe("((2 + 3) * 4)");
    });
  
    test('Deve converter uma expressão pós-fixa com todas as operações para infixa', () => {
      const expression = "9.874522 7.929620 * 8.681109 + 5.303303 / 3.118387 7.559106 + 7.215866 / +";
      expect(convertPostfixInfix(expression)).toBe("(((9.874522 * 7.929620) + 8.681109) / (5.303303 + ((3.118387 + 7.559106) / 7.215866)))");
    });
  
    test('Deve lançar uma exceção para uma expressão pós-fixa inválida', () => {
      const expression = "2 3 * +"; // Operador antes dos operandos
      expect(() => {
        convertPostfixInfix(expression);
      }).toThrow("Expressão pós-fixa inválida");
    });
});