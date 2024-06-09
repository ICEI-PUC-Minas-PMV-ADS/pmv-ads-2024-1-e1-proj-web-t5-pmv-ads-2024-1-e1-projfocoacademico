/* Elements Homepage */
const homepageLink = document.querySelector(".btn-home");

/* Elements-Cadastro */
const cadastroModal = document.querySelector(".modal-container");
const cadastroBtns = document.querySelectorAll(".default-btn");
const cadastroClose = document.querySelector(".btn-close-cadastro");
const cadNome = document.querySelector("#cadNome");
const cadEmail = document.querySelector("#cadEmail");
const cadSenha = document.querySelector("#cadSenha");
const cadastrarBtn = document.querySelector("#btn-cadastrar");
const labelNomeCad = document.querySelector("#labelNomeCadastro");
const labelEmailCad = document.querySelector("#labelEmailCadastro");
const labelSenhaCad = document.querySelector("#labelSenhaCadastro");

const validInputOutline = "outline:1px solid green";
const invalidInputOutline = "outline:1px solid red";
const labelNomeOriginalHTML =
  "<i class='bx bxs-user' style='color:#f2f2f2'></i> Nome";
const labelEmailOriginalHTML =
  "<i class='bx bxs-envelope' style='color:#f2f2f2'></i> Email";
const labelSenhaOriginalHTML =
  "<i class='bx bxs-lock-alt' style='color:#f2f2f2'></i> Senha";

/*Elements-Modal-Login*/
const loginModal = document.querySelector(".modal-container-login");
const loginBtn = document.querySelector(".btn-login");
const loginClose = document.querySelector(".btn-close-login");
const loginEmail = document.querySelector("#loginEmail");
const loginSenha = document.querySelector("#loginSenha");
const submitLoginBtn = document.querySelector("#btn-submit-login");



/* Events Homepage */
homepageLink.addEventListener("click", function goToHomepage() {
  window.location.href = "./index.html";
});

/* Events Cadastro */
cadastroBtns.forEach((cadastroBtn) => {
  cadastroBtn.addEventListener("click", function abrirModalCadastro() {
    cadastroModal.style.display = "block";
    limparFormularioCadastro();
  });
});

cadastroClose.addEventListener("click", function fecharModalCadastro() {
  cadastroModal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == cadastroModal) {
    cadastroModal.style.display = "none";
  }
});

cadNome.addEventListener("keyup", () => {
  if (cadNome.value.length < 3) {
    let labelNomeInvalidoHTML =
      "<i class='bx bxs-user' style='color:#f2f2f2'></i> Nome <span class='invalidInput'> *deve conter mínimo 3 caracteres</span>";
    cadNome.setAttribute("style", invalidInputOutline);
    labelNomeCad.innerHTML = labelNomeInvalidoHTML;
  } else {
    cadNome.setAttribute("style", validInputOutline);
    labelNomeCad.innerHTML = labelNomeOriginalHTML;
  }
});

cadEmail.addEventListener("keyup", () => {
  if (!emailValido(cadEmail.value)) {
    let labelEmailInvalidaHTML =
      "<i class='bx bxs-envelope' style='color:#f2f2f2'></i> Email <span class='invalidInput'> *email no formato mail@mail.com</span>";
    cadEmail.setAttribute("style", invalidInputOutline);
    labelEmailCad.innerHTML = labelEmailInvalidaHTML;
  } else {
    cadEmail.setAttribute("style", validInputOutline);
    labelEmailCad.innerHTML = labelEmailOriginalHTML;
  }
});

cadSenha.addEventListener("keyup", () => {
  if (cadSenha.value.length < 6) {
    let labelSenhaInvalidaHTML =
      "<i class='bx bxs-lock-alt' style='color:#f2f2f2'></i> Senha <span class='invalidInput'> *senha deve ter mais de 5 caracteres</span>";
    cadSenha.setAttribute("style", invalidInputOutline);
    labelSenhaCad.innerHTML = labelSenhaInvalidaHTML;
  } else {
    cadSenha.setAttribute("style", validInputOutline);
    labelSenhaCad.innerHTML = labelSenhaOriginalHTML;
  }
});

cadastrarBtn.addEventListener("click", function (e) {
  e.preventDefault();
  cadastrarUsuario();
});

/* Funções de Cadastro */
function cadastrarUsuario() {
  if (cadastroValido()) {
    let listaUsuarios = JSON.parse(
      localStorage.getItem("listaUsuarios") || "[]"
    );
    listaUsuarios.push({
      nome: cadNome.value,
      email: cadEmail.value,
      senha: cadSenha.value,
    });

    localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));

    alert("Cadastrado com sucesso!");
    cadastroModal.style.display = "none";
  } else {
    alert("Verifique os campos...");
  }
}

function limparFormularioCadastro() {
  cadNome.value = "";
  cadSenha.value = "";
  cadEmail.value = "";
  labelNomeCad.innerHTML = labelNomeOriginalHTML;
  labelEmailCad.innerHTML = labelEmailOriginalHTML;
  labelSenhaCad.innerHTML = labelSenhaOriginalHTML;
}

function emailValido(email) {
  let emailPadrao = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailPadrao.test(email);
}

function cadastroValido() {
  return (
    cadNome.value.length >= 3 &&
    cadSenha.value.length >= 6 &&
    emailValido(cadEmail.value)
  );
}

/* Events-Modal-Login */
loginBtn.addEventListener("click", function abrirModalLogin() {
  loginModal.style.display = "block";
  limparFormLogin();
});

loginClose.addEventListener("click", function fecharModalClickBtn() {
  fecharModalLogin();
});

window.addEventListener("click", function (event) {
  if (event.target == loginModal) {
    fecharModalLogin();
  }
});
submitLoginBtn.addEventListener("click", function submitLoginUsuario(e) {
  e.preventDefault();
  if (isLoginValido(loginEmail.value, loginSenha.value)) {
    localStorage.setItem("isLogado", true);
    alert("Logado com sucesso!");
    fecharModalLogin();
    ocultarBotoes();
    atualizarBotaoLogout();
  } else {
    e.preventDefault();
    alert("Email ou senha inválidos...");
  }
});
window.addEventListener("load", function () {
  ocultarFerramentas();
  if (localStorage.getItem("isLogado") === "true") {
    atualizarBotaoLogout();
    ocultarBotoes();
  } else {
    exibirBotoesCadastro();
  }
});

//funções modal login
function fecharModalLogin() {
  loginModal.style.display = "none";
}

function getListaUsuarios() {
  const usuariosJSON = localStorage.getItem("listaUsuarios") || "[]";
  return JSON.parse(usuariosJSON);
}

function isLoginValido(userEmail, userPassword) {
  return getListaUsuarios().some(
    (usuario) => usuario.email === userEmail && usuario.senha === userPassword
  );
}

function mostrarSenha() {
  const inputPass = document.getElementById("loginSenha");
  const btnShowPass = document.getElementById("btn-senha");
  if (inputPass.type === "password") {
    inputPass.setAttribute("type", "text");
  } else {
    inputPass.setAttribute("type", "password");
  }
}
function limparFormLogin() {
  loginEmail.value = "";
  loginSenha.value = "";
}

// função para ocultar o botão ao efetuar login
function ocultarBotoes() {
  const botoes = document.querySelectorAll(".cadastro-btn");
  botoes.forEach((botao) => {
    botao.style.display = "none";
  });
}

//função para exibir os botões de cadastro ao fazer logout
function exibirBotoesCadastro() {
  const botoes = document.querySelectorAll(".cadastro-btn");
  botoes.forEach((botao) => {
    botao.style.display = "block";
  });
}

//função ocultar ferramentas
function ocultarFerramentas() {
  const botaoFerramentas = document.querySelector(".tools-btn");
  if (localStorage.getItem("isLogado") === "true") {
    botaoFerramentas.style.display = "block";
  } else {
    botaoFerramentas.style.display = "none";
  }
}

// Função para atualizar o botão para Logout e exibir os botões de cadastro
function atualizarBotaoLogout() {
  const botaoLogin = document.querySelector("#btn-login");
  ocultarFerramentas();
  botaoLogin.textContent = "Logout";
  botaoLogin.addEventListener("click", function logoutUsuario() {
    if (confirm("Tem certeza que deseja sair?")) {
      localStorage.setItem("isLogado", false);
      botaoLogin.textContent = "Login";
      botaoLogin.removeEventListener("click", logoutUsuario);

      exibirBotoesCadastro();
      ocultarFerramentas();
      fecharModalLogin();
    }
  });
}
