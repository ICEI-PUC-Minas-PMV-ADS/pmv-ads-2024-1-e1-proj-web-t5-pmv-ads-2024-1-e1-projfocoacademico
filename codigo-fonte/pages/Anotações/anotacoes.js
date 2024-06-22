// armazenamento local
function salvarAnotacoes(anotacoes) {
  const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
  const indexUsuario = getListaUsuarios().findIndex(
    (usuario) => usuario.email == usuarioLogado,
  );
  const listaUsuarios = getListaUsuarios();
  console.log(indexUsuario, usuarioLogado);
  listaUsuarios[indexUsuario].anotacoes = anotacoes;

  localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));
  localStorage.setItem("anotacoes", JSON.stringify(anotacoes));
}

function getListaUsuarios() {
  const usuariosJSON = localStorage.getItem("listaUsuarios") || "[]";
  return JSON.parse(usuariosJSON);
}

// gerenciar o modal
function abrirModalNovaAnotacao() {
  document.getElementById("modalCriarEditar").style.display = "block";
  limparFormularioModal();
}

function abrirModalEditarAnotacao(indiceAnotacao) {
  document.getElementById("modalCriarEditar").style.display = "block";
  preencherModal(indiceAnotacao);
}

function limparFormularioModal() {
  const tituloInput = document.getElementById("titulo");
  const conteudoTextarea = document.getElementById("conteudo");
  document.getElementById("modalCriarEditar").dataset.indiceAnotacao = "";
  tituloInput.value = "";
  conteudoTextarea.value = "";
}

function fecharModal() {
  document.getElementById("modalCriarEditar").style.display = "none";
}

function preencherModal(indiceAnotacao) {
  const tituloInput = document.getElementById("titulo");
  const conteudoTextarea = document.getElementById("conteudo");

  const anotacao = recuperarAnotacoes()[indiceAnotacao];

  tituloInput.value = anotacao.titulo || "";
  conteudoTextarea.value = anotacao.conteudo || "";

  document.getElementById("modalCriarEditar").dataset.indiceAnotacao =
    indiceAnotacao;
}

// gerenciar anotações
function gerarID() {
  return Math.floor(Math.random() * 1000000);
}

function carregarAnotacoes() {
  const anotacoes = recuperarAnotacoes();
  if (anotacoes.length > 0) {
    preencherListaAnotacoes(anotacoes);
    console.log("Anotações carregadas com sucesso!");
  } else {
    preencherListaAnotacoes(anotacoes);
  }
}

function recuperarAnotacoes() {
  const anotacoesSalvas = localStorage.getItem("anotacoes");
  if (anotacoesSalvas) {
    return JSON.parse(anotacoesSalvas);
  } else {
    return [];
  }
}

function criarElementoAnotacao(anotacao, index) {
  const li = document.createElement("li");
  li.classList.add("anotacao");

  li.dataset.index = index;

  const h3 = document.createElement("h3");
  h3.textContent = anotacao.titulo;
  li.appendChild(h3);

  const p = document.createElement("p");
  p.textContent = anotacao.conteudo;
  li.appendChild(p);

  const btnExcluir = document.createElement("button");
  btnExcluir.classList.add("btn-excluir");
  btnExcluir.innerHTML = '<i class="fa fa-trash"></i>';
  btnExcluir.onclick = () => excluirAnotacao(index);
  li.appendChild(btnExcluir);

  const btnEditar = document.createElement("button");
  btnEditar.classList.add("btn-editar");
  btnEditar.innerHTML = '<i class="fa fa-pen  "></i>';
  btnEditar.onclick = () => abrirModalEditarAnotacao(index);
  li.appendChild(btnEditar);

  return li;
}

// excluir anotação
function excluirAnotacao(indice) {
  if (confirm("Tem certeza que deseja excluir esta anotação?")) {
    let anotacoes = recuperarAnotacoes();
    console.log(indice);
    anotacoes.splice(indice, 1);
    console.log(anotacoes);
    salvarAnotacoes(anotacoes);
    carregarAnotacoes();
    console.log("Anotação excluída com sucesso!");
  }
}

function mostrarMensagemErro(mensagem) {
  alert("Erro: " + mensagem);
}

function preencherListaAnotacoes(anotacoes) {
  const listaAnotacoes = document.querySelector(".lista-anotacoes");
  listaAnotacoes.innerHTML = "";

  anotacoes.forEach((anotacao, index) => {
    const anotacaoHTML = criarElementoAnotacao(anotacao, index);
    listaAnotacoes.appendChild(anotacaoHTML);
  });
}

// atualizar a anotação na lista após salvar ou excluir
function atualizarAnotacaoNaLista(indice, novaAnotacao) {
  const listaAnotacoes = document.querySelector(".lista-anotacoes");
  const anotacaoHTML = criarElementoAnotacao(novaAnotacao);

  if (indice > -1 && indice < listaAnotacoes.children.length) {
    listaAnotacoes.children[indice].replaceWith(anotacaoHTML);
  } else {
    listaAnotacoes.appendChild(anotacaoHTML);
  }
}

// salvar anotação
function salvarAnotacao() {
  const tituloInput = document.getElementById("titulo");
  const conteudoTextarea = document.getElementById("conteudo");
  const indiceAnotacao =
    parseInt(
      document.getElementById("modalCriarEditar").dataset.indiceAnotacao,
    ) || -1;

  const titulo = tituloInput.value.trim();
  const conteudo = conteudoTextarea.value.trim();

  if (!titulo || !conteudo) {
    mostrarMensagemErro("Título e conteúdo são obrigatórios!");
    return;
  }

  const novaAnotacao = {
    id: gerarID(), // Gera um ID único para cada anotação (veremos mais tarde)
    titulo,
    conteudo,
  };
  const anotacoes = recuperarAnotacoes();
  if (indiceAnotacao === -1) {
    anotacoes.push(novaAnotacao);
    salvarAnotacoes(anotacoes);
    carregarAnotacoes();
  } else {
    anotacoes[indiceAnotacao] = novaAnotacao;
    salvarAnotacoes(anotacoes);
    carregarAnotacoes();
  }

  salvarAnotacoes(anotacoes);
  fecharModal();
  console.log("Anotação salva com sucesso!");
}

// Inicialização da página
window.addEventListener("DOMContentLoaded", () => {
  carregarAnotacoes(); // Carrega as anotações ao carregar a página
  const btnCadastreSe = document.querySelector(".btn-cadastre-se");
  const btnNovaAnotacao = document.querySelector(".btn-nova-anotacao");
  // Adiciona manipuladores de eventos para os botões
  btnCadastreSe.addEventListener("click", abrirModalCadastro);
  btnNovaAnotacao.addEventListener("click", abrirModalNovaAnotacao);
});

const botaoLogout = document.querySelector("#btn-logout");

botaoLogout.addEventListener("click", function logoutUsuario() {
  if (confirm("Tem certeza que deseja sair?")) {
    localStorage.setItem("isLogado", false);
    window.location.href = "../home/index.html";
  }
});

// Buscar anotações

const buscaAnotacaoInput = document.querySelector("#campoBusca input");
function buscaAnotacoes() {
  const anotacoes = recuperarAnotacoes();
  const anotacaoABuscar = buscaAnotacaoInput.value;

  if (anotacaoABuscar != "") {
    const anotacoesFiltradas = anotacoes.filter(
      (anotacao) =>
        anotacao.titulo.toLowerCase().includes(anotacaoABuscar) ||
        anotacao.conteudo.toLowerCase().includes(anotacaoABuscar),
    );
    buscaAnotacaoInput.value = "";
    if (!!anotacoesFiltradas.length) {
      preencherListaAnotacoes(anotacoesFiltradas);
    } else {
      window.alert("Não existem anotações com o termo buscado!!!");
    }
  } else {
    window.alert("Digite um termo para procurar sua anotação...");
  }
}

const buscaAnotacaoBtn = document.querySelector("#buscaAnotacaoBtn");
buscaAnotacaoBtn.addEventListener("click", buscaAnotacoes);
