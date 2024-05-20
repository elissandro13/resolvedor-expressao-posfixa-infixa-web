class Stack {

    constructor() {
        this.items = [];
    }

    // Coloca elemento no topo da pilha
    push(element) {

        this.items.push(element);

    }

    // Pega elemento do topo e o remove da pilha
    pop() {

        // Underflow se a pilha está vazia
        if (this.isEmpty()) {
            throw new Error("Pilha vazia");
        }

        return this.items.pop();
    }

    // Retorna elemento do topo
    peek() {

        if (this.isEmpty()) {
            throw new Error("Pilha vazia");
        }

        return this.items[this.items.length - 1];
    }

    // Verifica se a pilha está vazia
    isEmpty() {
        return this.items.length === 0;
    }

    //Tamanho da Stack
    size() {
        return this.items.length
    }

    // Imprime a Stack
    printStack() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i];
            if(i !== this.items.length - 1) str += " ";
        }
        return str;
    }

}

module.exports = Stack;