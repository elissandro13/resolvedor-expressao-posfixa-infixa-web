const Stack = require('../src/stack'); // Importar a classe Stack
const { isNumber, isOperator, operation } = require('../src/uteis'); // Importe as funções uteis

describe('isNumber', () => {
    test('Deve retornar true para uma string que representa um número', () => {
      expect(isNumber('123')).toBe(true);
      expect(isNumber('10.5')).toBe(true);
      expect(isNumber('-5')).toBe(true);
    });
  
    test('Deve retornar false para uma string que não representa um número', () => {
      expect(isNumber('abc')).toBe(false);
      expect(isNumber('10a')).toBe(false);
      expect(isNumber('')).toBe(false);
    });
});
  
describe('isOperator', () => {
    test('Deve retornar true para Operadores válidos', () => {
      expect(isOperator('+')).toBe(true);
      expect(isOperator('-')).toBe(true);
      expect(isOperator('*')).toBe(true);
      expect(isOperator('/')).toBe(true);
    });
  
    test('Deve retornar false para caracteres que não são Operatores', () => {
      expect(isOperator('a')).toBe(false);
      expect(isOperator('10')).toBe(false);
      expect(isOperator(' ')).toBe(false);
    });
});

describe('operation', () => {
    test('Deve retornar a soma de dois números positivos inteiros', () => {
      expect(operation(3, 4, '+')).toBe(7);
    });
  
    test('Deve retornar a soma de dois números negativos inteiros', () => {
      expect(operation(-3, -4, '+')).toBe(-7);
    });
  
    test('Deve retornar o produto de dois números positivos inteiros', () => {
      expect(operation(3, 4, '*')).toBe(12);
    });
  
    test('Deve retornar o produto de um número positivo inteiro e um número negativo inteiro', () => {
      expect(operation(3, -4, '*')).toBe(-12);
    });
  
    test('Deve retornar a divisão de dois números positivos inteiros', () => {
      expect(operation(10, 2, '/')).toBe(5);
    });
  
    test('Deve retornar a divisão de dois números negativos inteiros', () => {
      expect(operation(-10, -2, '/')).toBe(5);
    });
  
    test('Deve retornar a divisão de um número negativo inteiro por um número positivo inteiro', () => {
      expect(operation(-10, 2, '/')).toBe(-5);
    });
  
    test('Deve retornar a multiplicação de dois números negativos inteiros', () => {
      expect(operation(-3, -4, '*')).toBe(12);
    });
  
    test('Deve retornar a subtração de dois números positivos inteiros', () => {
      expect(operation(8, 3, '-')).toBe(5);
    });
  
    test('Deve retornar a subtração de um número positivo inteiro e um número negativo inteiro', () => {
      expect(operation(8, -3, '-')).toBe(11);
    });
  
    test('Deve retornar a soma de dois números float', () => {
      expect(operation(3.5, 4.2, '+')).toBeCloseTo(7.7);
    });
  
    test('Deve retornar o produto de dois números float', () => {
      expect(operation(3.5, 4.2, '*')).toBeCloseTo(14.7);
    });
  
    test('Deve retornar a divisão de dois números float', () => {
      expect(operation(10.5, 2.5, '/')).toBeCloseTo(4.2);
    });
  
    test('Deve retornar a divisão de um número float por um número inteiro', () => {
      expect(operation(10.5, 2, '/')).toBeCloseTo(5.25);
    });
  
    test('Deve lançar uma exceção ao tentar dividir por zero', () => {
      expect(() => {
        operation(10, 0, '/');
      }).toThrow("Divisão por 0 impossível");
    });

    test('Deve lançar uma exceção ao tentar utilizar um operador desconhecido', () => {
        expect(() => {
          operation(10, 1, '^');
        }).toThrow("Operador desconhecido: ^");
      });
});