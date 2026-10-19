class GerenciadorTarefas {
  constructor() {
    this.tarefas = [];
    this.proximoId = 1;
  }

  adicionar(descricao) {
    const novaTarefa = { id: this.proximoId++, descricao, concluida: false };
    this.tarefas.push(novaTarefa);
    return novaTarefa;
  }

  listar() {
    return this.tarefas;
  }

  buscar(termo) {
    return this.tarefas.filter(t => 
      t.descricao.toLowerCase().includes(termo.toLowerCase()) 
    );
  }

  alterar(id, novaDescricao) {
    const tarefa = this.tarefas.find(t => t.id === id);
    if (tarefa) {
      tarefa.descricao = novaDescricao;
      return true;
    }
    return false;
  }

  remover(id) {
    const index = this.tarefas.findIndex(t => t.id === id);
    if (index !== -1) {
      this.tarefas.splice(index, 1);
      return true;
    }
    return false;
  }

  alternarConcluida(id) {
    const tarefa = this.tarefas.find(t => t.id === id);
    if (tarefa) {
      tarefa.concluida = !tarefa.concluida;
      return true;
    }
    return false;
  }

  totalTarefas() {
    return this.tarefas.length;
  }
}

const gerrenciador = new GerenciadorTarefas();
gerrenciador.adicionar("Estudar JavaScript");
gerrenciador.adicionar("Fazer compras");
gerrenciador.alternarConcluida(1);
console.log("Lista de Tarefas:", gerrenciador.listar());