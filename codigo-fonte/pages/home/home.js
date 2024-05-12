/* Elements-Cadastro */
const cadastroModal = document.querySelector(".modal-container");
const cadastroBtn = document.querySelector(".default-btn");
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
const loginModal = document.querySelector(".modal-container2");
const loginBtn = document.querySelector(".btn-login");
const loginClose = document.querySelector(".btn-close-login");

/* Events Cadastro */
cadastroBtn.addEventListener("click", function () {
  cadastroModal.style.display = "block";
  limparFormularioCadastro();
});

cadastroClose.addEventListener("click", function () {
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

/* Events-Modal-Login */
loginBtn.addEventListener("click", function () {
  loginModal.style.display = "block";
});

loginClose.addEventListener("click", function () {
  loginModal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == loginModal) {
    loginModal.style.display = "none";
  }
});

/* Funções de Cadastro */
function cadastrarUsuario() {
  if (cadastroValido()) {
    let listaUsuarios = JSON.parse(
      localStorage.getItem("listaUsuarios") || "[]",
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
