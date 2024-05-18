const Stack = require('../src/stack'); // Importar a classe Stack

describe('Stack', () => {
  let stack; // Variável para armazenar instância da pilha

  beforeEach(() => {
    stack = new Stack(); // Criar nova instância da pilha antes de cada teste
  });

  test('deve ser criada vazia', () => {
    expect(stack.isEmpty()).toBe(true);
  });

  test('deve empilhar elementos', () => {
    stack.push(10);
    stack.push(20);
    expect(stack.size()).toBe(2);
  });

  test('deve desempilhar elementos', () => {
    stack.push(10);
    stack.push(20);
    expect(stack.pop()).toBe(20);
    expect(stack.pop()).toBe(10);
  });

  test('deve retornar "Pilha vazia" ao desempilhar de uma pilha vazia', () => {
    stack.push(10);
    stack.pop();
    expect(() => stack.pop()).toThrowError("Pilha vazia");
  });

  test('deve retornar o elemento do topo sem removê-lo', () => {
    stack.push(10);
    stack.push(20);
    expect(stack.peek()).toBe(20);
    expect(stack.size()).toBe(2);
  });

  test('deve retornar "Pilha vazia" ao pegar o elemento do topo de uma pilha vazia', () => {
    expect(() => stack.peek()).toThrowError("Pilha vazia");
  });

  test('deve indicar quando está vazia', () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push(10);
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });

  test('deve imprimir a pilha corretamente', () => {
    stack.push(10);
    stack.push(20);
    stack.push(30);
    expect(stack.printStack()).toBe("10 20 30");
  });

});