function somarListaRecursiva(lista) {
  if (lista.length === 0) return 0;
  
  const [primeiro, ...resto] = lista;
  return primeiro + somarListaRecursiva(resto);
}

console.log("Soma [10, 20, 5, 3]:", somarListaRecursiva([10, 20, 5, 3]));
