const {postFixEvaluation} = require('../src/resolveExpressoes');


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
      expect(() => postFixEvaluation('')).toThrowError('Expressão pós-fixa vazia');
    });
  
    test('Avaliar expressão com operando inválido', () => { 
      expect(() => postFixEvaluation('abc 2 +')).toThrowError('Operador desconhecido: abc');
    });
  
    test('Avaliar expressão com operador inválido', () => { 
      expect(() => postFixEvaluation('2 3 @')).toThrowError('Operador desconhecido: @');
    });
  
    test('Avaliar expressão com contagem incorreta de operandos', () => { 
      expect(() => postFixEvaluation('2 3 + 4')).toThrowError('Expressão pós-fixa inválida');
    });
  
    test('Deve avaliar uma expressão pós-fixa com todas as operações', () => {
        const expression = "5 2 + 3 * 6 -";
        // Passos:
        // 1. 5 + 2 = 7
        // 2. 7 * 3 = 21
        // 3. 21 - 6 = 15
        expect(postFixEvaluation(expression)).toBe(15);
    });

    test('Deve avaliar uma expressão pós-fixa com todas as operações', () => {
        const expression = "5 2 + 3 * 6 /";
        // Passos:
        // 1. 5 + 2 = 7
        // 2. 7 * 3 = 21
        // 3. 21 / 6 = 3.5
        expect(postFixEvaluation(expression)).toBe(3.5);
      });

      test('Deve avaliar a expressão pós-fixa corretamente com número float', () => {
        const expression = "9.874522 7.929620 * 8.681109 + 5.303303 / 3.118387 7.559106 + 7.215866 / +";
        expect(postFixEvaluation(expression)).toBeCloseTo(17.878824);
      });
});