const Stack = require('../src/stack'); // Importar a classe Stack
const { isNumber, isOperator } = require('../src/uteis'); // Importe as funções uteis

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