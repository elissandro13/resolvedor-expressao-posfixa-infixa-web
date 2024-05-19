const {postFixEvaluation} = require('../src/resolveExpressoes');
const {convertPostfixInfix} = require('../src/converteExpressoes');

describe('convertPostfixInfix', () => {
    test('Deve converter uma expressão pós-fixa simples para infixa', () => {
      const expression = "2 3 +";
      expect(convertPostfixInfix(expression)).toBe("( 2 + 3 )");
    });
  
    test('Deve converter uma expressão pós-fixa com multiplicação e adição para infixa', () => {
      const expression = "2 3 + 4 *";
      expect(convertPostfixInfix(expression)).toBe("( ( 2 + 3 ) * 4 )");
    });
  
    test('Deve converter uma expressão pós-fixa com todas as operações para infixa', () => {
      const expression = "2.337697 6.086307 - 0.125789 - 9.071004 4.981880 * /";
      expect(convertPostfixInfix(expression)).toBe("( ( ( 2.337697 - 6.086307 ) - 0.125789 ) / ( 9.071004 * 4.981880 ) )");
    });

    test('Deve converter uma expressão pós-fixa com todas as operações para infixa', () => {
      const expression = "7.325484  2.298093  2.321958  /  4.759999  *  *";
      expect(convertPostfixInfix(expression)).toBe("( 7.325484 * ( ( 2.298093 / 2.321958 ) * 4.759999 ) )");
    });
  
    test('Deve lançar uma exceção para uma expressão pós-fixa inválida', () => {
      const expression = "2 3 * +"; // Operador antes dos operandos
      expect(() => {
        convertPostfixInfix(expression);
      }).toThrow("Expressão pós-fixa inválida");
    });
});