const obterMaior = (lista) => Math.max(...lista);
const obterMenor = (lista) => Math.min(...lista);
const obterMedia = (lista) => lista.reduce((acc, num) => acc + num, 0) / lista.length;
const contarPares = (lista) => lista.filter(num => num % 2 === 0).length;
const contarImpares = (lista) => lista.filter(num => num % 2 !== 0).length;

function analisarNumeros(numeros) {
  if (!numeros || numeros.length === 0) return "Lista vazia.";

  return {
    maior: obterMaior(numeros),
    menor: obterMenor(numeros),
    media: obterMedia(numeros),
    qtdPares: contarPares(numeros),
    qtdImpares: contarImpares(numeros)
  };
}

const lista = [10, 5, 8, 3, 12, 7, 2];
console.log(analisarNumeros(lista));