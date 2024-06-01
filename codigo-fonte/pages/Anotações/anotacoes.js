// armazenamento local
function salvarAnotacoes(anotacoes) {
  localStorage.setItem('anotacoes', JSON.stringify(anotacoes));
}

// gerenciar o modal
function abrirModalNovaAnotacao() {
  document.getElementById("modalCriarEditar").style.display = "block";
  document.querySelector('.modal-container').classList.add('active');
  limparFormularioModal();
}

function limparFormularioModal() {
  const tituloInput = document.getElementById('titulo');
  const conteudoTextarea = document.getElementById('conteudo');
  tituloInput.value = '';
  conteudoTextarea.value = '';
}

function fecharModal() {
  document.getElementById("modalCriarEditar").style.display = 'none';
  document.querySelector('.modal-container').classList.remove('active');
}

function preencherModal(anotacao, indiceAnotacao) {
  const tituloInput = document.getElementById('titulo');
  const conteudoTextarea = document.getElementById('conteudo');

  tituloInput.value = anotacao.titulo || ''; 
  conteudoTextarea.value = anotacao.conteudo || ''; 

  document.getElementById("modalCriarEditar").dataset.indiceAnotacao = indiceAnotacao;
}

// gerenciar anotações
function gerarID() {
  return Math.floor(Math.random() * 1000000); 
}

function carregarAnotacoes() {
  const anotacoes = recuperarAnotacoes();
  if (anotacoes.length > 0) {
  preencherListaAnotacoes(anotacoes);
  mostrarMensagemSucesso('Anotações carregadas com sucesso!');
} else {
  preencherListaAnotacoes(anotacoes);
}}

function recuperarAnotacoes() {
  const anotacoesSalvas = localStorage.getItem('anotacoes');
  if (anotacoesSalvas) {
    return JSON.parse(anotacoesSalvas);
  } else {
    return [];
  }
}

function criarElementoAnotacao(anotacao) {
  const li = document.createElement('li');
  li.classList.add('anotacao');

  const h3 = document.createElement('h3');
  h3.textContent = anotacao.titulo;
  li.appendChild(h3);

  const p = document.createElement('p');
  p.textContent = anotacao.conteudo;
  li.appendChild(p);

  const btnExcluir = document.createElement('button');
  btnExcluir.classList.add('btn-excluir');
  btnExcluir.innerHTML = '<i class="fa fa-trash"></i>'; 
  btnExcluir.onclick = () => excluirAnotacao(anotacao);
  li.appendChild(btnExcluir);
  
  const btnEditar = document.createElement('button');
  btnEditar.classList.add('btn-editar');
  btnEditar.innerHTML = '<i class="fa fa-pen  "></i>';  
  btnEditar.onclick = () => editarAnotacao(anotacao);
  li.appendChild(btnEditar);

  return li;
}

function preencherListaAnotacoes(anotacoes) {
  const listaAnotacoes = document.querySelector('.lista-anotacoes');
  listaAnotacoes.innerHTML = ''; 

  anotacoes.forEach(anotacao => {
    const anotacaoHTML = criarElementoAnotacao(anotacao);
    listaAnotacoes.appendChild(anotacaoHTML);
  });
}

function editarAnotacao(anotacao) {
  const indiceAnotacao = recuperarAnotacoes().findIndex(a => a === anotacao);
  if (indiceAnotacao !== -1) {
    preencherModal(anotacao, indiceAnotacao);
    abrirModalNovaAnotacao();
  } else {
    mostrarMensagemErro('Erro ao buscar anotação para edição.');
  }
}

// atualizar a anotação na lista após salvar ou excluir
function atualizarAnotacaoNaLista(indice, novaAnotacao) {
  const listaAnotacoes = document.querySelector('.lista-anotacoes');
  const anotacaoHTML = criarElementoAnotacao(novaAnotacao); 

  if (indice > -1 && indice < listaAnotacoes.children.length) {
    listaAnotacoes.children[indice].replaceWith(anotacaoHTML); 
  } else {
    listaAnotacoes.appendChild(anotacaoHTML); 
  }
}

// salvar anotação 
function salvarAnotacao() {
  const tituloInput = document.getElementById('titulo');
  const conteudoTextarea = document.getElementById('conteudo');
  const indiceAnotacao = parseInt(document.getElementById("modalCriarEditar").dataset.indiceAnotacao) || -1;

  const titulo = tituloInput.value.trim();
  const conteudo = conteudoTextarea.value.trim();

  if (!titulo || !conteudo) {
    mostrarMensagemErro('Título e conteúdo são obrigatórios!');
    return; 
  }

  const novaAnotacao = {
    id: gerarID(), // Gera um ID único para cada anotação (veremos mais tarde)
    titulo,
    conteudo
  }
  const anotacoes = recuperarAnotacoes();
  if (indiceAnotacao === -1) {
    anotacoes.push(novaAnotacao);
    atualizarAnotacaoNaLista(anotacoes.length - 1, novaAnotacao); 
  } else {
    anotacoes[indiceAnotacao] = novaAnotacao;
    atualizarAnotacaoNaLista(indiceAnotacao, novaAnotacao); 
  }

  salvarAnotacoes(anotacoes);
  fecharModal();
  mostrarMensagemSucesso('Anotação salva com sucesso!');
}

// Inicialização da página
window.addEventListener('DOMContentLoaded', () => {
  carregarAnotacoes(); // Carrega as anotações ao carregar a página
  const btnCadastreSe = document.querySelector('.btn-cadastre-se');
  const btnNovaAnotacao = document.querySelector('.btn-nova-anotacao');
  // Adiciona manipuladores de eventos para os botões
  btnCadastreSe.addEventListener('click', abrirModalCadastro);
  btnNovaAnotacao.addEventListener('click', abrirModalNovaAnotacao);
});
