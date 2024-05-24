import { postFixEvaluation, inFixEvaluation } from '../utils/resolveExpressoes';

describe('postFixEvaluation', () => {
        test('Avaliar expressão de adição simples', () => { 
        const expression = '2 3 +';
        const result = postFixEvaluation(expression);
        expect(result).toBe(5);
    });
  
    test('Avaliar expressão de subtração simples', () => { 
      const expression = '5 2 -';
      const result = postFixEvaluation(expression);
      expect(result).toBe(3);
    });
  
    test('Avaliar expressão de multiplicação simples', () => { 
      const expression = '3 4 *';
      const result = postFixEvaluation(expression);
      expect(result).toBe(12);
    });
  
    test('Avaliar expressão de divisão simples', () => { 
      const expression = '10 5 /';
      const result = postFixEvaluation(expression);
      expect(result).toBe(2);
    });
  
    test('Deve avaliar uma expressão pós-fixa com adição e multiplicação', () => {
        const expression = "3 4 + 2 *";
        expect(postFixEvaluation(expression)).toBe(14);
    });
    
    test('Deve avaliar uma expressão pós-fixa com multiplicação e adição', () => {
    const expression = "3 4 * 2 +";
    expect(postFixEvaluation(expression)).toBe(14);
    });
  
    test('Avaliar expressão com divisão e subtração', () => { 
      const expression = '10 5 / 3 -';
      const result = postFixEvaluation(expression);
      expect(result).toBe(-1);
    });
  
    test('Avaliar expressão vazia', () => { 
      expect(() => postFixEvaluation('')).toThrowError(new Error('Expressão pós-fixa vazia'));
    });
  
    test('Avaliar expressão com operando inválido', () => { 
      expect(() => postFixEvaluation('abc 2 +')).toThrowError(new Error('Operador desconhecido: abc'));
    });
  
    test('Avaliar expressão com operador inválido', () => { 
      expect(() => postFixEvaluation('2 3 @')).toThrowError(new Error('Operador desconhecido: @'));
    });
  
    test('Avaliar expressão com contagem incorreta de operandos', () => { 
      expect(() => postFixEvaluation('2 3 + 4')).toThrowError(new Error('Expressão pós-fixa inválida'));
    });
  
    test('Deve avaliar uma expressão pós-fixa com todas as operações', () => {
        const expression = "5 2 + 3 * 6 -";
        expect(postFixEvaluation(expression)).toBe(15);
    });

    test('Deve avaliar uma expressão pós-fixa com todas as operações', () => {
        const expression = "5 2 + 3 * 6 /";
        expect(postFixEvaluation(expression)).toBe(3.5);
      });

      test('Deve avaliar a expressão pós-fixa corretamente com número float', () => {
        const expression = "9.874522 7.929620 * 8.681109 + 5.303303 / 3.118387 7.559106 + 7.215866 / +";
        expect(postFixEvaluation(expression)).toBeCloseTo(17.878824);
      });

      test('Deve avaliar a expressão pós-fixa complexa corretamente com número float', () => {
        const expression = "2.337697 6.086307 - 0.125789 - 9.071004 4.981880 * /";
        expect(postFixEvaluation(expression)).toBeCloseTo(-0.0857345);
        const expression2 = "7.325484 2.298093 2.321958 / 4.759999 * *";
        expect(postFixEvaluation(expression2)).toBeCloseTo(34.5109);
      });

});


describe('inFixEvaluation', () => {
  test('Deve avaliar uma expressão infixa simples', () => {
    const expression = "3 + 5";
    expect(inFixEvaluation(expression)).toBe(8);
  });

  test('Deve avaliar uma expressão infixa com múltiplas operações', () => {
    const expression = "10 + 2 * 6";
    expect(inFixEvaluation(expression)).toBe(22);
  });

  test('Deve avaliar uma expressão infixa com parênteses', () => {
    const expression = "100 * ( 2 + 12 ) / 14";
    expect(inFixEvaluation(expression)).toBe(100);
  });

  test('Deve avaliar uma expressão infixa com números decimais', () => {
    const expression = "3.5 + 2.5";
    expect(inFixEvaluation(expression)).toBe(6);
  });

  test('Deve lançar uma exceção para divisão por zero', () => {
    const expression = "10 / 0";
    expect(() => {
      inFixEvaluation(expression);
    }).toThrow(new Error("Divisão por 0 impossível"));
  });

  test('Deve avaliar uma expressão infixa complexa com as 4 operações', () => {
    const expression = "3 + 5 * 2 - 8 / 4";
    expect(inFixEvaluation(expression)).toBe(11);
  });

  test('Deve avaliar uma expressão infixa com números negativos', () => {
    const expression = "-3 + 5";
    expect(inFixEvaluation(expression)).toBe(2);
  });

  test('Deve avaliar uma expressão infixa com todos os operadores', () => {
    const expression = "2 + 3 * 4 - 5 / (6 + 1)";
    expect(inFixEvaluation(expression)).toBeCloseTo(13.285714285714286, 5);
  });

  test('Deve avaliar uma expressão infixa com múltiplos níveis de parênteses', () => {
    const expression = "10 + (2 * 3 + (5 - 2) * 2) * 2";
    expect(inFixEvaluation(expression)).toBe(34);
  });

  test('Deve avaliar uma expressão infixa com parênteses aninhados', () => {
    const expression = "((2 + 3) * 4) - (5 / (1 + 1))";
    expect(inFixEvaluation(expression)).toBe(17.5);
  });

  test('Deve avaliar uma expressão infixa com parênteses vazios', () => {
    const expression = "3 + () + 5";
    expect(() => {
      inFixEvaluation(expression);
    }).toThrow(new Error("Pilha vazia"));
  });

  test('Deve avaliar uma expressão infixa com operadores dentro de parênteses', () => {
    const expression = "(3 + 2) * (5 - 1)";
    expect(inFixEvaluation(expression)).toBe(20);
  });

  test('Deve avaliar uma expressão infixa com parênteses redundantes', () => {
    const expression = "((3)) + (((4)))";
    expect(inFixEvaluation(expression)).toBe(7);
  });

  test('Deve avaliar uma expressão infixa com parênteses e todos os operadores', () => {
    const expression = "((2 + 3) * (4 - 2) / (1 + 1)) + (3 * (2 - 1))";
    expect(inFixEvaluation(expression)).toBe(8);
  });

  test('Avaliar expressão infixa vazia', () => { 
    expect(() => inFixEvaluation('')).toThrowError(new Error('Expressão infixa vazia'));
  });

  test('Deve avaliar uma expressão infixa com parênteses e o primeiro termo negativo', () => {
    const expression = "((-2.5 + 10))";
    expect(inFixEvaluation(expression)).toBe(7.5);
  });

  test('Deve avaliar uma expressão infixa com parênteses e o segundo termo negativo', () => {
    const expression = "((-2 + -1002))";
    expect(inFixEvaluation(expression)).toBe(-1004);
  });

  test('Deve avaliar uma expressão complexa', () => {
    const expression = "( ( ( 2.337697 - 6.086307 ) - 0.125789 ) / ( 9.071004 * 4.981880 ) )";
    expect(inFixEvaluation(expression)).toBeCloseTo(-0.0857345);
    const expression2 = "( 7.325484 * ( ( 2.298093 / 2.321958 ) * 4.759999 ) )";
    expect(inFixEvaluation(expression2)).toBeCloseTo(34.5109);

  });

});
