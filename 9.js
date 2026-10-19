class SistemaAtendimento {
  constructor() {
    this.fila = [];
    this.contadorSenha = 1;
  }

  adicionarPessoa(nome) {
    const pessoa = {
      senha: this.contadorSenha++,
      nome,
      horarioEntrada: new Date().toLocaleTimeString()
    };
    this.fila.push(pessoa);
    return pessoa;
  }

  chamarProximo() {
    if (this.fila.length === 0) return "Ninguém na fila.";
    return this.fila.shift();
  }

  consultarProximo() {
    return this.fila.length > 0 ? this.fila[0] : "Fila vazia.";
  }

  exibirFila() {
    return this.fila;
  }

  quantidadeAguardando() {
    return this.fila.length;
  }
}

const ateno = new SistemaAtendimento();
ateno.adicionarPessoa("Carlos");
ateno.adicionarPessoa("Maria");
console.log("Próximo da fila:", ateno.consultarProximo().nome);
console.log("Atendendo:", ateno.chamarProximo().nome);