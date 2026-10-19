const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b === 0 ? "Erro: Divisão por zero!" : a / b;
const potencia = (a, b) => Math.pow(a, b);
const resto = (a, b) => b === 0 ? "Erro: Divisão por zero!" : a % b;

function executarCalculadora(opcao, a, b) {
  switch (opcao) {
    case '1': return somar(a, b);
    case '2': return subtrair(a, b);
    case '3': return multiplicar(a, b);
    case '4': return dividir(a, b);
    case '5': return potencia(a, b);
    case '6': return resto(a, b);
    default: return "Opção inválida!";
  }
}

console.log("Soma (10 + 5):", executarCalculadora('1', 10, 5));
console.log("Divisão (10 / 0):", executarCalculadora('4', 10, 0));