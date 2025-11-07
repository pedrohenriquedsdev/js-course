// 🚗 Exercício — Carro

// Crie um objeto chamado carro com as propriedades marca, modelo e velocidade.
// Adicione um método chamado acelerar que aumente a velocidade em 20 a cada chamada e mostre no console a nova velocidade do carro.

const carro = {
    marca: 'Volks',
    modelo: 'Suv',
    velocidade: 40,
    acelerar () {
        this.velocidade += 20;
        console.log(`Velocidade Aumentada: ${this.velocidade} Km/h`);
        return;
    }
}

carro.acelerar()
