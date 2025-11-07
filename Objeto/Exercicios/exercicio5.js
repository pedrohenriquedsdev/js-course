// 🏦 Exercício — Conta bancária

// Crie um objeto chamado conta com as propriedades titular e saldo.
// Adicione dois métodos:

// depositar(valor) → adiciona o valor ao saldo.

// sacar(valor) → subtrai o valor do saldo.
// Ambos devem exibir o saldo atualizado no console.

const conta = {
    titular: 'Pedro Henrique dos Santos',
    saldo: 1950.00,
    depositar (valor) {
        this.saldo += valor;
        console.log(`Valor Atualizado pós Depósito = ${this.saldo}`)
    },
    sacar(valor) {
        this.saldo -= valor;
        console.log(`Valor Atualizado pós Saque = ${this.saldo}`);
        
    }
}

conta.depositar(100);
conta.sacar(200);