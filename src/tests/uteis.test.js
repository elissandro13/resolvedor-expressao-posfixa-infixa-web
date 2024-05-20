import { isNumber, isOperator, operation, precedence, isOperand, replaceAll } from '../utils/uteis';

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

describe('precedence', () => {
    test('Deve retornar 1 para operadores de soma (+)', () => {
      expect(precedence('+')).toBe(1);
    });
  
    test('Deve retornar 1 para operadores de subtração (-)', () => {
      expect(precedence('-')).toBe(1);
    });
  
    test('Deve retornar 2 para operadores de multiplicação (*)', () => {
      expect(precedence('*')).toBe(2);
    });
  
    test('Deve retornar 2 para operadores de divisão (/)', () => {
      expect(precedence('/')).toBe(2);
    });
  
    test('Deve retornar -1 para operadores desconhecidos', () => {
      expect(precedence('%')).toBe(-1);
      expect(precedence('^')).toBe(-1);
      expect(precedence('(')).toBe(-1);
      expect(precedence(')')).toBe(-1);
    });
  
    test('Deve retornar -1 para strings vazias e caracteres não operadores', () => {
      expect(precedence('')).toBe(-1);
      expect(precedence('a')).toBe(-1);
      expect(precedence('1')).toBe(-1);
      expect(precedence('=')).toBe(-1);
    });
  });

  describe('isOperand', () => {
    test('Deve retornar true para dígitos', () => {
        expect(isOperand('0')).toBe(true);
        expect(isOperand('1')).toBe(true);
        expect(isOperand('2')).toBe(true);
        expect(isOperand('3')).toBe(true);
        expect(isOperand('4')).toBe(true);
        expect(isOperand('5')).toBe(true);
        expect(isOperand('6')).toBe(true);
        expect(isOperand('7')).toBe(true);
        expect(isOperand('8')).toBe(true);
        expect(isOperand('9')).toBe(true);
    });

    test('Deve retornar true para ponto decimal', () => {
        expect(isOperand('.')).toBe(true);
    });

    test('Deve retornar false para operadores', () => {
        expect(isOperand('+')).toBe(false);
        expect(isOperand('-')).toBe(false);
        expect(isOperand('*')).toBe(false);
        expect(isOperand('/')).toBe(false);
    });

    test('Deve retornar false para caracteres não numéricos', () => {
        expect(isOperand('a')).toBe(false);
        expect(isOperand(' ')).toBe(false);
        expect(isOperand('!')).toBe(false);
    });

    test('Deve retornar false para strings vazias', () => {
        expect(isOperand('')).toBe(false);
    });

    test('Deve retornar false para caracteres especiais', () => {
        expect(isOperand('@')).toBe(false);
        expect(isOperand('#')).toBe(false);
        expect(isOperand('$')).toBe(false);
        expect(isOperand('%')).toBe(false);
        expect(isOperand('^')).toBe(false);
        expect(isOperand('&')).toBe(false);
        expect(isOperand('(')).toBe(false);
        expect(isOperand(')')).toBe(false);
    });
});

describe('replaceAll', () => {
    test('Deve substituir todas as ocorrências de um substring por outro substring', () => {
        const str = "hello world, hello universe";
        const search = "hello";
        const replacement = "hi";
        const expected = "hi world, hi universe";
        expect(replaceAll(str, search, replacement)).toBe(expected);
    });

    test('Deve retornar a string original se o substring de busca não for encontrado', () => {
        const str = "hello world";
        const search = "bye";
        const replacement = "hi";
        const expected = "hello world";
        expect(replaceAll(str, search, replacement)).toBe(expected);
    });

    test('Deve funcionar corretamente com strings vazias', () => {
        const str = "";
        const search = "hello";
        const replacement = "hi";
        const expected = "";
        expect(replaceAll(str, search, replacement)).toBe(expected);
    });

    test('Deve substituir corretamente caracteres especiais', () => {
        const str = "a+b+c+d";
        const search = "+";
        const replacement = "-";
        const expected = "a-b-c-d";
        expect(replaceAll(str, search, replacement)).toBe(expected);
    });

    test('Deve substituir corretamente um substring que aparece no início e no final da string', () => {
        const str = "start and end start";
        const search = "start";
        const replacement = "finish";
        const expected = "finish and end finish";
        expect(replaceAll(str, search, replacement)).toBe(expected);
    });

    test('Deve substituir corretamente substrings adjacentes', () => {
        const str = "aaa";
        const search = "a";
        const replacement = "b";
        const expected = "bbb";
        expect(replaceAll(str, search, replacement)).toBe(expected);
    });

    test('Deve substituir corretamente substrings que incluem espaços', () => {
        const str = "one two three";
        const search = " ";
        const replacement = "_";
        const expected = "one_two_three";
        expect(replaceAll(str, search, replacement)).toBe(expected);
    });

    test('Deve substituir corretamente um substring por uma string vazia', () => {
        const str = "remove all spaces";
        const search = " ";
        const replacement = "";
        const expected = "removeallspaces";
        expect(replaceAll(str, search, replacement)).toBe(expected);
    });

    test('Deve substituir corretamente dois espaços por um', () => {
        const str = "this  is  a  test";
        const search = "  ";
        const replacement = " ";
        const expected = "this is a test";
        expect(replaceAll(str, search, replacement)).toBe(expected);
    });
});