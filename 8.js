class HistoricoNavegacao {
  constructor() {
    this.pilha = [];
  }

  visitar(pagina) {
    this.pilha.push(pagina);
  }

  paginaAtual() {
    return this.pilha.length > 0 ? this.pilha[this.pilha.length - 1] : "Nenhuma página visitada.";
  }

  voltar() {
    if (this.pilha.length <= 1) {
      this.pilha.pop();
      return "Histórico limpo / Sem páginas anteriores.";
    }
    this.pilha.pop(); 
    return this.paginaAtual();
  }

  exibirHistorico() {
    return [...this.pilha].reverse();
  }
}

const nav = new HistoricoNavegacao();
nav.visitar("google.com");
nav.visitar("github.com");
nav.visitar("stackoverflow.com");
console.log("Página Atual:", nav.paginaAtual());
nav.voltar();
console.log("Após voltar:", nav.paginaAtual());