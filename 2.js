const validarNome = (nome) => typeof nome === 'string' && nome.trim().length > 0;
const validarIdade = (idade) => Number.isInteger(idade) && idade >= 14 && idade <= 120;
const validarEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validarSenha = (senha) => typeof senha === 'string' && senha.length >= 8;

function cadastrarUsuario(dados) {
  const erros = [];

  if (!validarNome(dados.nome)) erros.push("Nome não pode estar vazio.");
  if (!validarIdade(dados.idade)) erros.push("Idade deve estar entre 14 e 120 anos.");
  if (!validarEmail(dados.email)) erros.push("E-mail em formato inválido.");
  if (!validarSenha(dados.senha)) erros.push("Senha deve ter no mínimo 8 caracteres.");

  if (erros.length > 0) {
    console.log("Falha no cadastro:");
    erros.forEach(erro => console.log(`- ${erro}`));
    return false;
  }

  console.log("Cadastro concluído com sucesso!");
  return true;
}

cadastrarUsuario({ nome: "Ana", idade: 20, email: "ana@email.com", senha: "12345678" });