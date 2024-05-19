const {convertPostfixToInfix, convertInfixToPostFix} = require('../src/converteExpressoes');

describe('convertPostfixToInfix', () => {
    test('Deve converter uma expressão pós-fixa simples para infixa', () => {
      const expression = "2 3 +";
      expect(convertPostfixToInfix(expression)).toBe("( 2 + 3 )");
    });
  
    test('Deve converter uma expressão pós-fixa com multiplicação e adição para infixa', () => {
      const expression = "2 3 + 4 *";
      expect(convertPostfixToInfix(expression)).toBe("( ( 2 + 3 ) * 4 )");
    });
  
    test('Deve converter uma expressão pós-fixa com todas as operações para infixa', () => {
      const expression = "2.337697 6.086307 - 0.125789 - 9.071004 4.981880 * /";
      expect(convertPostfixToInfix(expression)).toBe("( ( ( 2.337697 - 6.086307 ) - 0.125789 ) / ( 9.071004 * 4.981880 ) )");
    });

    test('Deve converter uma expressão pós-fixa com todas as operações para infixa', () => {
      const expression = "7.325484 2.298093 2.321958 / 4.759999 * *";
      expect(convertPostfixToInfix(expression)).toBe("( 7.325484 * ( ( 2.298093 / 2.321958 ) * 4.759999 ) )");
    });
  
    test('Deve lançar uma exceção para uma expressão pós-fixa inválida', () => {
      const expression = "2 3 * +"; // Operador antes dos operandos
      expect(() => {
        convertPostfixToInfix(expression);
      }).toThrow("Expressão pós-fixa inválida");
    });
});

describe('convertInfixToPostFix', () => {
  test('Deve converter expressão infixa simples para pós-fixa', () => {
    const expression = "3 + 5";
    const expected = "3 5 +";
    expect(convertInfixToPostFix(expression)).toBe(expected);
  });

  test('Deve converter expressão infixa complexa para pós-fixa', () => {
    const expression = "10 + 2 * 6";
    const expected = "10 2 6 * +";
    expect(convertInfixToPostFix(expression)).toBe(expected);
  });

  test('Deve converter expressão infixa com parênteses para pós-fixa', () => {
    const expression = "100 * ( 2 + 12 ) / 14";
    const expected = "100 2 12 + * 14 /";
    expect(convertInfixToPostFix(expression)).toBe(expected);
  });

  test('Deve converter expressão infixa com números decimais para pós-fixa', () => {
    const expression = "3.5 + 2.5";
    const expected = "3.5 2.5 +";
    expect(convertInfixToPostFix(expression)).toBe(expected);
  });

  test('Deve converter expressão infixa complexa para pós-fixa', () => {
    const expression = "3 + 5 * 2 - 8 / 4";
    const expected = "3 5 2 * + 8 4 / -";
    expect(convertInfixToPostFix(expression)).toBe(expected);
  });

  test('Deve converter expressão infixa com números negativos para pós-fixa', () => {
    const expression = "-3 + 5";
    const expected = "-3 5 +";
    expect(convertInfixToPostFix(expression)).toBe(expected);
  });

  test('Deve converter expressão infixa com todos os operadores para pós-fixa', () => {
    const expression = "2 + 3 * 4 - 5 / ( 6 + 1 )";
    const expected = "2 3 4 * + 5 6 1 + / -";
    expect(convertInfixToPostFix(expression)).toBe(expected);
  });

  test('Deve converter expressão infixa complexa com parênteses aninhados para pós-fixa', () => {
    const expression = "10 + ( 2 * 3 + ( 5 - 2 ) * 2 ) * 2";
    const expected = "10 2 3 * 5 2 - 2 * + 2 * +";
    expect(convertInfixToPostFix(expression)).toBe(expected);
  });

  test('Deve converter expressão infixa com múltiplos níveis de parênteses para pós-fixa', () => {
    const expression = "((2 + 3) * 4) - (5 / (1 + 1))";
    const expected = "2 3 + 4 * 5 1 1 + / -";
    expect(convertInfixToPostFix(expression)).toBe(expected);
  });

  test('Deve converter expressão infixa complexa para pós-fixa', () => {
    const expression = "2 + 3 * 4 - 5 / 6";
    const expected = "2 3 4 * + 5 6 / -";
    expect(convertInfixToPostFix(expression)).toBe(expected);
  });

  test('Deve converter expressão infixa complexa 2 para pós-fixa', () => {
    const expression = "( 7.325484 * ( ( 2.298093 / 2.321958 ) * 4.759999 ) )";
    const expected = "7.325484 2.298093 2.321958 / 4.759999 * *";
    expect(convertInfixToPostFix(expression)).toBe(expected);
  });

  test('Deve converter expressão infixa complexa 3 para pós-fixa', () => {
    const expression = "( ( ( ( 2.337697 ) - ( 6.086307 ) ) - ( 0.125789 ) ) / ( ( 9.071004 ) * ( 4.981880 ) ) )";
    const expected = "2.337697 6.086307 - 0.125789 - 9.071004 4.981880 * /";
    expect(convertInfixToPostFix(expression)).toBe(expected);
  });



});